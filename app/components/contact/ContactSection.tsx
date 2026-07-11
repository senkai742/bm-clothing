import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="border-b border-zinc-200 bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Have questions about our products or want to place an order?
            Contact us anytime through phone, email or WhatsApp.
          </p>

        </div>
      </section>

      {/* Contact */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[430px_1fr] lg:px-8">

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-black p-3 text-white">
                  <Phone size={20} />
                </div>

                <h2 className="text-xl font-semibold">
                  Phone
                </h2>

              </div>

              {siteConfig.phones.map((phone) => (
                <Link
                  key={phone}
                  href={`tel:${phone}`}
                  className="block py-1 text-zinc-600 transition hover:text-black"
                >
                  {phone}
                </Link>
              ))}

            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-black p-3 text-white">
                  <Mail size={20} />
                </div>

                <h2 className="text-xl font-semibold">
                  Email
                </h2>

              </div>

              {siteConfig.emails.map((email) => (
                <Link
                  key={email}
                  href={`mailto:${email}`}
                  className="block py-1 text-zinc-600 transition hover:text-black"
                >
                  {email}
                </Link>
              ))}

            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-black p-3 text-white">
                  <MapPin size={20} />
                </div>

                <h2 className="text-xl font-semibold">
                  Address
                </h2>

              </div>

              <p className="text-zinc-600">
                {siteConfig.address}
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-black p-3 text-white">
                  <Clock size={20} />
                </div>

                <h2 className="text-xl font-semibold">
                  Business Hours
                </h2>

              </div>

              <p className="text-zinc-600">
                Saturday - Thursday
              </p>

              <p className="mt-1 text-zinc-600">
                9:00 AM - 9:00 PM
              </p>

            </div>

            <div className="flex gap-4">

              {siteConfig.socials.facebook && (
                <Link
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  className="rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-100"
                >
                  <FaFacebook size={20} />
                </Link>
              )}

              <Link
                href={`https://wa.me/${siteConfig.socials.whatsapp.replace(
                  "+",
                  ""
                )}`}
                target="_blank"
                className="rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-100"
              >
                <MessageCircle size={20} />
              </Link>

            </div>

          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-[32px] border border-zinc-200 shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="h-[820px] w-full"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>
      </section>
    </main>
  );
}