export function Projects() {
  const projects = [
    {
      title: "NFT Marketplace",
      description:
        "A decentralized NFT marketplace where users can mint, buy, and sell NFTs. Built using Solidity for smart contracts, IPFS for decentralized storage, and React.js for the frontend, ensuring secure and transparent NFT transactions.",
      link: "https://github.com/Adityab4566/NFT-MARKETPLACE",
    },
    {
      title: "Decentralized File Storage",
      description:
        "A blockchain-based file storage system leveraging IPFS for decentralized storage and Ethereum smart contracts for managing access and security. Users can upload, retrieve, and share files securely without relying on centralized servers.",
      link: "https://github.com/Abhishekvenky010/Decentralized_file_storage/tree/main",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#7DF9FF] flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">🚀 Our Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#7DF9FF] mb-3">{project.title}</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7DF9FF] hover:text-blue-400 hover:underline mt-4 inline-block font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
