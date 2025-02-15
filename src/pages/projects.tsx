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
    <div className="min-h-screen bg-gray-900 text-[#7DF9FF] flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">🚀 Our Blockchain Projects</h1>

      <p className="text-lg text-gray-300 mb-8 max-w-3xl text-center">
        Explore our innovative blockchain projects designed to push the boundaries of decentralization.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-xl p-6 border border-[#7DF9FF] transition-transform transform hover:scale-105 hover:shadow-xl duration-300 flex flex-col"
          >
            <h2 className="text-2xl font-semibold text-[#7DF9FF] mb-3">{project.title}</h2>
            <p className="text-gray-300 leading-relaxed flex-grow">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#7DF9FF] hover:text-blue-400 hover:underline font-medium"
            >
              🔗 View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
