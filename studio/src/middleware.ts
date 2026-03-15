import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

    // 1. CONDITION MAGIQUE : Si on est en local (développement), on laisse passer
    if (process.env.NODE_ENV === 'development') {
        return NextResponse.next()
    }

    // 2. Sinon, sur Vercel (production), on applique le rideau
    if (url.pathname !== '/maintenance' && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
        url.pathname = '/maintenance'
        return NextResponse.rewrite(url)
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
