const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  build: {
    publicPath: "/portfolio/",
  },
});
