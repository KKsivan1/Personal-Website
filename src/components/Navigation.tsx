import { useState, useEffect } from "react"
import { Button } from "./ui/button"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // 检测当前活动区域
      const sections = ["home", "identity", "projects", "research", "skills", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-space-black/90 backdrop-blur-md border-b border-geek-silver/10" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-fluorescent-cyan rounded-full animate-pulse"></div>
            <span className="text-geek-silver font-mono text-lg font-bold">YIBO.LI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "identity", label: "Identity" },
              { id: "projects", label: "Projects" },
              { id: "research", label: "Research" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-sm transition-all duration-300 hover:text-fluorescent-cyan ${
                  activeSection === item.id 
                    ? "text-fluorescent-cyan font-bold" 
                    : "text-geek-silver/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-geek-silver"></div>
              <div className="w-6 h-0.5 bg-geek-silver"></div>
              <div className="w-6 h-0.5 bg-geek-silver"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation