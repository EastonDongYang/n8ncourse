import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LearningPath from '@/components/LearningPath'
import FeaturedTemplates from '@/components/FeaturedTemplates'
import UseCases from '@/components/UseCases'
import RecommendedTools from '@/components/RecommendedTools'
import Community from '@/components/Community'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LearningPath />
      <FeaturedTemplates />
      <UseCases />
      <RecommendedTools />
      <Community />
      <Newsletter />
      <Footer />
    </main>
  )
} 