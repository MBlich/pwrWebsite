import Link from "next/link";
import { FlaskRoundIcon as Flask, Cpu, Shield, Globe, Zap } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const researchAreas = [
  {
    icon: <Cpu className="w-8 h-8 text-[#DB3B2B]" />,
    name: "Sztuczna Inteligencja i Uczenie Maszynowe",
    description:
      "Badania nad zaawansowanymi algorytmami AI i ich zastosowaniami w różnych dziedzinach.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#DB3B2B]" />,
    name: "Cyberbezpieczeństwo",
    description:
      "Rozwój nowych metod ochrony systemów informatycznych i sieci przed zagrożeniami.",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#DB3B2B]" />,
    name: "Internet Rzeczy (IoT)",
    description:
      "Badania nad inteligentnymi systemami połączonych urządzeń i ich zastosowaniami.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#DB3B2B]" />,
    name: "Przetwarzanie Danych i Big Data",
    description:
      "Rozwój metod analizy i przetwarzania ogromnych zbiorów danych.",
  },
];

const researchProjects = [
  {
    title: "AI4Future: Sztuczna Inteligencja dla Zrównoważonego Rozwoju",
    description:
      "Projekt badawczy mający na celu opracowanie inteligentnych systemów wspierających zrównoważony rozwój miast i przemysłu.",
    leader: "prof. dr hab. inż. Anna Nowak",
  },
  {
    title:
      "CyberShield: Zaawansowane Systemy Ochrony Infrastruktury Krytycznej",
    description:
      "Projekt skupiający się na rozwoju innowacyjnych metod zabezpieczania infrastruktury krytycznej przed cyberatakami.",
    leader: "dr hab. inż. Piotr Kowalski",
  },
  {
    title: "SmartCity: Inteligentne Rozwiązania dla Miast Przyszłości",
    description:
      "Badania nad zastosowaniem technologii IoT w zarządzaniu miejską infrastrukturą i usługami.",
    leader: "dr inż. Magdalena Wiśniewska",
  },
];

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Nauka i Badania</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Flask className="mr-2" />
              Obszary Badawcze
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {area.icon}
                    <h3 className="text-xl font-semibold ml-4">{area.name}</h3>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Projekty Badawcze</h2>
            <div className="space-y-6">
              {researchProjects.map((project, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500">
                    Kierownik projektu: {project.leader}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Współpraca Naukowa</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Wydział Informatyki i Telekomunikacji aktywnie współpracuje z
                wiodącymi ośrodkami badawczymi i firmami technologicznymi w
                kraju i za granicą. Nasze partnerstwa obejmują wspólne projekty
                badawcze, wymianę naukową oraz organizację konferencji i
                seminariów.
              </p>
              <Link href="#" className="text-[#DB3B2B] hover:underline">
                Dowiedz się więcej o naszych partnerach naukowych
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Publikacje i Osiągnięcia
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Nasi naukowcy regularnie publikują wyniki swoich badań w
                renomowanych czasopismach naukowych i prezentują je na
                międzynarodowych konferencjach. Zapoznaj się z naszymi
                najnowszymi publikacjami i osiągnięciami naukowymi.
              </p>
              <Link
                href="/nauka/publikacje"
                className="text-[#DB3B2B] hover:underline"
              >
                Przeglądaj publikacje naukowe
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
