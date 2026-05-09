export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Sign Up & Verify", desc: "Complete your profile and documents" },
    { num: "02", title: "Choose Services", desc: "Select the services you provide" },
    { num: "03", title: "Get Job Leads", desc: "Receive nearby verified customer requests" },
    { num: "04", title: "Complete & Earn", desc: "Deliver service and get paid instantly" },
  ];

  return (
    <div id="how" className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">How it Works</h2>
      <p className="text-gray-600 mb-12">Just 4 simple steps to start earning</p>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="text-6xl font-bold text-blue-100 mb-4">{step.num}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}