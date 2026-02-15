import { useState, useEffect } from "react";

const links = [
  { label: "¿Quiénes somos?", href: "#generations", color: "#e0a815" },
  { label: "¿Qué temas tratamos?", href: "#topics", color: "#3b82f6" },
  { label: "Opiniones", href: "#praises", color: "#a855f7" },
  { label: "Contacto", href: "#contact", color: "#22c55e" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg border border-white/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className={`flex items-center gap-2 text-xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-gray-900" : "text-white"}`}>
          <img src="/logo.png" alt="Gamedev Crafters" className={`h-8 w-8 transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`} />
          Gamedev Crafters
        </a>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-500 ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
                style={scrolled ? { backgroundColor: `${link.color}20` } : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden transition-colors duration-500 ${scrolled ? "text-gray-600" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white/80 backdrop-blur-lg rounded-b-2xl px-6 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 px-3 rounded-full font-medium text-gray-700 hover:text-gray-900 transition-colors"
                style={{ backgroundColor: `${link.color}20` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
