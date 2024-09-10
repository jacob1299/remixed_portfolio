import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>{new Date().getFullYear()} &copy; Badolato.io</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://x.com/Jacob__1299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-500"
          >
            <FaXTwitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-badolato/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
