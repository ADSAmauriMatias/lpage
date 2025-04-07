import { Hero } from "./_components/hero"
import { Sobre } from "./_components/sobre"
import { Servicos } from "./_components/servicos"
import { Depoimentos } from "./_components/testimonials"
import { Footer } from "./_components/footer"

export default function Home(){
  return(
    <main>
      <Hero/>
      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Footer/>
    </main>
  )
}