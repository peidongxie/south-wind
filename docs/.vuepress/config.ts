import path from 'path';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: '晋沐南风',
  description: '晋沐南风支教官网——山西学子回乡筑梦',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ],
  locales: {},
  theme: '@vuepress/default',
  themeConfig: {
    locales: {},
    home: '/',
    navbar: [
      { text: '支教详情', link: '/details/summary' },
      { text: '课程设置', link: '/courses/' },
      { text: '活动掠影', link: '/glimpses/' },
    ],
    logo: '/img/logo/logo-without-name.png',
    logoDark: '/img/logo/logo-without-name.png',
    darkMode: true,
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
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
    themePlugins: {},
  },
  bundler: '@vuepress/vite',
  bundlerConfig: {},
  plugins: [
    // ['@vuepress/back-to-top', {}],
    // ['@vuepress/medium-zoom', {}],
    // ['@vuepress/nprogress', {}],
    ['@vuepress/pwa', {}],
    [
      '@vuepress/pwa-popup',
      {
        locales: {
          '/': {
            message: '发现支教新动态～',
            buttonText: '刷新一下',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, 'components'),
      },
    ],
    ['@vuepress/search', {}],
  ],
});
