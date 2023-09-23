import fastifyNext from '@fastify/nextjs';
import F from 'fastify';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

// const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);

const { 성연, 예지, 재윤 } = {
  성연: {
    subdomain: 'yoon0cean',
    pathname: 'sungyeon',
  },
  예지: {
    subdomain: 'trialegg',
    pathname: 'yeji',
  },
  재윤: {
    subdomain: 'nell6635',
    pathname: 'jaeyoon',
  },
};

const fastify = F({
  logger: true,
});

fastify.register(fastifyNext, { dev: true }).after(() => {
  // const basePath = dev ? '' : process.env.BASE_PATH || '';
  // fastify.next(`/_next/*`, async );

  fastify.next('/*', async (app, req, reply) => {
    const { hostname } = req;
    const subdomain = hostname.split('.')[0];
    const query = req.query as NextParsedUrlQuery | undefined;

    if (req.url.match(/\/ico|png|svg|jpg|jpeg\//)) {
      app
        .getRequestHandler()(req.raw, reply.raw)
        .then(() => {
          reply.hijack();
        });
    } else if (subdomain === 성연.subdomain) {
      // ${성연.pathname}
      app.render(req.raw, reply.raw, `/`, query);
    } else if (subdomain === 예지.subdomain) {
      app.render(req.raw, reply.raw, `/${예지.pathname}`, query);
    } else if (subdomain === 재윤.subdomain) {
      app.render(req.raw, reply.raw, `/${재윤.pathname}`, query);
    } else {
      const handle = app.getRequestHandler();

      handle(req.raw, reply.raw);
    }
    reply.hijack();

    app.render(req.raw, reply.raw, '/', query);
  });
});

fastify.listen(
  {
    port,
  },
  (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  },
);

// app.setErrorHandler((err, req, reply) => {
//   return reply.status(err.statusCode || 500).nextRenderError(err);
// });

// app.setErrorHandler((err, req, reply) => {
//   return reply.nextRender('/a')
// })

// fastify.next('/api/*', { method: 'GET' });
// fastify.next('/api/*', { method: 'HEAD' });

// fastify
// .register(require('@fastify/nextjs'), {
//   noServeAssets: true
// })
//   .after(() => {
// fastify.next(`${process.env.BASE_PATH || ''}/_next/*`, (app, req, reply) => {
//   // your code
//   app.getRequestHandler()(req.raw, reply.raw).then(() => {
//     reply.hijack()
//   })
// })
//   })

// fastify.register(require('@fastify/nextjs'), {
//   underPressure: {
//     exposeStatusRoute: true,
//   },
// });
