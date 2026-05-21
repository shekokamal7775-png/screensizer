export default function EducationalSections() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Screen Size Matters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-2">Responsive Design</h3>
          <p className="text-gray-600 text-sm">Knowing your screen size helps developers build better responsive layouts for every device.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-2">Display Quality</h3>
          <p className="text-gray-600 text-sm">Pixel ratio affects image sharpness and overall display quality on modern screens.</p>
        </div>
      </div>
    </section>
  );
}
