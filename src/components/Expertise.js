
export function createExpertise() {
    return `
    <section id="expertise" class="py-24 px-6 relative bg-brand-bg">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accentBlue mb-3">Capabilities</h2>
                <h3 class="text-4xl md:text-5xl font-bold mb-6">Bridging the Gap Between <br/> <span class="text-brand-textSecondary">Data and Intelligence</span></h3>
                <p class="text-brand-textSecondary font-light">Combining strategic content writing with deep data analysis to build autonomous systems that actually convert.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Data Analysis Card -->
                <div class="group relative p-8 rounded-3xl glass hover:border-brand-accentBlue/40 transition-all duration-500">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-brand-accentBlue/10 flex items-center justify-center text-brand-accentBlue">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                        </div>
                        <h4 class="text-2xl font-bold">Data Analysis & Strategy</h4>
                    </div>
                    <p class="text-brand-textSecondary mb-8 leading-relaxed">
                        Transforming raw data into actionable intelligence. Specialized in identifying operational leaks and optimizing financial flows.
                    </p>
                    <div class="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-brand-accentBlue/50 transition-colors">
                        <img src="/assets/401k.png" alt="Data Analysis Case Study" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        <div class="absolute bottom-4 left-4 text-xs font-medium text-brand-accentBlue">Case Study: 401k Optimization</div>
                    </div>
                </div>

                <!-- Content Writing Card -->
                <div class="group relative p-8 rounded-3xl glass hover:border-brand-accentPurple/40 transition-all duration-500">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-brand-accentPurple/10 flex items-center justify-center text-brand-accentPurple">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H//L11.828 15H9v-4h2a2 2 0 012 2v4"/></svg>
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 13.036H3v-3.572L16.071 5.232z" />
                        </div>
                        <h4 class="text-2xl font-bold">High-Conversion Copywriting</h4>
                    </div>
                    <p class="text-brand-textSecondary mb-8 leading-relaxed">
                        Merging psychology with AI to create content that captures attention and drives action. Author of "Ser Mejor Ahora" methodology.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <span class="px-3 py-1 rounded-full bg-brand-accentPurple/10 text-brand-accentPurple text-xs border border-brand-accentPurple/20">AI Content Strategy</span>
                        <span class="px-3 py-1 rounded-full bg-brand-accentPurple/10 text-brand-accentPurple text-xs border border-brand-accentPurple/20">Growth Hacking</span>
                        <span class="px-3 py-1 rounded-full bg-brand-accentPurple/10 text-brand-accentPurple text-xs border border-brand-accentPurple/20">Emotional Design</span>
                    </div>
                    <a href="https://beacons.ai/sermejorahora" target="_blank" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-textPrimary hover:text-brand-accentPurple transition-colors">
                        Explore "Ser Mejor Ahora" $ightarrow$
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function createFinalCTA() {
    return `
    <section class="py-24 px-6 relative overflow-hidden bg-brand-card">
        <div class="max-w-4xl mx-auto text-center relative z-10">
            <h2 class="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Deploy <br/> 
                <span class="text-brand-accentBlue">Autonomous Growth?</span>
            </h2>
            <p class="text-brand-textSecondary text-lg mb-12 max-w-2xl mx-auto">
                Stop trading time for money. Let's build a system that works while you sleep.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="https://beacons.ai/sermejorahora" class="px-10 py-5 bg-brand-textPrimary text-brand-bg font-bold rounded-full text-lg hover:bg-brand-accentBlue transition-all duration-300 glow-blue">
                    Book Your Strategy Call
                </a>
                <a href="https://github.com/johnnymontoyatobon" target="_blank" class="px-10 py-5 glass rounded-full text-lg font-semibold hover:border-white/40 transition-all duration-300 flex items-center gap-3">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0.25C6.541 0.25 0 6.541 0 12.25c0 5.46 4.25 10.25 10 11.75v-4.5c-2.78 0-3.53-1.5-3.53-3.35 0-1.85 1.85-3.35 3.53-3.35 1.18 0 1.85-.75 1.85-1.65 0-1.85-1.18-3.35-2.85-3.35-3.53 0-5.46 2.25-5.46 5.25 0 1.85 1.25 3.35 3.53 3.35 2.78 0 3.53-1.5 3.53-3.35 0-2.85-1.85-4.35-3.53-4.35-3.53 0-5.46 2.25-5.46 5.25 0 1.85 1.25 3.35 3.53 3.35 2.78 0 3.53-1.5 3.53-3.35 0-2.85-1.85-4.35-3.53-4.35-3.53 0-5.46 2.25-5.46 5.25 0 1.85 1.25 3.35 3.53 3.35 2.78 0 3.53-1.5 3.53-3.35 0-2.85-1.85-4.35-3.53-4.35z"/></svg>
                    View GitHub
                </a>
            </div>
        </div>
        <!-- Background Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.1),transparent_70%)] pointer-events-none"></div>
    </section>
    `;
}
