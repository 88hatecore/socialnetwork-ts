type Mods = Record<string, boolean | string>;

export function classNames(
  styles: string,
  mods?: Mods,
  additional?: string[]
): string {
  return [
    styles,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames, value]) => classNames),
  ].join(" ");
}
