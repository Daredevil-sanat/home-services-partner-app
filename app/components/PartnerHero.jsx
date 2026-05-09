'use client';   // ← This is the fix

export default function PartnerHero() {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Earn more. Work better.<br />
          <span className="text-blue-600">Be your own boss.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Join thousands of professionals earning ₹50,000 – ₹1,00,000+ every month with Urban Partner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToRegister}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition active:scale-95"
          >
            Become a Partner Today
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-2xl text-lg font-medium transition">
            Watch Video
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-10 text-sm">
          <div>
            <div className="font-bold text-3xl text-green-600">4.8★</div>
            <div className="text-gray-500">Partner Rating</div>
          </div>
          <div>
            <div className="font-bold text-3xl">12,450+</div>
            <div className="text-gray-500">Active Partners</div>
          </div>
          <div>
            <div className="font-bold text-3xl">₹2.8 Cr+</div>
            <div className="text-gray-500">Paid this month</div>
          </div>
        </div>
      </div>
    </div>
  );
}