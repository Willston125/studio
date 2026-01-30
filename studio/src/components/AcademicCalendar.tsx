'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, AlertCircle, ChevronRight, GraduationCap } from 'lucide-react';

// Types
interface CalendarEvent {
    date: string;
    day: string;
    title: string;
    type: 'rentree' | 'event' | 'deadline';
    places?: number;
    moduleId?: number;
}

interface CalendarMonth {
    month: string;
    events: CalendarEvent[];
}

// Données du calendrier académique
const ACADEMIC_CALENDAR: CalendarMonth[] = [
    {
        month: "Février 2026",
        events: [
            { date: "15", day: "Sam", title: "Rentrée Module 1 — Site Web IA", type: "rentree", places: 6, moduleId: 1 },
            { date: "20", day: "Jeu", title: "Journée Portes Ouvertes", type: "event" },
            { date: "28", day: "Ven", title: "Deadline inscription Février", type: "deadline" }
        ]
    },
    {
        month: "Mars 2026",
        events: [
            { date: "01", day: "Sam", title: "Rentrée Module 2 — Vidéo Pro", type: "rentree", places: 4, moduleId: 2 },
            { date: "10", day: "Lun", title: "Rentrée Module 3 — Design", type: "rentree", places: 3, moduleId: 3 },
            { date: "15", day: "Sam", title: "Deadline inscription Mars", type: "deadline" },
            { date: "22", day: "Sam", title: "Rentrée Module 4 — Marketing", type: "rentree", places: 5, moduleId: 4 }
        ]
    },
    {
        month: "Avril 2026",
        events: [
            { date: "05", day: "Sam", title: "Pack Complet — Session Intensive", type: "rentree", places: 2, moduleId: 5 },
            { date: "12", day: "Sam", title: "Atelier Gratuit : Intro IA", type: "event" },
            { date: "25", day: "Ven", title: "Remise des Certificats Q1", type: "event" }
        ]
    }
];

// Styles par type d'événement
const eventStyles = {
    rentree: {
        bg: 'bg-gradient-to-r from-[#8B2635]/10 to-[#8B2635]/5 dark:from-[#8B2635]/20 dark:to-[#8B2635]/10',
        border: 'border-l-4 border-[#8B2635]',
        icon: GraduationCap,
        iconColor: 'text-[#8B2635]'
    },
    event: {
        bg: 'bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-900/10',
        border: 'border-l-4 border-blue-500',
        icon: Calendar,
        iconColor: 'text-blue-500'
    },
    deadline: {
        bg: 'bg-gradient-to-r from-amber-50 to-amber-50/50 dark:from-amber-900/20 dark:to-amber-900/10',
        border: 'border-l-4 border-amber-500',
        icon: AlertCircle,
        iconColor: 'text-amber-500'
    }
};

// Composant Event Card
const EventCard = ({ event, index }: { event: CalendarEvent; index: number }) => {
    const style = eventStyles[event.type];
    const IconComponent = style.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`flex items-center gap-4 p-4 rounded-xl ${style.bg} ${style.border} hover:shadow-md transition-all group`}
        >
            {/* Date */}
            <div className="text-center min-w-[60px] py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{event.date}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">{event.day}</div>
            </div>

            {/* Icône */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${style.bg}`}>
                <IconComponent size={20} className={style.iconColor} />
            </div>

            {/* Contenu */}
            <div className="flex-1">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-[#8B2635] dark:group-hover:text-[#C5A572] transition-colors">
                    {event.title}
                </div>
                {event.places && (
                    <div className="flex items-center gap-1 mt-1">
                        <Users size={14} className="text-amber-600" />
                        <span className={`text-sm font-medium ${event.places <= 2
                                ? 'text-red-600 dark:text-red-400'
                                : event.places <= 4
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-green-600 dark:text-green-400'
                            }`}>
                            {event.places} {event.places === 1 ? 'place restante' : 'places restantes'}
                        </span>
                    </div>
                )}
            </div>

            {/* CTA pour rentrées */}
            {event.type === 'rentree' && event.moduleId && (
                <Link
                    href={`/inscription?module=${event.moduleId}`}
                    className="flex items-center gap-1 px-4 py-2 bg-[#8B2635] text-white text-sm font-bold rounded-lg hover:bg-[#6e1615] transition-all transform hover:scale-105 shadow-md"
                >
                    S'inscrire
                    <ChevronRight size={16} />
                </Link>
            )}

            {/* Badge pour events */}
            {event.type === 'event' && (
                <span className="px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full">
                    Gratuit
                </span>
            )}

            {/* Badge pour deadlines */}
            {event.type === 'deadline' && (
                <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Clock size={12} />
                    Urgent
                </span>
            )}
        </motion.div>
    );
};

// Composant Principal
export default function AcademicCalendar() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B2635]/10 dark:bg-[#8B2635]/20 rounded-full text-[#8B2635] dark:text-[#C5A572] text-sm font-bold mb-4">
                        <Calendar size={16} />
                        Année Académique 2025-2026
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Calendrier des Rentrées
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Planifiez votre formation. Les places sont limitées à 10 participants par session
                        pour garantir un accompagnement personnalisé.
                    </p>
                </motion.div>

                {/* Légende */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-[#8B2635]" />
                        <span className="text-slate-600 dark:text-slate-400">Rentrée de formation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-slate-600 dark:text-slate-400">Événement / Portes Ouvertes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="text-slate-600 dark:text-slate-400">Deadline d'inscription</span>
                    </div>
                </div>

                {/* Calendrier Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACADEMIC_CALENDAR.map((month, monthIndex) => (
                        <motion.div
                            key={month.month}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: monthIndex * 0.15 }}
                            className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Mois Header */}
                            <h3 className="text-lg font-bold text-[#8B2635] dark:text-[#C5A572] mb-6 uppercase tracking-wider flex items-center gap-2">
                                <Calendar size={20} />
                                {month.month}
                            </h3>

                            {/* Events List */}
                            <div className="space-y-4">
                                {month.events.map((event, eventIndex) => (
                                    <EventCard key={eventIndex} event={event} index={eventIndex} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Vous ne trouvez pas de date qui vous convient ?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-all"
                    >
                        Demander une session personnalisée
                        <ChevronRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
