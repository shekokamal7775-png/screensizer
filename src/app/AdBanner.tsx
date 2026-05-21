export default function AdBanner({ slot }: { slot: string }) {
  return (
    <div className="w-full py-4 px-6 bg-gray-100 text-center text-sm text-gray-400">
      Ad • {slot}
    </div>
  );
}
