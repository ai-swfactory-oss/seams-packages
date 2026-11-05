import type { NpmRegistry } from '../index'

export const createFakeNpmRegistry = (published: Readonly<Record<string, readonly string[]>> = {}): NpmRegistry => ({
  versionsOf: name => ({ name, versions: published[name] ?? [] }),
})
