import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

const { 성연, 예지, 재윤 } = {
  성연: {
    subdomain: 'yoon0cean',
    pathname: 'sungyeon',
  },
  예지: {
    subdomain: 'trialegg',
    pathname: 'yeji',
  },
  재윤: {
    subdomain: 'nell6635',
    pathname: 'jaeyoon',
  },
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const host = request.headers.get('host');
  const subdomain = host?.split('.')[0];

  switch (subdomain) {
    case 성연.subdomain:
      return NextResponse.rewrite(new URL(성연.pathname, request.url));
    case 예지.subdomain:
      return NextResponse.rewrite(new URL(예지.pathname, request.url));
    case 재윤.subdomain:
      return NextResponse.rewrite(new URL(재윤.pathname, request.url));

    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: ['/'],
};
