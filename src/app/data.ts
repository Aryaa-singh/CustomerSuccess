import { LucideIcon, Users, Zap, ShieldCheck, Database } from 'lucide-react';

export interface Stat {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    color: string;
}

export const stats: Stat[] = [
    {
        label: 'Churn Reduction',
        value: '25%',
        trend: '↓ 15-25% Year over Year',
        trendUp: true, // "good" direction
        icon: ShieldCheck,
        color: 'text-indigo-600 bg-indigo-50',
    },
    {
        label: 'Product Adoption',
        value: '+30%',
        trend: '↑ Increased Engagement',
        trendUp: true,
        icon: Zap,
        color: 'text-blue-600 bg-blue-50',
    },
    {
        label: 'Managed ARR',
        value: '$4.5M',
        trend: 'Across Enterprise & Mid-Market',
        trendUp: true,
        icon: Database,
        color: 'text-emerald-600 bg-emerald-50',
    },
    {
        label: 'NPS Score',
        value: '72',
        trend: '↑ From 45 Baseline',
        trendUp: true,
        icon: Users,
        color: 'text-purple-600 bg-purple-50',
    },
];

export const skills = [
    "Customer Lifecycle Management",
    "Onboarding & Implementation",
    "Renewal & Expansion Strategy",
    "QBRs & Executive Success",
    "Churn Risk Mitigation",
    "Product Adoption & Enablement"
];

export const tools = [
    "Gainsight", "Totango", "Salesforce", "HubSpot", "Zendesk", "Intercom", "Notion", "Looker"
];

export const caseStudies = [
    {
        title: "Optimizing Onboarding Velocity",
        company: "SaaS Co. (Series B)",
        challenge: "Onboarding backlog was 6 weeks; completion rate stuck at 60%.",
        action: "Redesigned playbooks, implemented automated email nurture, and simplified technical integration steps.",
        outcome: "Completion rate hit 90% within 90 days; time-to-value reduced by 40%.",
        tags: ["Onboarding", "Process", "Automation"]
    },
    {
        title: "Enterprise Expansion & Turnaround",
        company: "FinTech Platform",
        challenge: "Key Enterprise account at high risk of churn due to low adoption.",
        action: "Executed deep-dive executive QBRs, aligned product roadmap with client goals, and rolled out custom training.",
        outcome: "Secured renewal + 20% upsell ($150k ARR impact).",
        tags: ["Retention", "Expansion", "Enterprise"]
    }
];

export const personalInfo = {
    name: "Alex Sterling",
    role: "Strategic Customer Success Manager",
    tagline: "Customer Success is not support — it’s strategy.",
    email: "alex.sterling@example.com",
    linkedin: "https://linkedin.com/in/alexsterling",
    resumeLink: "#"
}
