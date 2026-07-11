import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import navItems from "@/config/navItems";


export default function Footer() {
  return (
    // Replaced plain white with a distinct, rich dark zinc slate to ground the page
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-100">
      
      {/* Main Link Grid Track */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          
          {/* Column 1: Identity */}
          <div className="space-y-5">
            <Link 
              href="/" 
              className="text-2xl font-light uppercase tracking-widest text-white block"
            >
              BM <span className="font-bold">Clothing</span>
            </Link>
            <p className="max-w-sm text-sm font-light leading-relaxed text-zinc-400">
              Premium wholesale and retail clothing for men, women, boys and girls. 
              High-end fabrics tailored for contemporary fashion.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-zinc-800 pb-2">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-light text-zinc-400 transition-colors duration-200 hover:text-white uppercase tracking-wider w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Context */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-zinc-800 pb-2">
              Contact Channels
            </h3>
            <div className="mt-4 space-y-4">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 text-zinc-400 shrink-0" />
                <div className="space-y-1 text-sm font-light text-zinc-300">
                  {siteConfig.phones.map((phone, idx) => (
                    <Link key={idx} href={`tel:${phone}`} className="block hover:text-white transition-colors">
                      {phone}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 text-zinc-400 shrink-0" />
                <div className="space-y-1 text-sm font-light text-zinc-300">
                  {siteConfig.emails.map((email, idx) => (
                    <Link key={idx} href={`mailto:${email}`} className="block hover:text-white transition-colors break-all">
                      {email}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Address Map Pin */}
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 text-zinc-400 shrink-0" />
                <p className="text-sm font-light text-zinc-300 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="border-t border-zinc-900 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs font-light tracking-wider text-zinc-500 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} BM Clothing. All rights reserved.</p>
          <p className="text-center md:text-right">
            Designed & Developed by{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://my-portfolio-nine-zeta-62.vercel.app/" className="font-semibold text-zinc-300 uppercase tracking-widest">
              Senkai 
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}