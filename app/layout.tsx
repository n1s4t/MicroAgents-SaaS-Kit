export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen">
          <aside className="hidden md:block w-64 border-r">
            <div className="p-4 font-semibold">AI Micro‑Agents</div>
            <nav className="space-y-1 p-2">
              {["Dashboard","Agents","Runs","Pricing","Settings"].map((t) => (
                <a key={t} className="block rounded px-3 py-2 hover:bg-slate-50" href={`/${t.toLowerCase()}`}>{t}</a>
              ))}
            </nav>
          </aside>
          <div className="flex-1">
            <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
              <div className="container flex h-14 items-center justify-between">
                <a href="/" className="font-semibold md:hidden">AI Micro‑Agents</a>
                <button className="md:hidden rounded border px-3 py-2">Menu</button>
                <div className="hidden md:flex items-center gap-3">
                  <a className="text-sm hover:underline" href="/pricing">Pricing</a>
                  <a className="rounded bg-black px-3 py-2 text-white" href="/signin">Sign in</a>
                </div>
              </div>
            </header>
            <main className="container py-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
