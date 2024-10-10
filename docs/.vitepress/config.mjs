import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Biouwai/",
  title: "比欧外",
  description: "比欧外的博客",
  lastUpdated: {
    text: "最后更新于",
    formatOptions: {
      dateStyle: "short",
      timeStyle: "medium",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "前端", link: "/front-end/HTML&CSS/HTML" },
      { text: "博客导航", link: "/blogs/自己文章/前端" },
      { text: "随笔", link: "/essays/" },
      { text: "最佳实践", link: "/practice/" },
      { text: "每日记录", link: "/record/" },
    ],

    sidebar: {
      "/front-end/": [
        {
          text: "HTML&CSS",
          collapsed: true,
          items: [
            { text: "HTML", link: "/front-end/HTML&CSS/HTML" },
            { text: "CSS", link: "/front-end/HTML&CSS/CSS" },
            { text: "flex&grid", link: "/front-end/HTML&CSS/flex&grid" },
            { text: "布局实现", link: "/front-end/HTML&CSS/布局实现" },
          ],
        },
        {
          text: "Javascript",
          collapsed: true,
          items: [
            { text: "Javascript", link: "/front-end/Javascript/Javascript" },
            {
              text: "Js方法工具箱",
              link: "/front-end/Javascript/Js方法工具箱",
            },
            { text: "Js手写题", link: "/front-end/Javascript/Js手写题" },
          ],
        },
        {
          text: "React",
          collapsed: true,
          items: [
            { text: "基本用法", link: "/front-end/React/基本用法" },
            { text: "React", link: "/front-end/React/React" },
          ],
        },
        {
          text: "Vue",
          collapsed: true,
          items: [
            { text: "基本用法", link: "/front-end/Vue/基本用法" },
            { text: "Vue", link: "/front-end/Vue/Vue" },
          ],
        },
        {
          text: "Node",
          collapsed: true,
          items: [
            { text: "基本用法", link: "/front-end/Node/基本用法" },
            { text: "Node", link: "/front-end/Node/Node" },
          ],
        },
        {
          text: "工程化",
          collapsed: true,
          items: [
            { text: "git", link: "/front-end/工程化/git" },
            { text: "webpack", link: "/front-end/工程化/webpack" },
            { text: "vite", link: "/front-end/工程化/vite" },
          ],
        },
        {
          text: "计网+浏览器+操作系统",
          collapsed: true,
          items: [
            { text: "计网", link: "/front-end/计网+浏览器+操作系统/计网" },
            { text: "浏览器", link: "/front-end/计网+浏览器+操作系统/浏览器" },
            {
              text: "操作系统",
              link: "/front-end/计网+浏览器+操作系统/操作系统",
            },
          ],
        },
        {
          text: "数据结构与算法",
          collapsed: true,
          items: [
            { text: "基本概念", link: "/front-end/数据结构与算法/基本概念" },
          ],
        },
        {
          text: "杂货",
          collapsed: true,
          items: [{ text: "踩坑汇总", link: "/front-end/杂货/踩坑汇总" }],
        },
      ],

      "/blogs/": [
        {
          text: "博客导航",
          items: [
            {
              text: "自己文章",
              items: [{ text: "前端", link: "/blogs/自己文章/前端" }],
            },
            { text: "网站导航", link: "/blogs/网站导航" },
            { text: "好文导航", link: "/blogs/好文导航" },
          ],
        },
      ],
      "/essays/": [
        {
          text: "随笔",
          items: [
            { text: "说明", link: "/essays/" },
            { text: "时间轴", link: "/essays/时间轴" },
            { text: "前期搬运", link: "/essays/前期搬运" },
          ],
        },
      ],
      "/practice/": [
        {
          text: "实践",
          items: [{ text: "说明", link: "/practice/" }],
        },
      ],
      "/record/": [
        {
          text: "每日记录",
          items: [
            { text: "说明", link: "/record/" },
            {
              text: "English",
              items: [
                { text: "说明", link: "/record/English/" },
                { text: "十月", link: "/record/English/October" },
              ],
            },
            {
              text: "2024年10月",
              items: [
                { text: "每日记录", link: "/record/October/" },
                { text: "账单消费", link: "/record/October/bill" },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
