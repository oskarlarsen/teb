# Security Policy

## Supported Versions

We actively maintain security for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| latest  | ✅ Yes             |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

1. **DO NOT** open a public issue
2. Email security concerns to: post@tebonsa.no
3. Include detailed information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### What to Expect

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Resolution Timeline:** Depends on severity
  - Critical: 24-48 hours
  - High: 7 days
  - Medium: 14 days
  - Low: 30 days

## Security Best Practices

### For Contributors

1. **Dependencies**
   - Always run `npm audit` before committing
   - Keep dependencies up to date
   - Review package.json changes carefully

2. **Code Security**
   - Never use `dangerouslySetInnerHTML` with user input
   - Avoid `eval()` and `Function()` constructors
   - Always validate and sanitize user input
   - Use TypeScript for type safety

3. **Secrets Management**
   - Never commit API keys, passwords, or secrets
   - Use environment variables for sensitive data
   - Keep `.env` files in `.gitignore`

4. **External Links**
   - Always use `rel="noopener noreferrer"` for external links
   - Validate URLs before rendering
   - Use HTTPS for all external resources

### For Maintainers

1. **Regular Updates**
   - Monthly dependency updates
   - Immediate updates for security patches
   - Review GitHub Security Advisories

2. **Code Review**
   - Security checklist for all PRs
   - Focus on user input handling
   - Verify external resource usage

3. **Monitoring**
   - Enable Dependabot alerts
   - Monitor npm audit reports
   - Track security advisories for dependencies

## Security Checklist

Before deploying to production:

- [ ] Run `npm audit` with no vulnerabilities
- [ ] All dependencies are up to date
- [ ] No secrets in source code
- [ ] External links use proper security attributes
- [ ] Build completes without errors
- [ ] TypeScript type checks pass
- [ ] ESLint passes (or justified exceptions)
- [ ] Security headers configured (if applicable)

## Disclosure Policy

When we receive a security report:

1. We will confirm receipt within 48 hours
2. We will provide a detailed response within 7 days
3. We will work on a fix based on severity
4. We will notify the reporter when fixed
5. We may publicly disclose after fix (with reporter credit)

## Contact

For security concerns: post@tebonsa.no

Thank you for helping keep TEBONSMA secure!
