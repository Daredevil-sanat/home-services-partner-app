export default function Testimonials() {
  const testimonials = [
    { name: "Ramesh Kumar", service: "Plumber", text: "I earn more in a week now than I used to in a month. The app is very easy." },
    { name: "Priya Sharma", service: "Beauty Expert", text: "Urban Partner helped me grow my business. I now have regular clients." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Partners Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl">
            <p className="text-lg italic mb-6">“{t.text}”</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}