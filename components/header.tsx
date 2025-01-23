"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"

const navigation = [
  {
    name: "Wydział",
    href: "/wydzial",
    subItems: [
      { name: "Władze", href: "/wydzial#wladze" },
      { name: "Pracownicy", href: "/wydzial#pracownicy" },
      { name: "Katedry", href: "/wydzial#katedry" },
      { name: "Administracja", href: "/wydzial#administracja" },
    ],
  },
  {
    name: "Kandydaci",
    href: "/kandydaci",
    subItems: [
      { name: "Studia I stopnia", href: "/kandydaci#studia-1-stopnia" },
      { name: "Studia II stopnia", href: "/kandydaci#studia-2-stopnia" },
      { name: "Studia po angielsku", href: "/kandydaci#studia-po-angielsku" },
      { name: "Rekrutacja", href: "/kandydaci#rekrutacja" },
    ],
  },
  {
    name: "Studenci",
    href: "/studenci",
    subItems: [
      { name: "Programy studiów", href: "/studenci#programy-studiow" },
      { name: "Dziekanat", href: "/studenci#dziekanat" },
      { name: "Zapisy", href: "/studenci#zapisy" },
      { name: "Koła naukowe", href: "/studenci#kola-naukowe" },
      { name: "Dyplomanci", href: "/studenci#dyplomanci" },
    ],
  },
  {
    name: "Nauka",
    href: "/nauka",
    subItems: [
      { name: "Obszary Badawcze", href: "/nauka#obszary-badawcze" },
      { name: "Projekty Badawcze", href: "/nauka#projekty-badawcze" },
      { name: "Współpraca Naukowa", href: "/nauka#wspolpraca-naukowa" },
      { name: "Publikacje i Osiągnięcia", href: "/nauka#publikacje-i-osiagniecia" },
    ],
  },
  { name: "Współpraca", href: "/wspolpraca" },
  { name: "Aktualności", href: "/aktualnosci" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#DB3B2B]">
              WIT PWr
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className="text-black hover:bg-[#DB3B2B] hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black hover:bg-[#DB3B2B] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-black hover:text-[#DB3B2B]" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        className="text-black hover:bg-[#DB3B2B] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-black hover:bg-[#DB3B2B] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black hover:bg-[#DB3B2B] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

