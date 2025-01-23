import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Book, Calendar, Users, GraduationCap, Building } from "lucide-react";

const studyPrograms = [
  { name: "Informatyka", level: "Studia I stopnia" },
  { name: "Informatyka", level: "Studia II stopnia" },
  { name: "Telekomunikacja", level: "Studia I stopnia" },
  { name: "Telekomunikacja", level: "Studia II stopnia" },
  {
    name: "Cyberbezpieczeństwo",
    level: "Studia I stopnia",
    href: "/studenci/programy-studiow/cyberbezpieczenstwo",
  },
];

const studentGroups = [
  {
    name: "Koło Naukowe Informatyków",
    description:
      "Grupa skupiająca pasjonatów programowania i nowych technologii.",
  },
  {
    name: "Koło Naukowe Telekomunikacji",
    description:
      "Studenci zainteresowani sieciami i systemami komunikacyjnymi.",
  },
  {
    name: "Koło Naukowe Cyberbezpieczeństwa",
    description:
      "Grupa zajmująca się zagadnieniami bezpieczeństwa informatycznego.",
  },
];

export default function Students() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Studenci</h1>

          <section id="programy-studiow" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Book className="mr-2" />
              Programy studiów
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studyPrograms.map((program, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-gray-600">{program.level}</p>
                  <Link
                    href={program.href || "#"}
                    className="text-[#DB3B2B] hover:underline text-sm"
                  >
                    Szczegóły programu
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="dziekanat" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Building className="mr-2" />
              Dziekanat
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold mb-2">Godziny otwarcia</h3>
              <p>Poniedziałek-Piątek: 8:00-15:00</p>
              <p>Sobota (w czasie zjazdów): 8:00-12:00</p>
              <h3 className="font-semibold mt-4 mb-2">Kontakt</h3>
              <p>Telefon: +48 71 320 XX XX</p>
              <p>E-mail: dziekanat.wit@pwr.edu.pl</p>
            </div>
          </section>

          <section id="zapisy" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2" />
              Zapisy
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Zapisy na zajęcia odbywają się poprzez system JSOS (Jednolity
                System Obsługi Studenta).
              </p>
              <Link href="#" className="text-[#DB3B2B] hover:underline">
                Przejdź do systemu JSOS
              </Link>
              <h3 className="font-semibold mt-4 mb-2">Terminy zapisów</h3>
              <ul className="list-disc list-inside">
                <li>Zapisy na semestr zimowy: 1-15 września</li>
                <li>Zapisy na semestr letni: 1-15 lutego</li>
              </ul>
            </div>
          </section>

          <section id="kola-naukowe" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2" />
              Koła naukowe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentGroups.map((group, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-gray-600">{group.description}</p>
                  <Link
                    href="#"
                    className="text-[#DB3B2B] hover:underline text-sm"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="dyplomanci" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="mr-2" />
              Dyplomanci
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold mb-2">Informacje dla dyplomantów</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="#" className="text-[#DB3B2B] hover:underline">
                    Zasady pisania prac dyplomowych
                  </Link>
                </li>
                <li>
                  <Link
                    href="/studenci/terminy-obron"
                    className="text-[#DB3B2B] hover:underline"
                  >
                    Terminy obron
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DB3B2B] hover:underline">
                    Wzory dokumentów
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DB3B2B] hover:underline">
                    Propozycje tematów prac dyplomowych
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
