import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

    // Si on essaie d'accéder à autre chose que la page "coming-soon" ou les images
    if (url.pathname !== '/coming-soon' && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
        url.pathname = '/coming-soon'
        return NextResponse.rewrite(url)
    }
}

export const config = {
    // On applique ça à absolument toutes les routes du site
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
