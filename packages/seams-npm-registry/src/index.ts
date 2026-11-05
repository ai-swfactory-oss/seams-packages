export interface PublishedVersions {
  readonly name: string
  readonly versions: readonly string[]
}

export interface NpmRegistry {
  readonly versionsOf: (name: string) => PublishedVersions
}

export const createNpmRegistry = (): NpmRegistry => ({
  versionsOf: name => ({ name, versions: [] }),
})
