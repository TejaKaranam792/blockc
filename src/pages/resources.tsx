import React from "react";
import { Book, Code, Shield, Laptop, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button.tsx";

interface Resource {
  title: string;
  description: string;
  link: string;
}

interface ResourceSection {
  title: string;
  icon: React.ElementType;
  resources: Resource[];
}

export function ResourcesPage() {
  const sections: ResourceSection[] = [
    {
      title: "Blockchain Basics",
      icon: Book,
      resources: [
        {
          title: "Blockchain.com Learning",
          description: "Comprehensive guide to blockchain fundamentals.",
          link: "https://www.blockchain.com/learning-portal",
        },
        {
          title: "IBM Blockchain for Beginners",
          description: "Enterprise blockchain concepts and use cases.",
          link: "https://www.ibm.com/blockchain/getting-started",
        },
        {
          title: "Bitcoin Whitepaper",
          description: "The original Bitcoin whitepaper by Satoshi Nakamoto.",
          link: "https://bitcoin.org/bitcoin.pdf",
        },
      ],
    },
    {
      title: "Smart Contracts & DApps",
      icon: Code,
      resources: [
        {
          title: "Solidity Documentation",
          description: "Official Solidity language documentation.",
          link: "https://docs.soliditylang.org/",
        },
        {
          title: "OpenZeppelin Contracts",
          description: "Library for secure smart contract development.",
          link: "https://docs.openzeppelin.com/contracts",
        },
        {
          title: "Truffle Suite",
          description: "Development environment for Ethereum.",
          link: "https://trufflesuite.com/",
        },
      ],
    },
    {
      title: "Security & Best Practices",
      icon: Shield,
      resources: [
        {
          title: "Smart Contract Security Best Practices",
          description: "ConsenSys security recommendations.",
          link: "https://consensys.github.io/smart-contract-best-practices/",
        },
        {
          title: "OWASP Blockchain Security",
          description: "Blockchain security guidelines.",
          link: "https://owasp.org/www-project-blockchain-security-framework/",
        },
      ],
    },
    {
      title: "Learning Platforms",
      icon: Laptop,
      resources: [
        {
          title: "CryptoZombies",
          description: "Learn Solidity through game development.",
          link: "https://cryptozombies.io/",
        },
        {
          title: "Ethereum.org Learning Hub",
          description: "Official Ethereum educational resources.",
          link: "https://ethereum.org/learn/",
        },
        {
          title: "Alchemy University",
          description: "Master blockchain development with hands-on courses.",
          link: "https://university.alchemy.com/",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-[#00FFFF] px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">🚀 Learning Resources</h1>
        <p className="text-lg text-[#00DDFF] mb-10 text-center">
          Explore our curated blockchain resources, tutorials, and documentation to accelerate your learning.
        </p>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <section.icon className="mr-3 h-7 w-7 text-[#00DDFF]" />
                {section.title}
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {section.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-[#00FFFF] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#00FFFF]">{resource.title}</h3>
                    <p className="text-[#00DDFF] mb-4">{resource.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-gray-900 transition-all duration-300"
                      onClick={() => window.open(resource.link, "_blank")}
                    >
                      Access Resource
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ WhatsApp Community Section */}
        <div className="mt-16 bg-gray-800 p-8 rounded-xl flex flex-col items-center text-center border border-[#00FFFF] shadow-lg transition-all duration-300 hover:scale-105">
          <MessageCircle className="h-12 w-12 text-[#00FFFF] mb-4" />
          <h2 className="text-2xl font-bold text-[#00FFFF] mb-2">Join Our Community</h2>
          <p className="text-[#00DDFF] mb-6 max-w-lg">
            Connect with blockchain enthusiasts, get your questions answered, and stay updated with the latest news.
          </p>
          <a
            href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf" // ✅ Replace with your actual WhatsApp group link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#00FFFF] text-gray-900 hover:bg-[#00DDFF] shadow-md">
              Join WhatsApp Community
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
