import { useEffect, useState } from "react"
import { cn } from "../lib/utils"



const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#About"},
  {name: "Skills", href: "#Skills"},
  {name: "Projects", href: "#Projects"},
  {name: "Contact", href: "#Contact"},
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

  // allows for the page to check if scroll is happening
  // removes it after to avoid memory leaks
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={cn(
        "fixed w-full transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between"> 
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            hello
          </span>
        </a>

        {/* Desktop navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="text-foreground hover:text-primary">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}