
export class Oscillator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
    private currentVal: number = 0;

    constructor(options: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
    }

    update() {
        this.phase += this.frequency;
        this.currentVal = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.currentVal;
    }

    value() {
        return this.currentVal;
    }
}

class Node {
    x: number = 0;
    y: number = 0;
    vx: number = 0;
    vy: number = 0;
}

class Line {
    spring: number;
    friction: number;
    nodes: Node[] = [];

    constructor(options: { spring: number }) {
        this.spring = options.spring;
        this.friction = 0.5 + 0.01 * Math.random() - 0.005;
        
        for (let i = 0; i < 50; i++) {
            const node = new Node();
            this.nodes.push(node);
        }
    }

    update(pos: { x: number, y: number }, dampening: number, tension: number) {
        let currentSpring = this.spring;
        let firstNode = this.nodes[0];

        firstNode.vx += (pos.x - firstNode.x) * currentSpring;
        firstNode.vy += (pos.y - firstNode.y) * currentSpring;

        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if (i > 0) {
                const prevNode = this.nodes[i - 1];
                node.vx += (prevNode.x - node.x) * currentSpring;
                node.vy += (prevNode.y - node.y) * currentSpring;
                node.vx += prevNode.vx * dampening;
                node.vy += prevNode.vy * dampening;
            }
            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;
            currentSpring *= tension;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        const first = this.nodes[0];
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);

        for (let i = 1; i < this.nodes.length - 1; i++) {
            const curr = this.nodes[i];
            const next = this.nodes[i + 1];
            const midX = 0.5 * (curr.x + next.x);
            const midY = 0.5 * (curr.y + next.y);
            ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
        }

        const lastButOne = this.nodes[this.nodes.length - 2];
        const last = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(lastButOne.x, lastButOne.y, last.x, last.y);
        ctx.stroke();
        ctx.closePath();
    }
}

export const initCursorTrail = () => {
    const canvas = document.getElementById('cursor-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    
    let running = true;
    let pos = { x: 0, y: 0 };
    let lines: Line[] = [];
    const E = {
        trails: 80,
        dampening: 0.025,
        tension: 0.99,
    };

    const osc = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const updatePos = (e: MouseEvent | TouchEvent) => {
        if ('touches' in e) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        } else {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', updatePos);
    document.addEventListener('touchmove', updatePos);
    
    resize();

    const initLines = () => {
        lines = [];
        for (let i = 0; i < E.trails; i++) {
            lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
        }
    };

    const render = () => {
        if (!running) return;
        
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        
        const hue = Math.round(osc.update());
        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.025)`;
        ctx.lineWidth = 10;

        for (const line of lines) {
            line.update(pos, E.dampening, E.tension);
            line.draw(ctx);
        }
        
        requestAnimationFrame(render);
    };

    initLines();
    render();
};
