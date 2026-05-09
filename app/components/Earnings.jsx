export default function Earnings() {
  return (
    <div id="earnings" className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Real Earnings, Real Freedom</h2>
      <div className="bg-white rounded-3xl p-12 shadow-sm">
        <div className="text-6xl font-bold text-green-600 mb-2">₹85,000</div>
        <p className="text-xl text-gray-600 mb-8">Average monthly earning of top partners</p>

        <div className="grid grid-cols-3 gap-6 text-left max-w-md mx-auto">
          <div><strong>Plumbers</strong><br />₹70k – ₹1.1L</div>
          <div><strong>Electricians</strong><br />₹65k – ₹95k</div>
          <div><strong>Cleaners</strong><br />₹45k – ₹75k</div>
        </div>
      </div>
    </div>
  );
}