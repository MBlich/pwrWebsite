import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Calendar, FileText, Users } from "lucide-react"

const diplomaSchedule = [
  {
    stage: "Składanie prac dyplomowych",
    inEngineerStudies: "15 stycznia - 31 stycznia",
    inMasterStudies: "1 czerwca - 15 czerwca",
  },
  {
    stage: "Egzaminy dyplomowe (obrony)",
    inEngineerStudies: "15 lutego - 28 lutego",
    inMasterStudies: "1 lipca - 15 lipca",
  },
  {
    stage: "Składanie dokumentów do dyplomów",
    inEngineerStudies: "do 15 marca",
    inMasterStudies: "do 31 lipca",
  },
  {
    stage: "Wręczenie dyplomów",
    inEngineerStudies: "kwiecień",
    inMasterStudies: "wrzesień",
  },
]

export default function DefenseSchedule() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Harmonogram dyplomowania</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2" />
              Terminy obron i proces dyplomowania
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Etap
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Studia inżynierskie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Studia magisterskie
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {diplomaSchedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.stage}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.inEngineerStudies}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.inMasterStudies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileText className="mr-2" />
              Wymagane dokumenty
            </h2>
            <ul className="list-disc list-inside space-y-2 bg-white shadow-md rounded-lg p-6">
              <li>Praca dyplomowa w wersji elektronicznej (PDF) i drukowanej</li>
              <li>Oświadczenie o samodzielnym wykonaniu pracy</li>
              <li>Karta obiegowa</li>
              <li>4 zdjęcia formatu 4,5 x 6,5 cm</li>
              <li>Dowód opłaty za dyplom (jeśli wymagana)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2" />
              Skład komisji egzaminacyjnej
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="mb-4">W skład komisji egzaminacyjnej wchodzą:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Przewodniczący komisji (samodzielny pracownik naukowy)</li>
                <li>Promotor pracy dyplomowej</li>
                <li>Recenzent pracy dyplomowej</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

