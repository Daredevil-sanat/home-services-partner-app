export default function Benefits() {
  const benefits = [
    { icon: "💰", title: "High Earnings", desc: "Earn ₹50k - ₹1 Lakh+ per month" },
    { icon: "📅", title: "Flexible Schedule", desc: "Work when you want" },
    { icon: "🚀", title: "Get More Jobs", desc: "We send you verified leads" },
    { icon: "🛡️", title: "Insurance & Support", desc: "Covered by partner insurance" },
    { icon: "📱", title: "Smart App", desc: "Easy job management & payments" },
    { icon: "⭐", title: "Growth", desc: "Training & skill development" },
  ];

  return (
    <div id="benefits" className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Why Join Us?</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We take care of everything so you can focus on delivering great service
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">{b.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}