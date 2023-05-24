import { NextResponse, NextRequest } from 'next/server';

export default function middleware(req) {
    let verify = req.cookies.get('loggedin');

    if (!verify) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextRequest.next();
}
