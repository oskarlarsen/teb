# teb
tebonsma website repository

## Security

This project follows security best practices and undergoes regular security audits.

- 📋 [Security Audit Report](./SECURITY_AUDIT.md) - Latest comprehensive security assessment
- 🔒 [Security Policy](./SECURITY.md) - How to report vulnerabilities and security guidelines
- 🛡️ [Security Headers Configuration](./teb-app/security-headers-config.md) - Production deployment security

### Quick Security Status
- ✅ No known vulnerabilities
- ✅ React 19.2.x (latest stable)
- ✅ All dependencies up to date
- ✅ npm audit: 0 vulnerabilities

## Development

```bash
cd teb-app
npm install
npm run dev
```

## Building

```bash
cd teb-app
npm run build
```

## Security Best Practices

Before committing:
- Run `npm audit` to check for vulnerabilities
- Ensure no secrets are in code
- Verify TypeScript checks pass
- Review security guidelines in [SECURITY.md](./SECURITY.md)
