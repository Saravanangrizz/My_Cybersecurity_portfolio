const certs = [
    "OPSWAT - Introduction to Critical Infrastructure Protection",
    "Oracle Cloud AI Foundations Associate",
    "Cybersecurity Analyst - Forage Simulation",
    "Microsoft AI Fluency",
    "Python for Beginners - Great Learning"
  ];
  
  export default function Certifications() {
    return (
      <section className="bg-gray-900 text-white py-12 px-10">
        <h2 className="text-3xl text-green-400 font-bold">Certifications</h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {certs.map((cert, i) => <li key={i}>{cert}</li>)}
        </ul>
      </section>
    );
  }
  