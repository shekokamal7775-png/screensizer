export default function NewsletterSection() {
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h2>
      <p className="text-gray-500 mb-6">Get the latest screen size tips and tools.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </section>
  );
}
