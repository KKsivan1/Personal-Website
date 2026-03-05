import { useRef, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const projects = [
    {
      id: 1,
      title: "灵芽 LingOral AI 医疗",
      subtitle: "AI 产品经理 @ 朝厚信息 (2025.11 - 2026.02)",
      challenge: "解决 3D 正畸建模中'空泡与萌出帽'位姿不同步及方案不可验证的临床痛点。",
      breakthroughs: [
        "设计 ID 唯一识别码跨步数联动协议，实现复杂位姿同步",
        "基于 Qwen-VL 定义正畸大模型逻辑，建立 10+ 类数据清洗规则"
      ],
      achievement: "诊断推理一致性达 85%+，显著降低医生手动微调率",
      tech: ["Qwen-VL", "3D建模", "医疗AI", "数据清洗"]
    },
    {
      id: 2,
      title: "十六番旅行智能规划 Agent",
      subtitle: "项目负责人 (2025.06 - 2025.09)",
      challenge: "从非结构化 UGC 到可执行行程的智能规划。",
      breakthroughs: [
        "核心技术：Agentic RAG + 动态变量 Prompt 模板",
        "防幻觉机制：设计'AI生成+手动微调'协同交互"
      ],
      achievement: "决策成本降低 70%，实现行程规划闭环，预留商业化接口",
      tech: ["Agentic RAG", "Prompt工程", "动态变量", "防幻觉"]
    },
    {
      id: 3,
      title: "红色遗产数字化管理平台",
      subtitle: "全栈产品经理 (2024.12 - 2025.06)",
      challenge: "国家级大创项目，文化遗产数字化保护。",
      breakthroughs: [
        "技术亮点：Vibe Coding 模式快速交付",
        "Google AI Studio 构建知识图谱"
      ],
      achievement: "数据录入效率提升 60%，错误率下降 80%，获评国家级项目",
      tech: ["Vibe Coding", "知识图谱", "数字化保护", "全栈开发"]
    }
  ]

  // 鼠标拖动滚动效果
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  // 自动滚动效果
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number
    let scrollSpeed = 0.5

    const scroll = () => {
      if (!isDragging && container) {
        container.scrollLeft += scrollSpeed
        
        // 循环滚动
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDragging])

  return (
    <section id="projects" className="py-20 bg-space-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-geek-silver mb-4">
              Featured Projects
            </h2>
            <p className="text-geek-silver/70 text-lg">
              横向滚动交互效果 - 探索我的项目作品
            </p>
          </div>

          {/* 横向滚动容器 */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="flex-shrink-0 w-96">
                <Card className="h-full border-geek-silver/20 bg-space-black/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-fluorescent-cyan font-mono text-sm">
                        0{project.id} /
                      </span>
                      <span className="text-geek-silver/60 text-xs">
                        {project.subtitle}
                      </span>
                    </div>
                    <CardTitle className="text-geek-silver text-xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* 挑战 */}
                    <div>
                      <h4 className="text-fluorescent-cyan text-sm font-mono mb-2">挑战</h4>
                      <p className="text-geek-silver/80 text-sm">{project.challenge}</p>
                    </div>

                    {/* 突破 */}
                    <div>
                      <h4 className="text-fluorescent-cyan text-sm font-mono mb-2">突破</h4>
                      <ul className="space-y-2">
                        {project.breakthroughs.map((breakthrough, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-fluorescent-cyan text-xs mt-1">•</span>
                            <span className="text-geek-silver/80 text-sm">{breakthrough}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 成果 */}
                    <div>
                      <h4 className="text-fluorescent-cyan text-sm font-mono mb-2">成果</h4>
                      <p className="text-geek-silver/80 text-sm font-semibold">
                        {project.achievement}
                      </p>
                    </div>

                    {/* 技术栈 */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-geek-silver/10">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-fluorescent-cyan/10 text-fluorescent-cyan text-xs rounded border border-fluorescent-cyan/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* 滚动指示器 */}
          <div className="text-center mt-8">
            <p className="text-geek-silver/60 text-sm font-mono">
              ← 拖动或滚动查看完整项目 →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects