// mediators/OllamaMediator.ts
import { AppConfig } from '../config.ts';
import { AbstractMediator } from './AbstractMediator.ts';

export class OllamaMediator extends AbstractMediator {
  private endpoint: string;

  constructor(config: AppConfig) {
    super(config);
    this.endpoint = config.ollamaEndpoint;
  }

  protected async fetchResponse(message: string): Promise<string> {
    console.log(`OllamaMediator received: ${message}`);
    const response = await fetch(`${this.endpoint}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: message }),
    });

    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    let result: string;
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      result = data.response || 'No reply from Ollama.';
    } else {
      // Fallback to plain text
      result = await response.text();
    }
    return result;
  }
}
