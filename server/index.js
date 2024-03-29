const Koa = require("koa");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");

const app = new Koa();

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = app.env !== "production";

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    // host = process.env.HOST || "192.168.1.140",
    port = process.env.PORT || 20003
  } = nuxt.options.server;
  await nuxt.ready();
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${
      host === "0.0.0.0" ? "localhost" : host
    }:${port}`,
    badge: true
  });
}

start();
