export default function FAQSection() {
  const faqs = [
    { q: 'What is screen resolution?', a: 'Screen resolution is the number of pixels displayed on your screen, shown as width × height.' },
    { q: 'What is pixel ratio?', a: 'Device pixel ratio is the ratio of physical pixels to logical pixels on your screen.' },
    { q: 'Why does screen size matter?', a: 'Screen size affects how websites and apps display content across different devices.' },
  ];

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto" id="faq">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
            <p className="text-gray-600 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
