export const nullCheckObjectValues = (obj: Record<string, unknown>): boolean =>
  Object.values(obj).every((v) => v);

export const hello = (): void => console.log('hello');
