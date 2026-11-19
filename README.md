# seams-packages

Seams for the npm ecosystem: package managers and the npm registry. Each seam is an SDK that puts a typed boundary in front of an external system, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createPackageManager()` returns a package manager whose `listInstalled()` lists no packages, and `createNpmRegistry()` returns a registry whose `versionsOf(name)` reads no versions; each package's `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-pkg-manager`: the seam over package managers.
- `@ai-swfactory-oss/seams-npm-registry`: the seam over the npm registry.

## Licence

MIT
