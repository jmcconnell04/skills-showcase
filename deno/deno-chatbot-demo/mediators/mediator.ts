// mediators/mediator.ts
export interface Mediator {
  processMessage(message: string): Promise<string>;
}
