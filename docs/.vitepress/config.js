export default {
  base:'/portfolio-site/',
  title: "Guo Jingwei | Data Science Portfolio",
  description: "Data Science, Machine Learning, AI Agent Portfolio, synthetic dataset demo",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "项目", link: "/projects/industrial-ai-agent" }
    ],
    sidebar: [
      {
        text: "📂 项目列表",
        items: [
          { text: "工业时序故障与LLM智能体", link: "/projects/industrial-ai-agent" },
          { text: "跨境美妆电商分析", link: "/projects/e-commerce-analysis" },
          { text: "度假村运营分析", link: "/projects/hotel-analytics" },
          { text: "企业调研数据分析", link: "/projects/survey-research" },
          { text: "Synthetic数据集说明", link: "/projects/synthetic-dataset" }
        ]
      }
    ]
  }
}
