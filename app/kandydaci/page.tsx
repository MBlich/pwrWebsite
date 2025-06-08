import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Link from "next/link"
import { BookOpen, GraduationCap, Globe } from "lucide-react"

const studyPrograms = {
  bachelor: [
    { name: "Informatyka", description: "Studia inżynierskie, 7 semestrów" },
    { name: "Telekomunikacja", description: "Studia inżynierskie, 7 semestrów" },
    { name: "Cyberbezpieczeństwo", description: "Studia inżynierskie, 7 semestrów" },
    { name: "Inżynieria Systemów", description: "Studia inżynierskie, 7 semestrów" },
  ],
  master: [
    { name: "Informatyka", description: "Studia magisterskie, 3 semestry" },
    { name: "Telekomunikacja", description: "Studia magisterskie, 3 semestry" },
    { name: "Cyberbezpieczeństwo", description: "Studia magisterskie, 3 semestry" },
  ],
  english: [
    { name: "Computer Science", description: "Bachelor of Science, 7 semesters" },
    { name: "Computer Science", description: "Master of Science, 3 semesters" },
    { name: "Cybersecurity", description: "Master of Science, 3 semesters" },
  ],
}

export default function Candidates() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Kandydaci</h1>

          <section id="studia-1-stopnia" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2" />
              Studia I stopnia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studyPrograms.bachelor.map((program, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <Link href="#" className="text-[#DB3B2B] hover:underline text-sm">
                    Więcej informacji
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="studia-2-stopnia" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="mr-2" />
              Studia II stopnia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studyPrograms.master.map((program, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <Link href="#" className="text-[#DB3B2B] hover:underline text-sm">
                    Więcej informacji
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="studia-po-angielsku" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2" />
              Studia po angielsku
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studyPrograms.english.map((program, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <Link href="#" className="text-[#DB3B2B] hover:underline text-sm">
                    More information
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="rekrutacja" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rekrutacja</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Informacje o procesie rekrutacji, wymaganych dokumentach i terminach znajdziesz na stronie Rekrutacja
                Politechniki Wrocławskiej.
              </p>
              <Link href="https://rekrutacja.pwr.edu.pl" className="text-[#DB3B2B] hover:underline">
                Przejdź do strony Rekrutacja PWr
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

