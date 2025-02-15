import { GraduationCap, Users, Code, Network } from "lucide-react";
import { Button } from "../components/ui/button.tsx";

export function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>

          <p className="text-xl text-gray-300 mb-8">
            Welcome to the <strong className="text-blue-400">Centurion University Blockchain Club</strong>! 🚀 We are a community of blockchain 
            enthusiasts dedicated to exploring, learning, and building in the Web3 space.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 my-12">
            {[
              { icon: GraduationCap, title: "Blockchain Fundamentals", desc: "Understanding decentralized technologies" },
              { icon: Code, title: "Smart Contracts & DApps", desc: "Developing applications using Solidity & Web3" },
              { icon: Network, title: "Hackathons & Competitions", desc: "Building innovative blockchain solutions" },
              { icon: Users, title: "Industry Networking", desc: "Connecting students with blockchain professionals" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg border border-gray-700 bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              >
                <feature.icon className="h-10 w-10 mb-4 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-md text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Call-To-Action Button */}
          <Button
            className="px-6 py-3 rounded-lg bg-blue-500 text-white text-lg font-semibold transition hover:bg-blue-400"
            onClick={() => window.open("https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf", "_blank")} 
          >
            Join Our Club on WhatsApp 📲
          </Button>
        </div>
      </div>
    </div>
  );
}
