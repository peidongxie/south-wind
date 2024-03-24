import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '晋沐南风',
  titleTemplate: '晋沐南风 | :title',
  description: '晋沐南风支教官网——山西学子回乡筑梦',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ],
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  rewrites: {},
  srcDir: 'src',
  srcExclude: [],
  outDir: 'dist',
  assetsDir: 'assets',
  cacheDir: 'cache',
  ignoreDeadLinks: false,
  metaChunk: false,
  mpa: false,
  appearance: true,
  lastUpdated: true,
  markdown: {
    container: {
      infoLabel: ' ',
    },
  },
  vite: {},
  vue: {},
  themeConfig: {
    i18nRouting: false,
    logo: '/img/logo/logo-without-name.png',
    siteTitle: '晋沐南风',
    nav: [
      {
        text: '支教详情',
        link: '/details/summary',
      },
      {
        text: '课程设置',
        link: '/courses/index',
      },
      {
        text: '活动掠影',
        link: '/glimpses/index',
      },
    ],
    sidebar: [
      {
        text: '支教详情',
        items: [
          {
            text: '项目概述',
            link: '/details/summary',
          },
          {
            text: '团队简介',
            link: '/details/team',
          },
          {
            text: '公益性',
            link: '/details/commonweal',
          },
          {
            text: '创业性',
            link: '/details/entrepreneurship',
          },
          {
            text: '实践性',
            link: '/details/practicality',
          },
        ],
      },
      {
        text: '课程设置',
        link: '/courses/index',
        items: [
          {
            text: '生物课程',
            link: '/courses/biology',
          },
          {
            text: 'SE&电脑基本操作课程',
            link: '/courses/computer',
          },
          {
            text: '初识辩论课程',
            link: '/courses/debate',
          },
          {
            text: '认识地球课程',
            link: '/courses/earth',
          },
          {
            text: '生活中的经济学课程',
            link: '/courses/economics',
          },
          {
            text: '趣味游戏与理论课程',
            link: '/courses/game',
          },
          {
            text: '入门韩国语课程',
            link: '/courses/korean',
          },
          {
            text: '数学知识课程',
            link: '/courses/math',
          },
          {
            text: '走近物理课程',
            link: '/courses/physics',
          },
          {
            text: '阅读与写作课程',
            link: '/courses/read-and-write',
          },
          {
            text: '俄罗斯社会与文学课程',
            link: '/courses/russia',
          },
          {
            text: '短篇科幻导读课程',
            link: '/courses/science-fiction',
          },
        ],
      },
      {
        text: '活动掠影',
        link: '/glimpses/index',
        items: [],
      },
    ],
    aside: true,
    outline: {
      level: 2,
      label: ' ',
    },
    socialLinks: [],
    footer: {
      message: '',
      copyright: 'Copyright © 2018-2024 晋沐南风团队',
    },
    editLink: {
      pattern: 'https://github.com/peidongxie/south-wind/edit/main/src/:path',
      text: ' ',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示查询详情',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '取消查询',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上一个',
                  navigateDownKeyAriaLabel: '下一个',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭',
                },
              },
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',
    externalLinkIcon: false,
  },
});
