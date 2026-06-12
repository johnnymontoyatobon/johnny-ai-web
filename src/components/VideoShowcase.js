export function createVideoShowcase() {
    const portfolio = [
        {
            category: "AI Commercials",
            items: [
                { title: "Pet Awesome Cat Bed", desc: "Hyper-realistic AI commercial focusing on product utility.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1777070112/grok-video-29db8a0a-20c4-4974-924e-7116a3ea28d4_roy004.mp4", type: "video", tag: "COMMERCIAL" },
                { title: "GIOLI Ashwaganda", desc: "Cinematic supplement marketing using generative AI.", url: "https://youtu.be/nAsigJ40l9o?si=QnWur-W3mm0b3_Sd", type: "youtube", tag: "COMMERCIAL" },
                { title: "TALLA8US Featured", desc: "Futuristic sneakers showcase with AI-driven rotations.", url: "https://youtu.be/GfL_Dvecatc?si=3bT3iddDuQyTwGz5", type: "youtube", tag: "SNEAKERS" },
                { title: "Adidas Rotating Studio", desc: "Experimental AI rotation for product presentation.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1773877555/Adidas_shoes_rotating_in_studio_dea722825d_mboixp.mp4", type: "video", tag: "SNEAKERS" },
                { title: "Nutrycell (ES)", desc: "Full-scale AI commercial deployment for health and wellness.", url: "https://youtu.be/kLYdKQ7N8LA?si=VdQ0auSwXXAWyFgS", type: "youtube", tag: "COMMERCIAL" },
            ]
        },
        {
            category: "Cinematic AI",
            items: [
                { title: "Virgin Mary Close-up", desc: "Advanced AI face-generation and texture mapping.", url: "https://youtu.be/23s6BvlqgTI?si=ZxLkoIdur348oLsv", type: "youtube", tag: "ART" },
                { title: "Virgin Mary Zoom-in", desc: "Dynamic zoom implementation using generative AI.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1772739324/descarga2_ftbo6d.mp4", type: "video", tag: "ART" },
                { title: "Viking Dragon Breath", desc: "Complex particle simulation and environment rendering.", url: "https://youtu.be/BLkVCq_hwI8?si=4PXL0Q1GKghBL5zw", type: "youtube", tag: "CINEMATIC" },
                { title: "Viking Dragon Shorts", desc: "High-impact short format version of the cinematic.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1772740868/a255d04c-747d-432e-a76a-a33304009566_nb4egr.mp4", type: "video", tag: "CINEMATIC" },
            ]
        },
        {
            category: "Brand & Shorts",
            items: [
                { title: "Super Mega Intro", desc: "Brand identity launch using generative AI.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1772824261/watermarked-95f45493-7e69-4dfe-83fa-dbc027475417_hspzu4.mp4", type: "video", tag: "BRANDING" },
                { title: "Talla8US AI Shorts", desc: "Rapid-fire AI commercials for TikTok/Reels.", url: "/assets/descarga1.mp4", type: "video", tag: "SHORTS" },
                { title: "AI Pieces", desc: "Experimental generative video fragments.", url: "https://res.cloudinary.com/dbdte9tsr/video/upload/v1781282653/generated_video_3_tnmyak.mp4", type: "video", tag: "EXPERIMENTAL" },
            ]
        }
    ];

    const renderItem = (item) => {
        const isYoutube = item.type === 'youtube';
        const embedUrl = isYoutube ? item.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') : item.url;
        return `
            <div class="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-brand-accentBlue/50 transition-all duration-500 flex flex-col h-full">
                <div class="relative aspect-video w-full overflow-hidden bg-black">
                    ${isYoutube ? `<iframe class="w-full h-full" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>` : `<video src="${item.url}" class="w-full h-full object-cover" loop muted autoplay playsinline></video>`}
                    <div class="absolute top-3 right-3 px-2 py-1 rounded-md bg-brand-bg/80 text-[10px] font-bold text-brand-accentBlue uppercase tracking-widest border border-brand-accentBlue/20">${item.tag}</div>
                </div>
                <div class="p-6 space-y-3 flex-grow">
                    <h4 class="text-xl font-bold group-hover:text-brand-accentBlue transition-colors">${item.title}</h4>
                    <p class="text-brand-textSecondary text-sm font-light leading-relaxed">${item.desc}</p>
                </div>
            </div>
        `;
    };

    return `
    <section id="portfolio" class="py-24 px-6 relative bg-brand-bg">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentPurple mb-3">AI Cinema Portfolio</h2>
                <h3 class="text-4xl md:text-6xl font-bold mb-6">Pushing the Limits of <br/> <span class="bg-gradient-to-r from-brand-accentBlue to-brand-accentPurple bg-clip-text text-transparent">Generative Visuals</span></h3>
                <p class="text-brand-textSecondary font-light text-lg">From high-conversion commercials to cinematic art, blending AI precision with creative direction.</p>
            </div>
            ${portfolio.map(cat => `
                <div class="mb-20">
                    <h3 class="text-2xl font-bold mb-8 text-brand-accentBlue flex items-center gap-3">
                        <span class="w-8 h-[2px] bg-brand-accentBlue"></span> ${cat.category}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${cat.items.map(renderItem).join('')}</div>
                </div>
            `).join('')}
        </div>
    </section>
    `;
}