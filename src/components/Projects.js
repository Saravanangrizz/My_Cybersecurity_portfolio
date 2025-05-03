const projects = [
    {
      title: "Log Analysis for Security Threats",
      description: "Python tool to detect suspicious patterns in system logs. Highlights possible intrusion attempts using regex & heuristics.",
      tech: "Python, Flask, Matplotlib"
    },
    {
      title: "Password Strength Checker",
      description: "Real-time evaluator that scores passwords based on entropy, patterns, and dictionary terms.",
      tech: "JavaScript, Regex, React"
    },
    {
      title: "Netflix Clone UI",
      description: "A UI-focused replica of Netflix built with ReactJS showcasing responsive design and UX design principles.",
      tech: "ReactJS, CSS"
    },
    {
        title: "Network Scanner",
        description: "Scan devices on a local network and detect open ports on them.",
        tech: "Python, Socket, Flask"
    }
  ];
  
  export default function Projects() {
    return (
      <section className="bg-black text-white py-12 px-10">
        <h2 className="text-3xl text-green-400 font-bold">Projects</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-green-600">
              <h3 className="text-xl font-bold text-green-300">{p.title}</h3>
              <p className="mt-2">{p.description}</p>
              <p className="text-sm text-gray-400 mt-2">Tech: {p.tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  