import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Skills = () => {
  const skillCategories = [
    {
      category: "Design",
      skills: ["Figma", "Axure", "Rhino", "Photoshop"],
      description: "产品原型与视觉设计"
    },
    {
      category: "Data", 
      skills: ["SQL", "Python (Data Processing)", "Excel (VLOOKUP/Pivot)"],
      description: "数据分析与处理"
    },
    {
      category: "AI",
      skills: ["RAG 架构", "Prompt Engineering", "Dify", "Workflow Design"],
      description: "人工智能技术应用"
    },
    {
      category: "Soft Skills",
      skills: ["跨团队协作", "快速学习能力", "英文文档阅读 (CET-6)"],
      description: "综合能力素养"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-space-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-geek-silver mb-4">
              技能版图
            </h2>
            <p className="text-geek-silver/70 text-lg">
              构建智能体验所需的技术栈与能力矩阵
            </p>
          </div>

          {/* 技能网格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-geek-silver/20 bg-space-black/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-fluorescent-cyan text-lg font-mono">
                    {category.category}
                  </CardTitle>
                  <p className="text-geek-silver/60 text-xs">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-fluorescent-cyan rounded-full"></div>
                        <span className="text-geek-silver/80 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vibe Coding 标签 */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-fluorescent-cyan/10 border border-fluorescent-cyan/30 rounded-full px-6 py-3 animate-glow">
              <span className="text-fluorescent-cyan text-sm font-mono">💡 Vibe Coding</span>
              <span className="text-geek-silver/60 text-xs">This site was built via Vibe Coding in 24 hours.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills