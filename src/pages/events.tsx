import React, { useState } from "react";
import { Calendar, MapPin, CheckCircle, Users, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button.tsx";

interface Event {
  title: string;
}

export function EventsPage() {
  const events: Event[] = [
    { title: "Blockchain Bootcamp" },
    { title: "Smart Contract Development Workshop" },
    { title: "Web3 Hackathon" },
  ];

  // State to track registered events and count
  const [registered, setRegistered] = useState<boolean[]>(Array(events.length).fill(false));
  const [interestCount, setInterestCount] = useState<number[]>(Array(events.length).fill(0));

  const handleRegister = (index: number) => {
    if (!registered[index]) {
      const updatedRegistered = [...registered];
      updatedRegistered[index] = true;
      setRegistered(updatedRegistered);

      const updatedCount = [...interestCount];
      updatedCount[index] += 1;
      setInterestCount(updatedCount);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-[#00FFFF]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00FFFF] mb-8 text-center">
            📅 Upcoming Events
          </h1>

          <p className="text-lg text-[#00DDFF] mb-12 text-center">
            Stay updated with our latest workshops, hackathons, and speaker sessions.
          </p>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-[#00FFFF] transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <h2 className="text-2xl font-bold text-[#00FFFF] mb-2">{event.title}</h2>
                <div className="flex items-center text-[#00DDFF] mb-2">
                  <Calendar className="h-5 w-5 mr-2" /> Coming Soon
                </div>
                <div className="flex items-center text-[#00DDFF] mb-4">
                  <MapPin className="h-5 w-5 mr-2" /> Venue Intimated Shortly
                </div>

                <div className="flex items-center justify-between">
                  {registered[index] ? (
                    <div className="flex items-center text-green-400 font-semibold">
                      <CheckCircle className="h-5 w-5 mr-2" /> You have registered interest!
                    </div>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-[#39FF14] text-gray-900 font-bold hover:bg-[#32E600] transition-all duration-300"
                      onClick={() => handleRegister(index)}
                    >
                      Register Interest
                    </Button>
                  )}

                  {/* Interest Count Display */}
                  <div className="flex items-center text-[#00FFFF] font-semibold ml-4">
                    <Users className="h-5 w-5 mr-2" />
                    {interestCount[index]} Interested
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Host an Event Section */}
          <div className="mt-12 bg-gray-800 p-8 rounded-lg text-center shadow-md border border-[#00FFFF]">
            <h2 className="text-2xl font-bold text-[#00FFFF]">Want to Host an Event?</h2>
            <p className="mt-2 text-[#00DDFF]">
              If you have an idea for an event and want to collaborate with us, feel free to reach out.
            </p>
            <a
              href="https://t.me/TejaKaranam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Contact Me <MessageSquare className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
