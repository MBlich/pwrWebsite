import { Header } from "../../@/components/header";
import { Footer } from "../../@/components/footer";
import { Shield, Book, Clock, GraduationCap } from "lucide-react";

const semesters = [
  {
    name: "Semestr 1",
    subjects: [
      "Wprowadzenie do cyberbezpieczeństwa",
      "Podstawy programowania",
      "Matematyka dyskretna",
      "Systemy operacyjne",
      "Sieci komputerowe",
    ],
  },
  {
    name: "Semestr 2",
    subjects: [
      "Kryptografia",
      "Bezpieczeństwo sieci",
      "Analiza malware",
      "Bazy danych",
      "Prawo i etyka w cyberbezpieczeństwie",
    ],
  },
  {
    name: "Semestr 3",
    subjects: [
      "Bezpieczeństwo aplikacji webowych",
      "Inżynieria odwrotna",
      "Zarządzanie incydentami bezpieczeństwa",
      "Bezpieczeństwo systemów operacyjnych",
      "Technologie chmurowe",
    ],
  },
  // Add more semesters as needed
];

export default function CybersecurityProgram() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">
            Program Studiów: Cyberbezpieczeństwo
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" />O Kierunku
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Kierunek Cyberbezpieczeństwo przygotowuje studentów do pracy w
                dynamicznie rozwijającej się branży bezpieczeństwa
                informatycznego. Program łączy teorię z praktyką, zapewniając
                kompleksowe zrozumienie zagadnień związanych z ochroną systemów
                informatycznych, sieci i danych.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#DB3B2B] mr-2" />
                  <span>Czas trwania: 3,5 roku (inżynierskie)</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-6 h-6 text-[#DB3B2B] mr-2" />
                  <span>Tryb: Stacjonarny / Niestacjonarny</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 text-[#DB3B2B] mr-2" />
                  <span>Tytuł: Inżynier</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Program Studiów</h2>
            <div className="space-y-6">
              {semesters.map((semester, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {semester.name}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {semester.subjects.map((subject, subIndex) => (
                      <li key={subIndex}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Perspektywy Zawodowe</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Absolwenci kierunku Cyberbezpieczeństwo są przygotowani do pracy
                na stanowiskach:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Specjalista ds. bezpieczeństwa informatycznego</li>
                <li>Analityk bezpieczeństwa</li>
                <li>Pentester</li>
                <li>Audytor bezpieczeństwa IT</li>
                <li>Inżynier ds. bezpieczeństwa sieci</li>
                <li>Konsultant ds. cyberbezpieczeństwa</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
