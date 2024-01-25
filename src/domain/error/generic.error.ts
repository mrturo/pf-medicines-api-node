export class Generic extends Error {
  constructor(message: string | string[]) {
    super(
      (typeof message === 'string' ? message.trim().split('|') : message)
        .map((e) => e.trim())
        .filter((e) => e.length > 0)
        .join(' | ')
    );
  }
}
