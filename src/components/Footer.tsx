import { personalInfo } from '../app/data';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h2>
                    <p className="text-sm">{personalInfo.role}</p>
                    <p className="text-xs mt-2 text-slate-600">Built with Next.js & Tailwind CSS</p>
                </div>

                <div className="flex gap-6">
                    <a href={personalInfo.linkedin} className="hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
