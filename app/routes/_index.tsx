import Space from "~/components/three/Space";

export default function AboutMe() {
  const images = [
    {
      src: "/oia.jpg",
      alt: "Sunset in Oia, Greece",
    },
    {
      src: "/skiing_with_nick.jpg",
      alt: "Skiing with Nick in Utah",
    },
    {
      src: "/icy.jpg",
      alt: "Icy conditions in Alabama",
    },
  ];

  return (
    <div className="container mx-auto px-6 space-y-12">
      <Space withEarth={false} />
      {/* Intro Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Hi! I'm Jacob. I am a software engineer with a knack for building
          well-designed systems and a love for learning. Dive into my journey
          through work, education, and personal passions below.
        </p>
      </section>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg shadow-lg block align-bottom"
            />
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative ml-6">
        {/* Gradient Border for Timeline */}
        <div className="absolute top-0 left-0 h-full w-0.5 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-b before:from-blue-500 before:to-transparent before:via-blue-500 before:to-50%"></div>

        {/* Work Section */}
        <div className="relative mb-10 ml-12">
          <div className="absolute w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center -left-16">
            💻
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Work
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I am currently working at RainFocus in Lehi, UT, where we are at the
            cutting edge of event technology. We run events for some of the
            largest companies in the world! My role involves building scalable
            and efficient software architectures, and I enjoy being part of a
            team that’s pushing the boundaries of what’s possible in the event
            technology space.
          </p>
        </div>

        {/* Education Section */}
        <div className="relative mb-10 ml-12">
          <div className="absolute w-8 h-8 bg-green-500 rounded-full text-white flex items-center justify-center -left-16">
            🎓
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Education
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I am a proud graduate of Auburn University, where I received my
            Bachelor's degree in Computer Science. I am also pursuing my
            Master's degree in Computer Science at the University of Texas at
            Austin. My academic journey has been deeply fulfilling, allowing me
            to dive into areas like natural language processing, deep learning,
            and AI.
          </p>
        </div>

        {/* Personal Life Section */}
        <div className="relative ml-12">
          <div className="absolute w-8 h-8 bg-pink-500 rounded-full text-white flex items-center justify-center -left-16">
            🌱
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Personal Life
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Outside of work and school, I enjoy various hobbies that keep me
            balanced and energized.
          </p>

          {/* Nested Subsections for Hobbies */}
          <div className="space-y-10 pl-8 relative">
            <div className="absolute top-0 left-0 h-full w-0.5 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-b before:from-gray-300 dark:before:from-gray-600 before:via-gray-300 dark:before:via-gray-600 before:to-transparent%"></div>

            <div className="relative pl-8">
              <div className="absolute w-6 h-6 bg-indigo-500 rounded-full text-white flex items-center justify-center -left-11">
                🌦️
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Meteorology
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                My main hobby is meteorology. I’ve always been fascinated by the
                weather and love tracking storms, understanding weather
                patterns, and learning about the science behind meteorological
                phenomena. It's a hobby that keeps me curious and constantly
                learning, and I hope to employ machine learning techniques to
                side projects in the future.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center -left-11">
                ⚽
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Soccer
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I’ve been an avid soccer player since I was 4 years old. Whether
                it's playing in local leagues or just kicking around with
                friends, soccer helps me stay active and sharp both physically
                and mentally. It’s a passion that balances my tech-focused life
                with some much-needed outdoor activity.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-6 h-6 bg-yellow-500 rounded-full text-white flex items-center justify-center -left-11">
                🏓
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Pickleball
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pickleball has become a new favorite hobby. The mix of strategy,
                agility, and social interaction makes it a perfect way to unwind
                and connect with others. I enjoy the friendly competition and
                the way it keeps me engaged and moving. If you're ever looking
                to lose a game of pickleball, hit me up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
