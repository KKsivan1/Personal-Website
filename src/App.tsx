import { useEffect, useRef } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Identity from "./components/Identity"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  const mouseFollowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 鼠标跟随效果
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        mouseFollowerRef.current.style.left = e.clientX + "px"
        mouseFollowerRef.current.style.top = e.clientY + "px"
      }
    }

    // GSAP 动画初始化
    const initAnimations = () => {
      // 简单的滚动动画
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in")
          }
        })
      }, observerOptions)

      // 观察所有需要动画的元素
      document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    initAnimations()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-space-black text-geek-silver overflow-x-hidden">
      {/* 鼠标跟随效果 */}
      <div 
        ref={mouseFollowerRef}
        className="mouse-follower pointer-events-none"
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          background: "radial-gradient(circle, rgba(0, 255, 209, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          mixBlendMode: "screen",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out"
        }}
      />

      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容区域 */}
      <main>
        <Hero />
        <Identity />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>

      {/* 全局样式增强 */}
      <style jsx global>{`
        /* 平滑滚动 */
        html {
          scroll-behavior: smooth;
        }

        /* 自定义滚动条 */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0A0A;
        }

        ::-webkit-scrollbar-thumb {
          background: #00FFD1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00E6C4;
        }

        /* 文本选择颜色 */
        ::selection {
          background: rgba(0, 255, 209, 0.3);
          color: #E0E0E0;
        }

        /* 焦点样式 */
        *:focus {
          outline: 2px solid #00FFD1;
          outline-offset: 2px;
        }

        /* 性能优化 */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}

export default App