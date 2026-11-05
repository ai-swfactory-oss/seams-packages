import { describe, expect, it } from 'vitest'

import { createPackageManager } from '../src/index'
import { createFakePackageManager } from '../src/testing/index'

describe('createPackageManager', () => {
  it('lists no installed packages while the seam is a skeleton', () => {
    expect(createPackageManager().listInstalled()).toEqual([])
  })
})

describe('createFakePackageManager', () => {
  it('lists no installed packages by default', () => {
    expect(createFakePackageManager().listInstalled()).toEqual([])
  })

  it('lists the installed packages it was given', () => {
    const installed = [{ name: 'left-pad', version: '1.3.0' }]
    expect(createFakePackageManager(installed).listInstalled()).toBe(installed)
  })
})
