const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/cos30043/s103602247/my-jukebox' : '/',

  devServer: {
    proxy: {
      '/api': {
          target: 'https://api.deezer.com',
          changeOrigin: true,
          pathRewrite: {
              '^/api': ''
          }
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
