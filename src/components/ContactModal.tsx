'use client';

import { useState } from 'react';
import { X, Mail, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/app/data';

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this to an API
        console.log('Form submitted:', formData);
        window.location.href = `mailto:${personalInfo.email}?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let's Connect</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Send me a message directly or connect with me on LinkedIn.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            Email Me
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25"
                        >
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
