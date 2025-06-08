import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "Nowy kierunek studiów: Sztuczna Inteligencja",
    description: "Od roku akademickiego 2023/2024 rusza nowy kierunek studiów poświęcony Sztucznej Inteligencji.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Sukces studentów w hackathonie",
    description: "Zespół studentów WIT zdobył pierwsze miejsce w międzynarodowym hackathonie programistycznym.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: 'Konferencja "Przyszłość IT" już wkrótce',
    description: "Zapraszamy na coroczną konferencję poświęconą najnowszym trendom w branży IT.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function NewsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Aktualności</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Link href={`/aktualnosci/${item.id}`} className="text-[#DB3B2B] hover:underline">
                  Czytaj więcej
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

