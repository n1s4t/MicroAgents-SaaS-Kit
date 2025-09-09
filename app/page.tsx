export default function Page() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Launch micro‑agents fast — mobile‑first SaaS
        </h1>
        <p className="text-slate-600">
          Create, deploy, and monetize focused AI agents with billing and analytics.
        </p>
        <div className="flex gap-3">
          <a className="rounded bg-black px-4 py-2 text-white" href="/signin">Get started</a>
          <a className="rounded border px-4 py-2" href="/pricing">See pricing</a>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 @container card">
        <div className="rounded-lg border p-4">PDF Q&A</div>
        <div className="rounded-lg border p-4">Image Cleanup</div>
        <div className="rounded-lg border p-4">CSV Analyst</div>
        <div className="rounded-lg border p-4">Bangla OCR</div>
      </div>
    </section>
  );
}
