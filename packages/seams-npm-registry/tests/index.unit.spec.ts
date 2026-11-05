import { describe, expect, it } from 'vitest'

import { createNpmRegistry } from '../src/index'
import { createFakeNpmRegistry } from '../src/testing/index'

describe('createNpmRegistry', () => {
  it('reads no published versions while the seam is a skeleton', () => {
    expect(createNpmRegistry().versionsOf('left-pad')).toEqual({ name: 'left-pad', versions: [] })
  })
})

describe('createFakeNpmRegistry', () => {
  it('reads no published versions by default', () => {
    expect(createFakeNpmRegistry().versionsOf('left-pad')).toEqual({ name: 'left-pad', versions: [] })
  })

  it('reads the versions it was given for a package', () => {
    const registry = createFakeNpmRegistry({ 'left-pad': ['1.2.0', '1.3.0'] })
    expect(registry.versionsOf('left-pad')).toEqual({ name: 'left-pad', versions: ['1.2.0', '1.3.0'] })
  })
})
