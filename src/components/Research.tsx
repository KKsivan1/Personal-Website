import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Research = () => {
  const researchItems = [
    {
      type: "SCI 论文发表",
      details: "在《City and Environment Interactions》等期刊发表 2 篇论文",
      description: "能力背书：具备强悍的数据采集、指标构建与统计分析能力"
    },
    {
      type: "AIGC 探索", 
      details: "基于 Stable Diffusion 训练专属 Lora 模型，将建筑遗产转译为文创方案",
      description: "结合建筑学背景与AI技术，创造独特的文化创意体验"
    }
  ]

  const awards = [
    { icon: "🏆", title: "第十五届全国绿色建筑竞赛", description: "一等奖" },
    { icon: "🏆", title: "第十二届未来设计师大赛", description: "全国三等奖 / 省一等奖" },
    { icon: "🌟", title: "东北大学 2024年优秀学生干部", description: "学生工作杰出表现" },
    { icon: "📱", title: "We党微家新媒体部长", description: "运营 1w+ 粉丝矩阵" }
  ]

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-geek-silver/5 to-space-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 科学研究部分 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold text-geek-silver mb-4">
                科学研究与创意实践
              </h2>
              <p className="text-geek-silver/70 text-lg">
                学术研究与前沿技术探索的完美结合
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {researchItems.map((item, index) => (
                <Card key={index} className="border-geek-silver/20 bg-space-black/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-fluorescent-cyan text-lg font-mono">
                      {item.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-geek-silver/80 text-sm leading-relaxed">
                      {item.details}
                    </p>
                    <p className="text-geek-silver/60 text-xs italic border-l-2 border-fluorescent-cyan pl-3 py-1">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 荣誉殿堂 */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-section font-bold text-geek-silver mb-4">
                荣誉殿堂
              </h2>
              <p className="text-geek-silver/70 text-lg">
                在学术与实践中获得的认可与成就
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="border-geek-silver/20 bg-space-black/50 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{award.icon}</div>
                    <h3 className="text-geek-silver font-semibold mb-2 text-sm">
                      {award.title}
                    </h3>
                    <p className="text-fluorescent-cyan text-xs font-mono">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research