import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { NewsSection } from "./components/news-section"
import { EventsSection } from "./components/events-section"
import { ContactSection } from "./components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#DB3B2B] text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wydział Informatyki i Telekomunikacji</h1>
            <p className="text-xl md:text-2xl">Politechnika Wrocławska</p>
          </div>
        </section>
        <NewsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

