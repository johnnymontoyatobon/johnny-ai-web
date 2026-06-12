export function createExpertise() {
    return `
    <section id="expertise" class="py-24 px-6 relative bg-brand-bg">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentBlue mb-3">Data & Conversion</h2>
                <h3 class="text-4xl md:text-6xl font-bold mb-6">Bridging the Gap Between <br/> <span class="text-brand-textSecondary">Data and Intelligence</span></h3>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="group relative p-8 rounded-3xl glass border border-white/10 hover:border-brand-accentBlue/40 transition-all duration-500">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-brand-accentBlue/10 flex items-center justify-center text-brand-accentBlue">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                        </div>
                        <h4 class="text-2xl font-bold">Data Analysis & Strategy</h4>
                    </div>
                    <p class="text-brand-textSecondary mb-8 leading-relaxed">Transforming raw data into actionable intelligence. Specialized in identifying operational leaks and optimizing financial flows.</p>
                    <div class="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-brand-accentBlue/50 transition-colors">
                        <img src="/assets/401k.png" alt="Data Analysis" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div class="absolute bottom-4 left-4 text-xs font-medium text-brand-accentBlue">Case Study: 401k Optimization</div>
                    </div>
                </div>
                <div class="group relative p-8 rounded-3xl glass border border-white/10 hover:border-brand-accentPurple/40 transition-all duration-500">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-brand-accentPurple/10 flex items-center justify-center text-brand-accentPurple">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <h4 class="text-2xl font-bold">The Funnel System</h4>
                    </div>
                    <p class="text-brand-textSecondary mb-8 leading-relaxed">Designing autonomous systems that capture, nurture, and convert leads using a scientific approach to UX and AI.</p>
                    <a href="https://beacons.ai/sermejorahora" target="_blank" class="px-8 py-4 bg-brand-accentPurple text-brand-bg font-bold rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                        View Strategy &rarr;
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}