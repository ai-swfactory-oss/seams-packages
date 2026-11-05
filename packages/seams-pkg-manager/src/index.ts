export interface InstalledPackage {
  readonly name: string
  readonly version: string
}

export interface PackageManager {
  readonly listInstalled: () => readonly InstalledPackage[]
}

export const createPackageManager = (): PackageManager => ({
  listInstalled: () => [],
})
