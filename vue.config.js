
module.exports = {
  lintOnSave: false,

  /**
   * PWA Plugin configuration.
   */
  pwa: {
    name: 'Prize Profile',
    themeColor: '#4285F4',
    msTileColor: '#fafafa',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    iconPaths: {
      favicon32: 'static/images/icons/favicon-32x32.png',
      favicon16: 'static/images/icons/favicon-16x16.png',
      appleTouchIcon: 'static/images/icons/apple-touch-icon-152x152.png',
      maskIcon: 'static/images/icons/safari-pinned-tab.svg',
      msTileImage: 'static/images/icons/msapplication-icon-144x144.png'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      /**
       * Workbox settings.
       */
      swSrc: 'service-worker.js'
    }
  },

  /**
   * Webpack configuration
   */
  configureWebpack: {
    //
  }
}
