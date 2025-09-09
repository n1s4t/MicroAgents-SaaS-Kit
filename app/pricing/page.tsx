const tiers = [
  { name: "Free", price: "$0", cta: "Start", features: ["1 agent","100 runs/mo"] },
  { name: "Pro", price: "$19", cta: "Upgrade", features: ["10 agents","10k runs/mo","Priority"] },
  { name: "Team", price: "$79", cta: "Choose", features: ["Org roles","Usage metering","SLA"] },
];
export default function Pricing() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className="rounded-xl border p-6 flex flex-col">
          <h3 className="text-lg font-semibold">{t.name}</h3>
          <p className="mt-2 text-3xl font-bold">{t.price}<span className="text-sm font-normal">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            {t.features.map((f) => <li key={f}>• {f}</li>)}
          </ul>
          <a href="/signin" className="mt-6 rounded bg-black px-4 py-2 text-white text-center">{t.cta}</a>
        </div>
      ))}
    </div>
  );
}
