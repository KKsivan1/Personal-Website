import { useEffect, useRef } from "react"
import { Button } from "./ui/button"

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 简单的打字机效果
    if (textRef.current) {
      const text = textRef.current
      text.style.opacity = "0"
      
      setTimeout(() => {
        text.style.transition = "opacity 0.5s ease-in-out"
        text.style.opacity = "1"
      }, 300)
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-space-black">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-space-black to-geek-silver/5"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(224,224,224,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(224,224,224,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* 内容 */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* 主标题 */}
          <div ref={textRef} className="mb-8">
            <h1 className="text-hero font-bold leading-none tracking-tight">
              <span className="block text-geek-silver">ARCHITECTING</span>
              <span className="block text-geek-silver mt-2">INTELLIGENT</span>
              <span className="block gradient-text mt-2">EXPERIENCES</span>
              <span className="text-fluorescent-cyan text-6xl ml-2 inline-block animate-pulse">_</span>
            </h1>
          </div>

          {/* 引语 */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-geek-silver/80 font-light max-w-3xl mx-auto leading-relaxed">
              "从空间结构到逻辑架构，用建筑学的严谨重新定义 AI 产品流。"
            </p>
            <p className="text-geek-silver/60 text-sm mt-4 font-mono">
              [21岁 | 东北大学 985 | 中共党员 | AI产品经理]
            </p>
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              variant="glow" 
              size="lg"
              className="text-lg px-8 py-6 font-mono"
            >
              EXPLORE MY WORK
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 font-mono border-geek-silver/30 text-geek-silver hover:bg-geek-silver/10"
              onClick={() => window.open("mailto:1413253908@qq.com", "_blank")}
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* 滚动指示器 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-geek-silver/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-fluorescent-cyan rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-fluorescent-cyan/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-fluorescent-cyan/5 rounded-full blur-xl animate-float delay-1000"></div>
    </section>
  )
}

export default Hero