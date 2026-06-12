
export function createHero() {
    return `
    <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accentBlue/10 blur-[120px] animate-float pointer-events-none"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accentPurple/10 blur-[120px] animate-float pointer-events-none" style="animation-delay: -3s"></div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            <div class="lg:col-span-6 text-center lg:text-left space-y-8">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-accentBlue/10 border border-brand-accentBlue/20 rounded-full text-xs font-medium text-brand-accentBlue">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accentBlue opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accentBlue"></span>
                    </span>
                    <span class="tracking-wide">AI Automation Expert & Strategist</span>
                </div>

                <h1 class="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                    Scaling Intelligence. <br/>
                    <span class="bg-gradient-to-r from-brand-accentBlue via-white to-brand-accentPurple bg-clip-text text-transparent">
                        Automating Growth.
                    </span>
                </h1>

                <p class="text-brand-textSecondary text-lg md:text-xl font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    I transform complex business operations into autonomous high-performance engines using cutting-edge AI agents and strategic automation.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#portfolio" class="px-8 py-4 bg-brand-textPrimary text-brand-bg font-bold rounded-full hover:bg-brand-accentBlue transition-all duration-300 hover:scale-105 glow-blue">
                        View My Work
                    </a>
                    <a href="https://beacons.ai/sermejorahora" target="_blank" class="px-8 py-4 glass rounded-full font-semibold hover:border-brand-accentPurple transition-all duration-300">
                        Book a Call
                    </a>
                </div>
            </div>

            <div class="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
                <div class="absolute inset-0 z-0 flex items-center justify-center">
                    <spline-viewer 
                        url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
                        class="w-full h-full"
                        loading-anim-type="none">
                    </spline-viewer>
                </div>

                <div class="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out glass p-2 group">
                    <img 
                        src="/assets/johnnyia1.png" 
                        alt="Johnny Montoya" 
                        class="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div class="absolute bottom-4 left-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg text-[10px] text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        AI Architect
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
