import { ArrowDown } from "lucide-react"



export const HeroSection = () => {
  return (
  <section id="hero" className="relative min-h-screen flex flex-column items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-primary">Hello, I am Alecxander Cooper</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground">
          I like solving problems
        </p>

        <div>
          <a href="#projects" className="cosmic-button">
            View my work
          </a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <span>Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
    </div>
  </section>
  )
}