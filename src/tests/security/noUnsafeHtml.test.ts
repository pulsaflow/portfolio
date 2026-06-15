import fs from 'node:fs'
import path from 'node:path'

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'tests' || entry.name === 'test') {
        continue
      }
      walk(fullPath, files)
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

describe('Sécurité DOM', () => {
  it('n’utilise pas dangerouslySetInnerHTML dans src/', () => {
    const srcRoot = path.resolve(process.cwd(), 'src')
    const codeFiles = walk(srcRoot)
    const offenders = codeFiles.filter((filePath) => {
      const content = fs.readFileSync(filePath, 'utf-8')
      return content.includes('dangerouslySetInnerHTML')
    })

    expect(offenders).toEqual([])
  })
})
