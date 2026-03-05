import { Button } from "./ui/button"

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "1413253908@qq.com",
      link: "mailto:1413253908@qq.com"
    },
    {
      icon: "📞", 
      label: "Phone",
      value: "18057066491",
      link: "tel:18057066491"
    },
    {
      icon: "📍",
      label: "Location", 
      value: "沈阳 / 杭州 / 远程",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-space-black to-geek-silver/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标题 */}
          <div className="mb-12">
            <h2 className="text-section font-bold text-geek-silver mb-6">
              LET'S BUILD THE FUTURE.
            </h2>
            <p className="text-geek-silver/70 text-lg max-w-2xl mx-auto">
              期待与您共同探讨AI产品设计、技术创新与未来发展
            </p>
          </div>

          {/* 联系信息 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 border border-geek-silver/10 rounded-lg hover:border-fluorescent-cyan/30 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-geek-silver font-semibold mb-2">{item.label}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-fluorescent-cyan hover:text-fluorescent-cyan/80 transition-colors font-mono text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-geek-silver/80 font-mono text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glow" 
              size="lg"
              className="text-lg px-8 py-6 font-mono"
              onClick={() => window.open("mailto:1413253908@qq.com", "_blank")}
            >
              SEND EMAIL
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 font-mono border-geek-silver/30 text-geek-silver hover:bg-geek-silver/10"
              onClick={() => window.open("tel:18057066491", "_blank")}
            >
              CALL NOW
            </Button>
          </div>

          {/* 下载简历 */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-geek-silver/60 hover:text-fluorescent-cyan font-mono"
            >
              [Download Full Resume PDF]
            </Button>
          </div>

          {/* 页脚 */}
          <div className="mt-16 pt-8 border-t border-geek-silver/10">
            <p className="text-geek-silver/60 text-sm font-mono">
              © 2026 Yibo Li. Built with Vibe Coding.
            </p>
            <p className="text-geek-silver/40 text-xs mt-2">
              Architecting Intelligent Experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact