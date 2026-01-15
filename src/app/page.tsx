'use client';

import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { StatsDashboard } from '@/components/StatsDashboard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { skills, tools, caseStudies, personalInfo } from './data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Hero />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <Section
                id="impact"
                title="Impact at a Glance"
                subtitle="Data-driven results across customer lifecycle, adoption, and revenue retention."
                className="-mt-20 relative z-10"
            >
                <StatsDashboard />
            </Section>

            <Section
                id="about"
                light
                title="About Me"
            >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p>
                            I partner with customers to ensure they achieve measurable business outcomes while helping SaaS companies drive retention, expansion, and long-term growth.
                        </p>
                        <p>
                            With a background in B2B SaaS, I specialize in bridging the gap between technical capabilities and business value. My approach is rooted in data transparency, proactive relationship management, and a relentless focus on the "Voice of Customer" (VoC).
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {['Customer Onboarding', 'Stakeholder Alignment', 'Value Realization', 'Renewals & Expansion'].map((item) => (
                                <div key={item} className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Core Competencies</h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {skills.map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md shadow-sm border border-slate-200 dark:border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map(tool => (
                                <span key={tool} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section
                id="work"
                title="Case Studies"
                subtitle="Real-world examples of turning challenges into opportunities."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={index} study={study} />
                    ))}
                </div>
            </Section>

            <Section
                id="advocacy"
                light
                title="Advocacy & Thought Leadership"
                subtitle="Driving the industry forward through shared knowledge."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-lg mb-2">Customer-First Mindset</h3>
                        <p className="text-slate-600 dark:text-slate-400">Championing the customer voice in every product roadmap discussion.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-lg mb-2">Cross-Functional Algo</h3>
                        <p className="text-slate-600 dark:text-slate-400">Bridging silos between Sales, Product, and Support to unify the customer journey.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-lg mb-2">Feedback Loops</h3>
                        <p className="text-slate-600 dark:text-slate-400">Structuring qualitative and quantitative feedback to drive product innovation.</p>
                    </div>
                </div>
            </Section>

            <Section id="contact" className="bg-indigo-900 text-center py-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let’s Build Customer Value Together</h2>
                <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
                    Ready to decrease churn and increase NRR? Let's connect and discuss how I can help your team succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-indigo-900 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Contact Me
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-all border border-indigo-700"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
