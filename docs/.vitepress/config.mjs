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
      { text: "前端", link: "/front-end/" },
      { text: "随笔", link: "/essays/如何利用回路机制形成好习惯" },
      { text: "最佳实践", link: "/practice/主时间轴" },
    ],

    sidebar: {
      "/front-end/": [
        { text: "说明", link: "/front-end/" },
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
            { text: "异步编程", link: "/front-end/Javascript/异步编程" },
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

      "/essays/": [
        {
          text: "随笔",
          items: [
            {
              text: "如何利用回路机制形成好习惯",
              link: "/essays/如何利用回路机制形成好习惯",
            },
          ],
        },
      ],
      "/practice/": [
        {
          text: "实践",
          items: [
            { text: "主时间轴", link: "/practice/主时间轴" },
            { text: "阶段计划", link: "/practice/阶段计划" },
            { text: "算法时间轴", link: "/practice/算法时间轴" },
            { text: "数据结构与算法", link: "/practice/数据结构与算法" },
            { text: "深度学习", link: "/practice/深度学习" },
            { text: "贴吧项目时间轴", link: "/practice/贴吧项目时间轴" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    math: true,
  },
});
