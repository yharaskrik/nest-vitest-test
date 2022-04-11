export function createPrefixedId<T extends string>(prefix: T): `${T}_${string}` {
  return `${prefix}_${new Date().toISOString()}`;
}
