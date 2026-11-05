import type { InstalledPackage, PackageManager } from '../index'

export const createFakePackageManager = (installed: readonly InstalledPackage[] = []): PackageManager => ({
  listInstalled: () => installed,
})
