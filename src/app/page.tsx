import { Hero } from "./_components/hero"
import { Sobre } from "./_components/sobre"
import { Servicos } from "./_components/servicos"
import { Depoimentos } from "./_components/testimonials"
import { Footer } from "./_components/footer"
import { MVV } from "./_components/mvv"
import { Especialidades } from "./_components/especialidades"

export default function Home(){
  return(
    <main className="scroll-smooth">
      <Hero/>
      <MVV/>
      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Especialidades/>
      <Footer/>
    </main>
  )
}