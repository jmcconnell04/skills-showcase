// config.ts
import 'jsr:@std/dotenv/load';

export interface AppConfig {
  environment: 'local' | 'stage' | 'prod';
  openaiApiKey?: string;
  openaiEndpoint: string;
  ollamaEndpoint: string;
}

export async function loadConfig(): Promise<AppConfig> {
  const environment = (Deno.env.get('ENVIRONMENT') || 'prod').toLowerCase() as
    | 'local'
    | 'stage'
    | 'prod';
  const envFile = `.env.${environment}`;
  try {
    await load({ file: envFile, export: true });
  } catch (error) {
    console.warn(
      `Warning: Unable to load ${envFile}. Proceeding with system environment variables.`
    );
  }

  const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
  const openaiEndpoint =
    Deno.env.get('OPENAI_ENDPOINT') ||
    'https://api.openai.com/v1/chat/completions';
  const ollamaEndpoint =
    Deno.env.get('OLLAMA_ENDPOINT') || 'http://localhost:11434';

  return {
    environment,
    openaiApiKey,
    openaiEndpoint,
    ollamaEndpoint,
  };
}
// mediators/AbstractMediator.ts
