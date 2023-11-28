declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_LOCALHOST: string;
    NEXT_PUBLIC_BASE_PATH: string;
    NEXT_PUBIC_WEBSOCKET_PORT: string;
    NEXT_PUBLIC_STORAGE_URL: string;
    DISCORD_WEBHOOK_URL: string;
  }
}
