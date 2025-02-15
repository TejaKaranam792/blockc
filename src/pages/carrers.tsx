import { Button } from "../components/ui/button.tsx"; 

export function CareersPage() {
  const jobPosts = [
    {
      title: "Meme Marketing",
      link: "https://forms.gle/sRVSSJCvCVZv6Zjv9",
    },
    {
      title: "Short Video Marketing",
      link: "https://forms.gle/skKAsGqZ15q2Kf3E8",
    },
    {
      title: "Content Writing",
      link: "https://forms.gle/AEd6Dj2iMDNr5oNv8",
    },
    {
      title: "Digital Marketing",
      link: "https://forms.gle/ETSEMJNfS1Vo6U8P9",
    },
    {
      title: "Developer Advocate",
      link: "https://forms.gle/bz4x9CFdQ3rsDrVeA",
    },
    {
      title: "Event Manager",
      link: "https://forms.gle/bz4x9CFdQ3rsDrVeA",
    },
    {
      title: "Marketing Intern",
      link: "https://forms.gle/Mqc6Wj8jky8Easy98",
    },
    {
      title: "Full Stack Web Developer",
      link: "https://internshala.com/job/detail/full-stack-developer-job-in-ludhiana-at-quadb-tech1739440584",
    },
    {
      title: "Blockchain Developer, Motoko Developer",
      link: "https://internshala.com/internship/detail/work-from-home-blockchain-development-internship-at-quadb-tech1736832052",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-[#FF10F0]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#FF10F0] mb-8">🚀 Job Opportunities</h1>

          <p className="text-xl text-[#FF10F0] mb-12">
            Job posts dekhkar swipe mat karo, yeh rahi woh perfect match jise aap ‘yes’ bolna chahoge. 😏
          </p>

          <h2 className="text-2xl font-bold text-[#FF10F0] mb-6">🎯 Skills ke dum pe banao apna future:</h2>

          <div className="grid gap-6">
            {jobPosts.map((job, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#FF10F0]">{job.title}</h3>
                <Button
                  className="bg-[#FF10F0] text-black px-4 py-2 rounded-lg hover:bg-[#FF38F8] transition"
                  onClick={() => window.open(job.link, "_blank")}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          {/* Call-To-Action Section */}
          <div className="mt-12 bg-gray-900 p-8 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-2xl font-bold text-[#FF10F0] mb-4">💖 Career ka perfect match yahin milega!</h2>
            <Button
              className="bg-[#FF10F0] text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-[#FF38F8] transition"
              onClick={() => window.open("https://www.crewsphere.io", "_blank")}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
