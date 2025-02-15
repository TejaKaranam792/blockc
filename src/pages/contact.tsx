import { Button } from '../components/ui/button.tsx';

export function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Profile Card */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mb-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-[#20B2AA]">K. Venkata Sai Teja</h2>
          <p className="text-lg text-gray-400 mt-2">Coordinator, Blockchain Club</p>
          <p className="text-md text-gray-500">CSE - 3rd Year, Centurion University</p>
        </div>

        <h1 className="text-4xl font-bold text-[#20B2AA] mb-8">Contact Me</h1>

        <p className="text-xl text-gray-400 mb-12">
          You can reach me via the following platforms or drop me an email!
        </p>

        <div className="space-y-6">
          {/* Email Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transition hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2 text-[#20B2AA]">Email</h3>
            <p className="text-gray-400 mb-4">Feel free to email me anytime.</p>
            <Button
              className="!bg-purple-600 !text-white !px-4 !py-2 !rounded-lg !hover:bg-purple-700 !transition"
              onClick={() => window.location.href = `mailto:tejakaranam76252@gmail.com`}
            >
              Send Email
            </Button>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transition hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2 text-[#20B2AA]">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Connect with me on LinkedIn.</p>
            <Button
              className="!bg-blue-600 !text-white !px-4 !py-2 !rounded-lg !hover:bg-blue-700 !transition"
              onClick={() => window.open('https://www.linkedin.com/in/teja-karanam-60a14a267/', '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </div>

          {/* Instagram Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transition hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2 text-[#20B2AA]">Instagram</h3>
            <p className="text-gray-400 mb-4">Follow me on Instagram.</p>
            <Button
              className="!bg-pink-600 !text-white !px-4 !py-2 !rounded-lg !hover:bg-pink-700 !transition"
              onClick={() => window.open('https://www.instagram.com/teja_karanam.792/', '_blank')}
            >
              Follow on Instagram
            </Button>
          </div>

          {/* Telegram Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transition hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2 text-[#20B2AA]">Telegram</h3>
            <p className="text-gray-400 mb-4">You can also reach me via Telegram.</p>
            <Button
              className="!bg-green-600 !text-white !px-4 !py-2 !rounded-lg !hover:bg-green-700 !transition"
              onClick={() => window.open('t.me/TejaKaranam', '_blank')}
            >
              Message on Telegram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
