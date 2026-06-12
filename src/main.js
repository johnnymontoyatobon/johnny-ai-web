
import './styles/index.css';
import { initCursorTrail } from './lib/CursorTrail';
import { createHero } from './components/Hero';
import { createVideoShowcase } from './components/VideoShowcase';
import { createExpertise, createFinalCTA } from './components/Expertise';

document.addEventListener('DOMContentLoaded', () => {
    initCursorTrail();
    
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = `
            ${createHero()}
            ${createVideoShowcase()}
            ${createExpertise()}
            ${createFinalCTA()}
            <footer class="py-12 text-center text-brand-textSecondary text-sm border-t border-white/5 relative z-10 bg-brand-bg">
                <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>© ${new Date().getFullYear()} Johnny Montoya AI. Built for the Future.</p>
                    <div class="flex gap-6">
                        <a href="https://beacons.ai/sermejorahora" class="hover:text-brand-accentBlue transition-colors">Beacons</a>
                        <a href="https://github.com/johnnymontoyatobon" class="hover:text-brand-accentBlue transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        `;
    }
});
