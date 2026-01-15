import { personalInfo } from '../app/data';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 text-slate-600 py-12 px-6 border-t border-slate-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{personalInfo.name}</h2>
                    <p className="text-sm">{personalInfo.role}</p>
                    <p className="text-xs mt-2 text-slate-500">Built with Next.js & Tailwind CSS</p>
                </div>

                <div className="flex gap-6">
                    <a href={personalInfo.linkedin} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
