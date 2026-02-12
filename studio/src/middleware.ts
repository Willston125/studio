import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    const path = url.pathname

    // Laisser passer : coming-soon, fichiers statiques (_next), API, et images/fichiers du dossier public
    if (
        path === '/coming-soon' ||
        path.startsWith('/_next') ||
        path.startsWith('/api') ||
        path.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|mp4|pdf|css|js|woff|woff2|ttf)$/)
    ) {
        return NextResponse.next()
    }

    // Tout le reste → rediriger vers coming-soon
    url.pathname = '/coming-soon'
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/((?!_next/static|_next/image).*)'],
}
