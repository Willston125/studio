'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.button
                        key="bubble"
                        onClick={() => setIsExpanded(true)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="group relative bg-white rounded-full shadow-2xl p-2 pr-6 flex items-center gap-3 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
                        </div>

                        <div className="text-left">
                            <p className="text-xs text-gray-500 font-medium">Parlez-nous</p>
                            <p className="text-sm font-bold text-gray-900">Besoin d'aide ?</p>
                        </div>
                    </motion.button>
                ) : (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white rounded-3xl shadow-2xl p-6 w-80 border border-gray-100"
                    >
                        {/* Header avec icône équipe */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B2635] to-[#6e1615] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        CA
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Cineworld Académie</h4>
                                    <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        En ligne
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Message de bienvenue */}
                        <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                            <p className="text-sm text-gray-700">
                                👋 Bonjour ! Comment pouvons-nous vous aider ?
                            </p>
                        </div>

                        <p className="text-xs text-gray-500 mb-4 text-center">
                            Réponse habituelle : <span className="font-semibold text-green-600">quelques minutes</span>
                        </p>

                        <a
                            href="https://wa.me/25377145306"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-[1.02]"
                        >
                            <MessageCircle size={20} />
                            Envoyer un message
                        </a>

                        <p className="text-[10px] text-gray-400 text-center mt-3">
                            Propulsé par WhatsApp
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
