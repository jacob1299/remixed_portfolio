import { Link, Links, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./styles/tailwind.css";
import { useDarkMode } from "./hooks/useDarkMode";
import Footer from "~/components/Footer";
import DarkModeToggle from "~/components/DarkModeToggle";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  const { theme } = useDarkMode();

  return (
    <html className={theme} lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 flex flex-col min-h-screen">
        <nav className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 shadow-md dark:shadow-lg">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            <Link
              to="/"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Badolato.io
            </Link>
          </h1>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 dark:hover:text-blue-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/musings"
                className="hover:text-blue-500 dark:hover:text-blue-300"
              >
                Musings
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-blue-500 dark:hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </nav>

        <main className="container mx-auto py-8 px-6 flex-grow">
          <Outlet />
        </main>

        <Footer />

        <Scripts />
      </body>
    </html>
  );
}
