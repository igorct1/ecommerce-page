import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full md:max-w-[1200px] lg:px-8 lg:py-20">
        <HeroSection />
      </main>
    </>
  )
}
