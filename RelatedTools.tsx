export default function RelatedTools() {
  const tools = [
    { name: 'Resolution Checker', desc: 'Check your display resolution' },
    { name: 'Aspect Ratio Calculator', desc: 'Calculate screen aspect ratio' },
    { name: 'DPI Calculator', desc: 'Find your screen DPI' },
  ];

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-gray-800 mb-2">{tool.name}</h3>
            <p className="text-gray-500 text-sm">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
