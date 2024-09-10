import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 flex items-center justify-center w-10 h-10"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
}
