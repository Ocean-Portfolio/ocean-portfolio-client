import { userAgent, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('userAgent', req.headers);
  return new Response(JSON.stringify(req), {
    status: 200,
  });
}
