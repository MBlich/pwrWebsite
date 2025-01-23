import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const authorities = [
  { name: "Prof. dr hab. inż. Jan Kowalski", role: "Dziekan" },
  { name: "Dr hab. inż. Anna Nowak", role: "Prodziekan ds. Kształcenia" },
  { name: "Dr hab. inż. Piotr Wiśniewski", role: "Prodziekan ds. Nauki" },
];

const departments = [
  "Katedra Informatyki",
  "Katedra Telekomunikacji",
  "Katedra Systemów Informatycznych",
  "Katedra Sztucznej Inteligencji",
];

export default function Faculty() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">
            Wydział Informatyki i Telekomunikacji
          </h1>

          <section id="wladze" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Władze</h2>
            <ul className="space-y-2">
              {authorities.map((authority, index) => (
                <li key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="font-semibold">{authority.name}</h3>
                  <p className="text-gray-600">{authority.role}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="pracownicy" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pracownicy</h2>
            <p>
              Lista pracowników naukowych i dydaktycznych wydziału jest dostępna
              w systemie USOS.
            </p>
            <a href="#" className="text-[#DB3B2B] hover:underline">
              Przejdź do systemu USOS
            </a>
          </section>

          <section id="katedry" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Katedry</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((department, index) => (
                <li key={index} className="bg-white shadow rounded-lg p-4">
                  {department}
                </li>
              ))}
            </ul>
          </section>

          <section id="administracja" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Administracja</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold mb-2">Dziekanat</h3>
              <p>Godziny otwarcia: Poniedziałek-Piątek, 8:00-15:00</p>
              <p>Telefon: +48 71 320 XX XX</p>
              <p>E-mail: dziekanat.wit@pwr.edu.pl</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
