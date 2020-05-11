module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/movie/fight-club"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
