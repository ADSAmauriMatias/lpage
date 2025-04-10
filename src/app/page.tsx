import { Hero } from "./_components/hero"
import { Sobre } from "./_components/sobre"
import { Servicos } from "./_components/servicos"
import { Depoimentos } from "./_components/testimonials"
import { Footer } from "./_components/footer"
import { MVV } from "./_components/mvv"

export default function Home(){
  return(
    <main>
      <Hero/>
      <MVV/>
      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Footer/>
    </main>
  )
}