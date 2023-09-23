import { FastifyReply, FastifyRequest } from 'fastify';
import { NextServer } from 'next/dist/server/next';

const assetsService = (
  app: NextServer,
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  app
    .getRequestHandler()(req.raw, reply.raw)
    .then(() => {
      reply.hijack();
    });
};

export default assetsService;
