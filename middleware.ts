import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add any custom middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public routes
        if (req.nextUrl.pathname.startsWith('/auth') || 
            req.nextUrl.pathname === '/' ||
            req.nextUrl.pathname.startsWith('/shop') ||
            req.nextUrl.pathname.startsWith('/books') ||
            req.nextUrl.pathname.startsWith('/stationery') ||
            req.nextUrl.pathname.startsWith('/isp-packages')) {
          return true;
        }

        // Require authentication for protected routes
        if (!token) return false;

        // Role-based access control
        const { role } = token;
        const pathname = req.nextUrl.pathname;

        // Admin routes
        if (pathname.startsWith('/admin') && role !== 'admin') {
          return false;
        }

        // Operator routes
        if (pathname.startsWith('/operator') && !['admin', 'operator'].includes(role as string)) {
          return false;
        }

        // Customer routes
        if (pathname.startsWith('/customer') && !['admin', 'operator', 'customer'].includes(role as string)) {
          return false;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/operator/:path*',
    '/customer/:path*',
    '/cart',
    '/checkout',
    '/orders',
    '/wishlist'
  ]
};