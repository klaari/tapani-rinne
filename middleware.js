import { NextResponse } from "next/server";

export function middleware(request) {
    const url = request.nextUrl.clone();
    if (url.pathname === "/rinnemajamaki") {
        url.pathname = "/rinnemajamaki/index.html";
        return NextResponse.redirect(url);
    }
}
