import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#DB3B2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Wydział Informatyki i Telekomunikacji</h3>
            <p>Politechnika Wrocławska</p>
            <p>Wybrzeże Wyspiańskiego 27</p>
            <p>50-370 Wrocław</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p>Tel: +48 71 320 XX XX</p>
            <p>E-mail: wit@pwr.edu.pl</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {["Wydział", "Kandydaci", "Studenci", "Nauka", "Współpraca", "Aktualności"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Wydział Informatyki i Telekomunikacji, Politechnika Wrocławska. Wszelkie
            prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

