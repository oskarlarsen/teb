# Security Headers Configuration

This document provides security header configurations for various hosting platforms.

## Why Security Headers Matter

Security headers add an extra layer of protection against common web vulnerabilities:
- **XSS (Cross-Site Scripting)**
- **Clickjacking**
- **MIME-type sniffing**
- **Information leakage**

## For Netlify

Create a file `public/_headers`:

```
/*
  # Content Security Policy - Adjust based on your needs
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'
  
  # Prevent clickjacking
  X-Frame-Options: DENY
  
  # Prevent MIME-type sniffing
  X-Content-Type-Options: nosniff
  
  # Control referrer information
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Restrict browser features
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
  
  # Enable XSS protection (legacy browsers)
  X-XSS-Protection: 1; mode=block
  
  # Force HTTPS (if using HTTPS)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## For Vercel

Create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

## For Cloudflare Pages

Create `public/_headers`:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## For Apache (.htaccess)

Add to `.htaccess`:

```apache
<IfModule mod_headers.c>
  # Content Security Policy
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'"
  
  # Other security headers
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
  Header set X-XSS-Protection "1; mode=block"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

## For Nginx

Add to nginx configuration:

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## Important Notes

### Content-Security-Policy (CSP)

The CSP configuration above uses `'unsafe-inline'` and `'unsafe-eval'` for scripts because:
- Vite uses inline scripts in development
- Some animation libraries (GSAP, Motion) may use eval-like features
- React Compiler may generate inline scripts

**For production**, consider:
1. Using nonces or hashes for inline scripts
2. Moving inline scripts to external files
3. Testing thoroughly before tightening CSP

### Testing Security Headers

Use these tools to verify your headers:
- [SecurityHeaders.com](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- Browser DevTools Network tab

### Troubleshooting

If you experience issues after adding headers:

1. **Blank page:** Check CSP `script-src` allows your scripts
2. **Styles broken:** Check CSP `style-src` allows your CSS
3. **Images not loading:** Check CSP `img-src` allows your image sources
4. **External resources fail:** Add specific domains to CSP directives

### Progressive Enhancement

Start with lenient policies and gradually tighten:

1. **Phase 1:** Report-only mode (CSP with `-Report-Only` suffix)
2. **Phase 2:** Monitor reports and fix issues
3. **Phase 3:** Enable enforcement
4. **Phase 4:** Remove `unsafe-inline` and `unsafe-eval` if possible

## References

- [MDN Web Docs: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [Security Headers Best Practices](https://securityheaders.com/)
