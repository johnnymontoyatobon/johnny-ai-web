
export function createVideoShowcase() {
    const categories = [
        {
            title: "Long Form AI Automation",
            videos: [
                { id: "yuZfEXwKj6A", thumbnail: "https://img.youtube.com/vi/yuZfEXwKj6A/maxresdefault.jpg", url: "https://youtu.be/yuZfEXwKj6A" },
                { id: "mTTIQCOeILw", thumbnail: "https://img.youtube.com/vi/mTTIQCOeILw/maxresdefault.jpg", url: "https://youtu.be/mTTIQCOeILw" },
                { id: "JZ1GMGC3P4Y", thumbnail: "https://img.youtube.com/vi/JZ1GMGC3P4Y/maxresdefault.jpg", url: "https://youtu.be/JZ1GMGC3P4Y" },
            ]
        },
        {
            title: "AI Mastery Series",
            videos: [
                { id: "sFUhisyyuHY", thumbnail: "https://img.youtube.com/vi/sFUhisyyuHY/maxresdefault.jpg", url: "https://youtu.be/sFUhisyyuHY" },
                { id: "_X72tTEBzZI", thumbnail: "https://img.youtube.com/vi/_X72tTEBzZI/maxresdefault.jpg", url: "https://youtu.be/_X72tTEBzZI" },
                { id: "UN-Lx8rebXw", thumbnail: "https://img.youtube.com/vi/UN-Lx8rebXw/maxresdefault.jpg", url: "https://youtu.be/UN-Lx8rebXw" },
                { id: "YrGO_zOdmTE", thumbnail: "https://img.youtube.com/vi/YrGO_zOdmTE/maxresdefault.jpg", url: "https://youtu.be/YrGO_zOdmTE" },
            ]
        },
        {
            title: "Loom Demos",
            videos: [
                { id: "loom1", thumbnail: "https://cdn.loom.com/placeholder.png", url: "https://www.loom.com/share/a1de99d4e55b410ca31009c405724a44" },
                { id: "loom2", thumbnail: "https://cdn.loom.com/placeholder.png", url: "https://www.loom.com/share/adfc71f1621e44ba99fbdd38de7c9dc6" },
            ]
        }
    ];

    const renderCategory = (cat) => `
        <div class="mb-16">
            <h3 class="text-2xl font-bold mb-8 text-brand-accentBlue flex items-center gap-3">
                <span class="w-8 h-[2px] bg-brand-accentBlue"></span> ${cat.title}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${cat.videos.map(vid => `
                    <a href="${vid.url}" target="_blank" class="group relative overflow-hidden rounded-2xl aspect-video glass transition-all duration-500 hover:scale-[1.02] hover:border-brand-accentPurple/50">
                        <img src="${vid.thumbnail}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-brand-accentBlue flex items-center justify-center text-brand-bg group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p class="text-xs font-medium text-white">Watch Case Study $ightarrow$</p>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    return `
    <section id="portfolio" class="py-24 px-6 relative bg-brand-card/30">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentPurple mb-3">Proof of Concept</h2>
                <h3 class="text-4xl md:text-5xl font-bold mb-6">Autonomous Workflows <br/> <span class="text-brand-textSecondary">in Action</span></h3>
                <p class="text-brand-textSecondary font-light">A curated selection of AI implementations, from long-form automation to data-driven strategy.</p>
            </div>
            ${categories.map(renderCategory).join('')}
        </div>
        <!-- Background effect -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-brand-accentPurple/5 blur-[100px] pointer-events-none"></div>
    </section>
    `;
}
