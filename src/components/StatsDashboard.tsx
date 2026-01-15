import { stats } from '../app/data';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function StatsDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-indigo-500/30"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 rounded-lg ${stat.color} bg-opacity-10`}>
                            <stat.icon className={`w-6 h-6 ${stat.color.split(' ')[0]}`} />
                        </div>
                        {stat.trendUp ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <ArrowUpRight className="w-3 h-3" />
                                Positive
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                                <ArrowDownRight className="w-3 h-3" />
                                Negative
                            </span>
                        )}
                    </div>

                    <div className="mb-1">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            {stat.label}
                        </p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {stat.value}
                        </h3>
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-3 mt-3">
                        {stat.trend}
                    </p>
                </div>
            ))}
        </div>
    );
}
