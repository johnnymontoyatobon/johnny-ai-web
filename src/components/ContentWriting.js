export function createContentWriting() {
    const docs = [
        {
            title: "Bienestar Emocional",
            file: "https://res.cloudinary.com/dbdte9tsr/image/upload/v1781304802/Bienestar_Emocional_u2kt6m.png",
            desc: "Exploring the psychology of emotional balance and mental health."
        },
        {
            title: "Bienestar Total",
            file: "https://res.cloudinary.com/dbdte9tsr/image/upload/v1781304870/BIENESTAR_TOTAL_1_hu7zli.png",
            desc: "A holistic approach to total wellness and peak performance."
        },
        {
            title: "Control Total",
            file: "https://res.cloudinary.com/dbdte9tsr/image/upload/v1781304904/Control_total_jzhnla.png",
            desc: "Mastering the art of self-discipline and cognitive control."
        },
    ];

    return `
    <section id="content-writing" class="py-24 px-6 relative bg-brand-card/20">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentPurple mb-3">The Power of Words</h2>
                <h3 class="text-4xl md:text-6xl font-bold mb-6">Content Writing & <br/> <span class="text-brand-textSecondary">Emotional Design</span></h3>
                <p class="text-brand-textSecondary font-light text-lg">Founder of the 'Ser Mejor Ahora' methodology, merging psychology with high-conversion copywriting.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${docs.map(doc => `
                    <div class="group relative rounded-3xl overflow-hidden glass border border-white/10 p-4 hover:border-brand-accentPurple/50 transition-all duration-500">
                        <div class="relative overflow-hidden rounded-2xl mb-4">
                            <img src="${doc.file}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" alt="${doc.title}" />
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60"></div>
                        </div>
                        <div class="text-center mt-4">
                            <h4 class="font-bold text-brand-textPrimary text-xl mb-2">${doc.title}</h4>
                            <p class="text-brand-textSecondary text-xs font-light mb-4 px-2">${doc.desc}</p>
                            <a href="${doc.file}" target="_blank" class="inline-block px-6 py-2 glass rounded-full text-xs text-brand-accentPurple font-bold hover:bg-brand-accentPurple hover:text-white transition-all">
                                View Masterpiece &rarr;
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-16 text-center">
                <a href="https://beacons.ai/sermejorahora" target="_blank" class="px-8 py-4 glass rounded-full font-semibold hover:border-brand-accentPurple transition-all duration-300">
                    Explore 'Ser Mejor Ahora' Methodology
                </a>
            </div>
        </div>
    </section>
    `;
}