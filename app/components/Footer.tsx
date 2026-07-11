import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import navItems from "@/config/navItems";
import Logo from "@/app/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-100">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="space-y-6">

            <Logo
              size={100}
              dark
              
            />

            <p className="max-w-sm text-sm leading-7 text-zinc-400">
              Premium wholesale and retail clothing for men, women, boys and
              girls. Discover stylish fashion with quality you can trust.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Browse Collection

              <ArrowRight size={16} />

            </Link>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {navItems.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="w-fit text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500"
                />

                <div className="space-y-1">

                  {siteConfig.phones.map((phone, index) => (

                    <Link
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-sm text-zinc-400 transition hover:text-white"
                    >
                      {phone}
                    </Link>

                  ))}

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500"
                />

                <div className="space-y-1">

                  {siteConfig.emails.map((email, index) => (

                    <Link
                      key={index}
                      href={`mailto:${email}`}
                      className="block break-all text-sm text-zinc-400 transition hover:text-white"
                    >
                      {email}
                    </Link>

                  ))}

                </div>

              </div>

              {/* Address */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500"
                />

                <p className="text-sm leading-6 text-zinc-400">
                  {siteConfig.address}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-zinc-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} BM Clothing. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://my-portfolio-nine-zeta-62.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-300 transition hover:text-white"
            >
              Senkai
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
}