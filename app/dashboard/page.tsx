const runs = Array.from({length:6}).map((_,i)=>({ id:i+1, agent:"PDF Q&A", status:i%2?"ok":"error", latency:`${800+i*30}ms` }));
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Agents","Runs","Latency","Cost"].map((k,i)=>(
          <div key={k} className="rounded-lg border p-4">
            <div className="text-sm text-slate-500">{k}</div>
            <div className="text-2xl font-bold">{[4,126,"920ms","$3.21"][i]}</div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-slate-50">
            <tr><th className="p-3 text-left">Run</th><th className="p-3">Agent</th><th className="p-3">Status</th><th className="p-3">Latency</th></tr>
          </thead>
          <tbody>
            {runs.map(r=>(
              <tr key={r.id} className="border-t">
                <td className="p-3">#{r.id}</td><td className="p-3">{r.agent}</td><td className="p-3">{r.status}</td><td className="p-3">{r.latency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
