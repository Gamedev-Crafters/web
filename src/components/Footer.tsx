export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 hover:text-gray-200 transition-colors"
      >
        <img
          src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
          alt="Creative Commons BY-NC-SA 4.0"
          className="h-6"
        />
        <span>{new Date().getFullYear()} Gamedev Crafters</span>
      </a>
    </footer>
  );
}
