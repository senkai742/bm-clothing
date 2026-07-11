import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[32px] bg-zinc-900">

          <div className="grid gap-12 p-10 lg:grid-cols-2 lg:p-16">

            {/* Left */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Contact
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
                Ready to Place an Order?
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-300">
                Contact BM Clothing today for wholesale and retail clothing.
                We're always happy to assist you.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href={`tel:${siteConfig.phones[0]}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-zinc-900 transition hover:bg-zinc-200"
                >
                  <Phone size={18} />
                  Call Now
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-7 py-3.5 font-medium text-white transition hover:bg-zinc-800"
                >
                  Contact Page
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">

                <div className="rounded-xl bg-white p-3 text-black">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Phone
                  </h3>

                  <p className="mt-2 text-zinc-300">
                    {siteConfig.phones[0]}
                  </p>

                  <p className="text-zinc-300">
                    {siteConfig.phones[1]}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">

                <div className="rounded-xl bg-white p-3 text-black">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Email
                  </h3>

                  <p className="mt-2 text-zinc-300">
                    {siteConfig.emails[0]}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">

                <div className="rounded-xl bg-white p-3 text-black">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Address
                  </h3>

                  <p className="mt-2 text-zinc-300">
                    {siteConfig.address}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}