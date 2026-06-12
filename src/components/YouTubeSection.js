export function createYouTubeSection() {
    const series = [
        {
            title: "AI Mastery Series",
            desc: "A deep dive into the tools and strategies of the new AI economy. Learn how to deploy agents and scale workflows.",
            url: "https://youtu.be/sFUhisyyuHY?si=_CBUcTYHMAGGoqSx",
            tag: "EDUCATION"
        },
        {
            title: "Autonomous Workflows",
            desc: "Exploring the intersection of LLMs and real-world business operations for maximum efficiency.",
            url: "https://youtu.be/_X72tTEBzZI?si=EvpSmkqWedg0HcFR",
            tag: "STRATEGY"
        },
        {
            title: "The Future of Gen AI",
            desc: "Analysis of the latest trends in generative media and how they impact high-conversion copywriting.",
            url: "https://youtu.be/UN-Lx8rebXw?si=IMlJsrgFtvQjs4UH",
            tag: "TRENDS"
        }
    ];

    return `
    <section id="youtube" class="py-24 px-6 relative bg-brand-bg">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentBlue mb-3">Knowledge Hub</h2>
                <h3 class="text-4xl md:text-6xl font-bold mb-6">YouTube <br/><span class="text-brand-textSecondary">Masterclasses</span></h3>
                <p class="text-brand-textSecondary font-light text-lg">Sharing the blueprint of AI automation and the 'Ser Mejor Ahora' mindset with a global audience.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${series.map(item => `
                    <div class="group relative rounded-3xl overflow-hidden glass border border-white/10 p-8 hover:border-brand-accentBlue/50 transition-all duration-500 flex flex-col h-full">
                        <div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.498-3.016C19.505 3.17 12 3.17 12 3.17s-7.505 0-2.498 3.016 0 0 0-3.016 3.016C4.444 6.186 0 8.517 0 12s4.444 5.814 8.5 5.814c3.435 0 6-2.584 6-5.814 0-1.247-.5-2.443-1.382-3.362l.002-.001z"/></svg>
                        </div>
                        <h4 class="text-xl font-bold mb-4 group-hover:text-brand-accentBlue transition-colors">${item.title}</h4>
                        <p class="text-brand-textSecondary text-sm font-light leading-relaxed mb-8 flex-grow">${item.desc}</p>
                        <a href="${item.url}" target="_blank" class="text-brand-accentBlue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            Watch Series &rarr;
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}