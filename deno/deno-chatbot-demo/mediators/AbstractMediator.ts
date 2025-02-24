// mediators/AbstractMediator.ts
import { Mediator } from './mediator.ts';
import { AppConfig } from '../config.ts';

export abstract class AbstractMediator implements Mediator {
  protected config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  /**
   * Concrete mediators implement this method to fetch the raw response.
   */
  protected abstract fetchResponse(message: string): Promise<string>;

  /**
   * Determines the powered-by label based on the environment.
   */
  protected getPoweredBy(): string {
    return this.config.environment === 'local' ? 'Ollama' : 'ChatGPT';
  }

  async processMessage(message: string): Promise<string> {
    console.log(`AbstractMediator processing message: ${message}`);
    const rawResponse = await this.fetchResponse(message);
    return `${rawResponse}\n(Powered by ${this.getPoweredBy()})`;
  }
}
