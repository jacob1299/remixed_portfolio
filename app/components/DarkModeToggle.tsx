import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <label className="ml-4 inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="sr-only"
        aria-label="Toggle Dark Mode"
      />
      <div className="relative w-14 h-8 bg-gray-300 dark:bg-gray-500 rounded-full transition-colors duration-300">
        {/* Sun and Moon Icons */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <SunIcon className="text-yellow-400" />
          ) : (
            <MoonIcon className="text-gray-800" />
          )}
        </div>
      </div>
    </label>
  );
}
