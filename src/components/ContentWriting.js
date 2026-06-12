export function createContentWriting() {
    const docs = [
        { title: "Bienestar Emocional", file: "/assets/Bienestar Emocional.png", type: "img" },
        { title: "Bienestar Total", file: "/assets/BIENESTAR TOTAL (1).png", type: "img" },
        { title: "Guía de Bienestar", file: "/assets/Bienestar-Emocional.pdf", type: "pdf" },
        { title: "Compañía Total", file: "/assets/Compania-total.pdf", type: "pdf" },
        { title: "Control Total", file: "/assets/Control-total.png", type: "img" },
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
                        ${doc.type === 'img'
                            ? `<img src="${doc.file}" class="w-full h-48 object-cover rounded-2xl mb-4" />`
                            : `<div class="w-full h-48 flex items-center justify-center bg-brand-bg rounded-2xl mb-4 border border-white/5">
                                <svg class="w-12 h-12 text-brand-accentPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                               </div>`
                        }
                        <div class="text-center">
                            <h4 class="font-bold text-brand-textPrimary">${doc.title}</h4>
                            <a href="${doc.file}" target="_blank" class="text-xs text-brand-accentPurple hover:underline">View Document &rarr;</a>
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