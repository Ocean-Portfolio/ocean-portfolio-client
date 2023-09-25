import { WebhookClient, EmbedBuilder } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const embedContents = (content, description) => {
  return new EmbedBuilder().setTitle(content).setDescription(`${description}`);
};

const discordWebhookSend = () => {
  const webhookClient = new WebhookClient({
    url: process.env.DISCORD_WEBHOOK_URL,
  });

  webhookClient.send({
    username: 'oceanBot',
    avatarURL:
      'https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512',
    embeds: [
      embedContents(
        `Client 웹 서버 재시작`,
        '서버가 재시작 및 빌드가 성공하였습니다. 업데이트가 되었을 수 있습니다',
      ).setColor(0x008d62),
    ],
  });
};

if (process.env.NODE_ENV === 'production') {
  discordWebhookSend();
}
