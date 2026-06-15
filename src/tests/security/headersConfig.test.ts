import fs from 'node:fs'
import path from 'node:path'

describe('Configuration headers sécurité', () => {
  it('contient les directives HTTP principales', () => {
    const headersPath = path.resolve(process.cwd(), 'public/_headers')
    const content = fs.readFileSync(headersPath, 'utf-8')

    expect(content).toContain('Content-Security-Policy')
    expect(content).toContain('X-Frame-Options: DENY')
    expect(content).toContain('X-Content-Type-Options: nosniff')
    expect(content).toContain('Referrer-Policy: strict-origin-when-cross-origin')
    expect(content).toContain('Cross-Origin-Opener-Policy: same-origin')
    expect(content).toContain('Cross-Origin-Resource-Policy: same-origin')
    expect(content).toContain('Strict-Transport-Security')
    expect(content).toContain("form-action 'self'")
  })
})
