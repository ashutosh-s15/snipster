export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">Snipster</h1>
        <h2 className="text-white">
          Made by{" "}
          <a
            href="https://github.com/ashutosh-s15"
            className="text-purple-200 hover:text-purple-500 transition-colors"
            target="_blank"
          >
            @Ashutosh
          </a>
        </h2>
      </div>
    </header>
  );
}
