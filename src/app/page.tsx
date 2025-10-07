import Image from "next/image";
import homeImg from  "@/app/assets/photo.jpg";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center">
        {/* Company Photo */}
        <Image
          src={homeImg}
          alt="Company Photo"
          width={320}
          height={180}
          className="rounded-lg mb-6 object-cover"
          priority
        />
        {/* Company Description */}
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome to</h1>
        <p className="text-gray-700 text-center mb-8">
          We are a forward-thinking company dedicated to delivering innovative solutions and exceptional service. Join us for our special event and discover what makes us unique!
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://www.example.com/rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
          >
            RSVP Now
          </a>
          <a
            href="https://www.example.com/learn-more"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>
      <footer className="mt-10 text-gray-400 text-sm">&copy; {new Date().getFullYear()} Our Company. All rights reserved.</footer>
    </div>
  );
}
