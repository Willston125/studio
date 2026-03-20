import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // 🔓 SITE OUVERT — Le rideau de maintenance est désactivé.
    // Pour réactiver la page de maintenance, décommenter le bloc ci-dessous.

    /*
    const url = request.nextUrl.clone()

    // Laisser passer en développement local
    if (process.env.NODE_ENV === 'development') {
        return NextResponse.next()
    }

    // Rediriger tout le trafic production vers /maintenance
    if (url.pathname !== '/maintenance' && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
        url.pathname = '/maintenance'
        return NextResponse.rewrite(url)
    }
    */

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

