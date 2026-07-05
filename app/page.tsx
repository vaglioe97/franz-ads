import Hero from "@/components/sections/Hero"
import Cases from "@/components/sections/Cases"
import Services from "@/components/sections/Services"
import Method from "@/components/sections/Method"
import About from "@/components/sections/About"
import Testimonials from "@/components/sections/Testimonials"
import Faq from "@/components/sections/Faq"
import Apply from "@/components/sections/Apply"

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Cases />
      <Services />
      <Method />
      <About />
      <Testimonials />
      <Faq />
      <Apply />
    </main>
  )
}
