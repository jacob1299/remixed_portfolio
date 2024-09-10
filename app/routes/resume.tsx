export default function Resume() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Contact Information Section */}
      <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>Email: <a href="mailto:jacobb1299@gmail.com" className="text-blue-500 dark:text-blue-300">jacobb1299@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-500 dark:text-blue-300">+1 (205) 567-5135</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jacob-badolato/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">https://www.linkedin.com/in/jacob-badolato/</a></p>
      </div>

      {/* Resume PDF Section */}
      <div className="w-full h-full flex-grow">
        <object
          className="w-full h-full"
          type="application/pdf"
          data="/resume.pdf"
        ></object>
      </div>
    </div>
  );
}
