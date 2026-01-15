import { ArrowRight } from 'lucide-react';

interface CaseStudy {
    title: string;
    company: string;
    challenge: string;
    action: string;
    outcome: string;
    tags: string[];
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-indigo-500/30 transition-all shadow-sm hover:shadow-lg">
            <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">CASE STUDY</span>
                    <span className="px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                        {study.company}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    {study.title}
                </h3>
            </div>

            <div className="flex-1 p-8 pt-0 space-y-6">
                <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Challenge
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Strategy
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{study.action}</p>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
                    <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-400 mb-1 flex items-center gap-2">
                        Outcome
                    </h4>
                    <p className="text-emerald-800 dark:text-emerald-200 text-sm font-medium">{study.outcome}</p>
                </div>
            </div>

            <div className="p-8 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-6 md:mt-auto bg-slate-50/50 dark:bg-slate-950/30">
                <div className="flex flex-wrap gap-2 pt-6">
                    {study.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
