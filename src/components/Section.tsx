import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    light?: boolean;
}

export function Section({ id, title, subtitle, children, className, light = false }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                "py-16 md:py-24 px-6 md:px-12 lg:px-24",
                light ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-950",
                className
            )}
        >
            <div className="max-w-6xl mx-auto">
                {(title || subtitle) && (
                    <div className="mb-12 text-center max-w-2xl mx-auto">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {subtitle}
                            </p>
                        )}
                        <div className="mt-4 w-16 h-1 bg-indigo-500 mx-auto rounded-full opacity-80" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
