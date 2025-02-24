// mediators/mediatorFactory.ts
import { AppConfig } from '../config.ts';
import { Mediator } from './mediator.ts';
import { ChatGPTMediator } from './ChatGPTMediator.ts';
import { OllamaMediator } from './OllamaMediator.ts';

export function createMediator(config: AppConfig): Mediator {
  if (config.environment === 'local') {
    return new OllamaMediator(config);
  } else {
    if (!config.openaiApiKey) {
      throw new Error('OPENAI_API_KEY must be set for non-local environments');
    }
    return new ChatGPTMediator(config);
  }
}
