import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { FileText, Users, Calendar } from "lucide-react"

const publications = [
  {
    title: "Zaawansowane metody uczenia maszynowego w analizie danych medycznych",
    authors: "Anna Nowak, Jan Kowalski, Piotr Wiśniewski",
    journal: "Journal of Medical Informatics",
    year: 2023,
    doi: "10.1000/xyz123",
  },
  {
    title: "Nowe podejście do zabezpieczania sieci IoT przed atakami DDoS",
    authors: "Magdalena Wiśniewska, Adam Malinowski",
    journal: "Cybersecurity and IoT Journal",
    year: 2022,
    doi: "10.1001/abc456",
  },
  {
    title: "Optymalizacja algorytmów routingu w sieciach 5G",
    authors: "Krzysztof Zieliński, Ewa Dąbrowska",
    journal: "5G Networks and Beyond",
    year: 2023,
    doi: "10.1002/def789",
  },
  {
    title: "Zastosowanie metod głębokiego uczenia w przetwarzaniu języka naturalnego",
    authors: "Michał Lewandowski, Karolina Jabłońska",
    journal: "Computational Linguistics Review",
    year: 2022,
    doi: "10.1003/ghi012",
  },
]

export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Publikacje Naukowe</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Najnowsze Publikacje</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <p>{pub.authors}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FileText className="w-4 h-4 mr-2" />
                    <p>{pub.journal}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <p>{pub.year}</p>
                  </div>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DB3B2B] hover:underline"
                  >
                    DOI: {pub.doi}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Archiwum Publikacji</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="mb-4">
                Pełne archiwum naszych publikacji naukowych jest dostępne w repozytorium uczelnianym. Znajdziesz tam
                publikacje z poprzednich lat oraz pełne teksty artykułów, do których mamy prawa do udostępniania.
              </p>
              <a href="#" className="text-[#DB3B2B] hover:underline">
                Przejdź do repozytorium uczelnianego
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

