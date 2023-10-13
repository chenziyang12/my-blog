/**
 * @Author: chenziyang 1501844242@qq.com
 * @Date: 2023-04-10 13:38:56
 * @LastEditors: chenziyang 1501844242@qq.com
 * @LastEditTime: 2023-04-10 15:13:54
 * @FilePath: /my-website/docs/.vitepress/config.ts
 * @Description:
 * @Copyright (c) 2023 by 武汉嘉测科技有限公司 鄂公网安备案42018502004838号 All Rights Reserved.
 */
/**
 * @Author: chenziyang 1501844242@qq.com
 * @Date: 2023-04-07 09:16:44
 * @LastEditors: chenziyang 1501844242@qq.com
 * @LastEditTime: 2023-04-07 09:16:48
 * @FilePath: \JcUi\docs\.vitepress\config.ts
 * @Description:
 * @Copyright (c) 2023 by 武汉嘉测科技有限公司 鄂公网安备案42018502004838号 All Rights Reserved.
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "JC-UI",
  markdown: {
    // markdown 解析配置
    // theme: 'material-palenight', // 主体配色
    lineNumbers: true, // 显示行号
  },
  lastUpdated: true, // 显示页面最后更新时间

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "JC-UI",
    socialLinks: [{ icon: "github", link: "http://192.168.20.200:10000" }],
    docFooter: {
      // 文档底部文本
      prev: "上一节",
      next: "下一节",
    },
    nav: [
      {
        text: "组件",
        link: "/guide",
        activeMatch: "/guide/what-is-vitepress",
      },

      //   {nav: [

      //     text: "下拉选择框",
      //     items: [
      //       { text: "options-1", link: "/" },
      //       { text: "options-2", link: "http://www.baidu.com" },
      //     ],
      //   },
    ],
  },
});
