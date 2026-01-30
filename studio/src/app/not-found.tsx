import Link from 'next/link';
import { Film } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black dark:bg-slate-950 flex items-center justify-center text-center px-6">
            <div className="max-w-md">
                <div className="w-24 h-24 bg-[#6e1615]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#6e1615]/40 animate-pulse">
                    <Film className="w-12 h-12 text-[#6e1615]" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-white mb-4">404 - Scène manquante</h2>
                <p className="text-gray-400 mb-8">
                    Cette page n'existe pas dans le scénario. Retournons à l'action principale.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6e1615] text-white rounded-lg font-bold hover:bg-[#8b1c1b] transition-all hover:scale-105 shadow-lg"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}
