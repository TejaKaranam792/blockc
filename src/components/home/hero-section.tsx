import { ArrowRight, Info } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-black overflow-hidden min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-16 py-10">
      
      {/* ✅ Left Side - Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          <span className="block">Explore the Future of</span>
          <span className="block text-blue-400">Blockchain Technology</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Join our community of blockchain enthusiasts, developers, and innovators. Learn, collaborate, and shape the future of decentralized technology.
        </p>

        {/* ✅ Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
          {/* Join Now Button */}
          <a
            href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Join Now <ArrowRight className="ml-2" />
          </a>

          {/* Learn More Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-700 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
          >
            Learn More <Info className="ml-2" />
          </button>
        </div>
      </div>

      {/* ✅ Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] rounded-lg drop-shadow-lg transition-transform hover:scale-105"
          src="https://t3.ftcdn.net/jpg/01/93/54/54/360_F_193545415_6pzIxsRxtPenzgxfVqtuXCG2BE8vitif.jpg"
          alt="Blockchain technology visualization"
          loading="lazy"
        />
      </div>

      {/* ✅ Modal (Popup) for Learn More */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg max-w-lg shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-gray-900">About Blockchain Club</h2>
            <p className="mt-4 text-gray-700">
              We are a group of passionate students at Centurion University dedicated to exploring and innovating in blockchain technology. 
              Our mission is to educate and empower students by providing hands-on experience in Web3, decentralized applications (DApps), and 
              smart contracts through workshops, hackathons, and real-world projects.
            </p>
            <p className="mt-2 text-gray-700">
              We aim to bridge the gap between academia and industry by collaborating with experts and fostering an environment where students 
              can learn, build, and grow together. Whether you're a beginner or an experienced developer, our club offers a platform to gain 
              practical knowledge, work on innovative solutions, and contribute to the future of blockchain technology.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
