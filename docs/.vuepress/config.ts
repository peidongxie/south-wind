import { viteBundler } from '@vuepress/bundler-vite';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { searchPlugin } from '@vuepress/plugin-search';
import { defaultTheme } from '@vuepress/theme-default';
import { createRequire } from 'module';
import { resolve } from 'path';
import { defineUserConfig } from 'vuepress';

const require = createRequire(import.meta.url);

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '晋沐南风',
  description: '晋沐南风支教官网——山西学子回乡筑梦',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ],
  locales: {},
  theme: defaultTheme({
    locales: {},
    colorMode: 'auto',
    colorModeSwitch: true,
    home: '/',
    navbar: [
      { text: '支教详情', link: '/details/summary' },
      { text: '课程设置', link: '/courses/' },
      { text: '活动掠影', link: '/glimpses/' },
    ],
    logo: '/img/logo/logo-without-name.png',
    logoDark: '/img/logo/logo-without-name.png',
    repo: 'peidongxie/south-wind',
    repoLabel: ' ',
    sidebar: [
      {
        text: '支教详情',
        link: '/details/summary',
        children: [
          '/details/summary',
          '/details/team',
          '/details/commonweal',
          '/details/entrepreneurship',
          '/details/practicality',
        ],
      },
      {
        text: '课程设置',
        link: '/courses/',
        children: [
          '/courses/biology',
          '/courses/computer',
          '/courses/debate',
          '/courses/earth',
          '/courses/economics',
          '/courses/game',
          '/courses/korean',
          '/courses/math',
          '/courses/physics',
          '/courses/read-and-write',
          '/courses/russia',
          '/courses/science-fiction',
        ],
      },
      {
        text: '活动掠影',
        link: '/glimpses/',
        children: [],
      },
    ],
    sidebarDepth: 1,
    editLink: true,
    editLinkText: ' ',
    editLinkPattern: ':repo/edit/:branch/:path',
    docsRepo: 'peidongxie/south-wind',
    docsBranch: 'main',
    docsDir: 'docs',
    lastUpdated: true,
    lastUpdatedText: '编辑时间',
    contributors: false,
    contributorsText: '',
    tip: ' ',
    warning: ' ',
    danger: ' ',
    notFound: ['未找到相关内容'],
    backToHome: '返回首页',
    openInNewWindow: '在新的窗口中打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    themePlugins: {},
  }),
  bundler: viteBundler({}),
  dest: 'docs/.vuepress/dist',
  temp: 'docs/.vuepress/.temp',
  cache: 'docs/.vuepress/.cache',
  public: 'docs/.vuepress/public',
  debug: false,
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  permalinkPattern: null,
  host: '0.0.0.0',
  port: 8080,
  open: false,
  templateDev: require.resolve('@vuepress/client/templates/dev.html'),
  shouldPreload: true,
  shouldPrefetch: true,
  templateBuild: require.resolve('@vuepress/client/templates/build.html'),
  markdown: {},
  plugins: [
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, 'components'),
    }),
    searchPlugin({}),
    pwaPlugin({}),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现支教新动态～',
          buttonText: '刷新一下',
        },
      },
    }),
  ],
});
