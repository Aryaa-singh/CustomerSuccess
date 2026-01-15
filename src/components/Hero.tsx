import { ArrowRight, FileText } from 'lucide-react';
import { personalInfo } from '../app/data';

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-900 pt-16 pb-32 lg:pt-32 lg:pb-48">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[80rem] rounded-full bg-gradient-to-tr from-indigo-900/40 to-purple-900/40 blur-3xl -z-10 opacity-50 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 border border-indigo-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    {personalInfo.tagline}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    Driving Retention, Adoption, <br className="hidden md:block" />
                    and Revenue for <span className="text-indigo-400">B2B SaaS</span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
                    Customer Success professional specializing in onboarding, lifecycle management, renewals, and expansion strategies that scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#impact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25"
                    >
                        View My Impact
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={personalInfo.resumeLink}
                        download
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-200 bg-white/10 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                    >
                        <FileText className="w-4 h-4" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
