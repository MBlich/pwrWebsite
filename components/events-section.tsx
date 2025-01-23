import { Calendar } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Dzień Otwarty Wydziału",
    date: "2023-05-15",
    description: "Zapraszamy wszystkich zainteresowanych studiami na naszym wydziale.",
  },
  {
    id: 2,
    title: "Warsztaty z programowania w Pythonie",
    date: "2023-06-01",
    description: "Praktyczne warsztaty dla studentów chcących poszerzyć swoje umiejętności programistyczne.",
  },
  {
    id: 3,
    title: "Seminarium: Cyberbezpieczeństwo w praktyce",
    date: "2023-06-15",
    description: "Eksperci z branży podzielą się swoimi doświadczeniami w zakresie cyberbezpieczeństwa.",
  },
]

export function EventsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nadchodzące wydarzenia</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-[#DB3B2B] mr-2" />
                <span className="text-gray-600">{event.date}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

