import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Kontakt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dane kontaktowe</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-[#DB3B2B] mr-2" />
                <span>Wybrzeże Wyspiańskiego 27, 50-370 Wrocław</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#DB3B2B] mr-2" />
                <span>+48 71 320 XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#DB3B2B] mr-2" />
                <span>wit@pwr.edu.pl</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Lokalizacja</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8894983613584!2d17.05403731580708!3d51.10772497957303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d4db6b0a2f%3A0x9d3b8e2b7c7e9a8f!2sWydzia%C5%82%20Informatyki%20i%20Telekomunikacji%20Politechniki%20Wroc%C5%82awskiej!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

