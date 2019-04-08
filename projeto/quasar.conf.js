// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'auth',
      'axios',
      'firebase',
      'boot',
      ctx.mode.cordova ? 'google-analytics' : ''
    ],
    css: ['app.styl'],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      ctx.theme.ios ? 'ionicons' : null,
      'material-icons',
      'mdi',
      'ionicons',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar|src)/
        })
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      i18n: 'pt',
      components: [
        'QBtn',
        'QCard',
        'QCardActions',
        'QCardMain',
        'QCardMedia',
        'QCardTitle',
        'QCheckbox',
        'QChipsInput',
        'QDatetime',
        'QField',
        'QLayoutFooter',
        'QIcon',
        'QInput',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QLayout',
        'QLayoutDrawer',
        'QLayoutHeader',
        'QList',
        'QListHeader',
        'QPage',
        'QPageContainer',
        'QRadio',
        'QSearch',
        'QSelect',
        'QSpinner',
        'QSpinnerAudio',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QSlideTransition',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QTableColumns',
        'QToolbar',
        'QToolbarTitle',
        'QToggle',
        'QUploader',
        'Loading',
        'QBreadcrumbs',
        'QBreadcrumbsEl',
        'QCarousel',
        'QCarouselSlide',
        'QCarouselControl',
        'QPopover',
        'QAutocomplete',
        'QFab',
        'QPageSticky',
        'QDatetimePicker'
      ],
      directives: ['Ripple', 'CloseOverlay'],
      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage',
        'SessionStorage'
      ],
      config: {
        // optional (v0.17+)
        loading: {
          // Loading defaults
        }
      },
      iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
    },
    // animations: 'all' --- includes all animations
    animations: 'all',
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'IVColoquio App',
        short_name: 'IVColoquio',
        description: 'Um aplicativo PET-Sistemas e Lab. Paisagismo',
        display: 'standalone',
        start_url: '/',
        orientation: 'portrait',
        background_color: '#edfcbd',
        theme_color: '#A7CD2C',
        icons: [
          {
            src: '/statics/icons/tree-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/statics/icons/tree-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/statics/icons/tree-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/statics/icons/tree-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/images/f325e588-60a2-de73-bc67-231b91599e36.webPlatform.png',
            sizes: '44x44',
            type: 'image/png'
          },
          {
            src: '/images/6df28f9e-8dac-9d83-aa15-6a9da995920a.webPlatform.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: '/images/c7e45268-0f3c-819a-41bc-c434b92bd94f.webPlatform.png',
            sizes: '1240x600',
            type: 'image/png'
          },
          {
            src: '/images/20c6abdf-1562-9901-8a3f-654a4712dcf7.webPlatform.png',
            sizes: '300x300',
            type: 'image/png'
          },
          {
            src: '/images/8a24ddf7-529e-6c28-a540-b853d93c9604.webPlatform.png',
            sizes: '150x150',
            type: 'image/png'
          },
          {
            src: '/images/6ccc3012-4918-a508-3a55-b136374b74b5.webPlatform.png',
            sizes: '88x88',
            type: 'image/png'
          },
          {
            src: '/images/ae37054b-fc60-c4f4-d2ac-7a82bbfce5a4.webPlatform.png',
            sizes: '24x24',
            type: 'image/png'
          },
          {
            src: '/images/22b3bf5b-6655-a287-594a-dff5be68b9aa.webPlatform.png',
            sizes: '50x50',
            type: 'image/png'
          },
          {
            src: '/images/a78d93f6-daf0-513f-83db-a6efd09790af.webPlatform.png',
            sizes: '620x300',
            type: 'image/png'
          },
          {
            src: '/images/00519b9c-d638-ae18-1253-292e12d60585.webPlatform.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/images/1b835ed5-f9b6-68b0-5d63-e78ae53ff432.webPlatform.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/images/992dec65-0855-d3d0-aba6-0c33c8424b6c.webPlatform.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/images/17f261c6-e715-67fb-edb4-ccb03c0ab97e.webPlatform.png',
            sizes: '36x36',
            type: 'image/png'
          },
          {
            src: '/images/ios/ios-appicon-1024-1024.png',
            sizes: '1024x1024',
            type: 'image/png'
          },
          {
            src: '/images/5ee01ad6-bc0a-8c95-4e84-5e5bc7a2726d.webPlatform.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '/images/529cc6d5-ebfd-ed89-7aee-0c6477652dca.webPlatform.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/images/dc839d75-5f02-b5bb-60b2-423bac147a54.webPlatform.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: '/images/c2d41b73-2691-6d52-552e-cb5c990f69ad.webPlatform.png',
            sizes: '76x76',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'org.cordova.petsistemas.IVColoquio',
      version: '1.5.7'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration
        // appId: 'quasar-app'
      }
    }
  }
}
