import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Identity = () => {
  const coreDNA = [
    {
      category: "逻辑底座",
      items: ["建筑学空间建模思维", "系统化产品调研", "数据驱动决策 (SCI级)"]
    },
    {
      category: "技术栈", 
      items: ["LLM / RAG / Agentic Workflow", "Python / SQL / Vibe Coding", "Coze / Dify / n8n"]
    },
    {
      category: "业务领域",
      items: ["AI 医疗 (正畸)", "AIGC 创意设计", "数字化遗产保护"]
    }
  ]

  return (
    <section id="identity" className="py-20 bg-gradient-to-b from-space-black to-geek-silver/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-geek-silver mb-4">
              核心标签 / DNA
            </h2>
            <p className="text-geek-silver/70 text-lg max-w-3xl mx-auto">
              融合建筑学严谨逻辑与AI前沿技术，构建智能体验的坚实根基
            </p>
          </div>

          {/* 核心DNA网格 */}
          <div className="grid md:grid-cols-3 gap-8">
            {coreDNA.map((dna, index) => (
              <Card key={index} className="border-geek-silver/20 bg-space-black/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-fluorescent-cyan text-xl font-mono">
                    {dna.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dna.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-fluorescent-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-geek-silver/80 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 特色标签 */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "建筑思维", value: "Architectural Mindset" },
              { label: "AI驱动", value: "AI-First" },
              { label: "产品导向", value: "Product Focused" },
              { label: "数据严谨", value: "Data Rigorous" }
            ].map((tag, index) => (
              <div key={index} className="text-center p-4 border border-geek-silver/10 rounded-lg hover:border-fluorescent-cyan/30 transition-all duration-300">
                <div className="text-fluorescent-cyan text-2xl font-bold mb-2">{tag.label}</div>
                <div className="text-geek-silver/60 text-xs font-mono">{tag.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Identity