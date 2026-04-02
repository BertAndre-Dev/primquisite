import Image from "next/image";
import Link from "next/link";

const services = [
  "Property Development & Investment",
  "PropTech & Digital Estate Management",
  "Operations & Asset Management",
  "Risk, Transparency & Compliance",
  "Enterprise Data & Intelligence",
];

const links = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: "/icons/instagram.svg", label: "Instagram" },
  { href: "#", icon: "/icons/linkdln.svg", label: "LinkedIn" },
  { href: "#", icon: "/icons/facebook.svg", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#231F20F2] text-[#EDE6DA]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 xl:px-0">
        <div className="mb-10 flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Primquisite Real Estate"
            width={60}
            height={64}
            priority={false}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold uppercase">Primquisite</h1>
            <p className="text-sm text-[#D5CFC7] uppercase">Real Estate</p>
          </div>
        </div>

        <div className="grid gap-10 md:gap-20 xl:gap-60 md:grid-cols-3">
          <section>
            <h3 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-wide text-white">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-[#D5CFC7]">
              <li className="flex items-start gap-3">
                <Image src="/icons/office.svg" alt="" width={16} height={22} />
                <span>20 Awudu Ekpekha Blvd, Lekki Phase 1, Lagos Nigeria.</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/icons/email.svg" alt="" width={16} height={22} />
                <span>Email: info@primquisite.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/icons/phone.svg" alt="" width={16} height={22} />
                <span>Phone: +234 913 866 7927</span>
              </li>
            </ul>

            <p className="mt-5 text-sm text-[#D5CFC7]">Follow us:</p>
            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDA74F] hover:bg-[#DDA74F]/10"
                >
                  <Image src={item.icon} alt="" width={18} height={18} />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm leading-6 text-[#D5CFC7]">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-wide text-white">
              Links
            </h3>
            <ul className="space-y-2 text-sm leading-6 text-[#D5CFC7]">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-10 text-center text-sm text-[#D5CFC7]">
          © 2026 Primquisite Real Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
