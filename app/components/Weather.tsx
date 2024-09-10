import { useState, useEffect } from "react";
import Snowfall from "~/components/three/Snowfall";

export default function Weather() {
  const weatherImages = [
    { src: "/auburn_tornado.png", alt: "radar image of Auburn, AL tornado" },
    { src: "/bama_snow_measuring.jpg", alt: "measuring snow depth in Alabama" },
    { src: "/bama_snow_radar.png", alt: "radar image of Alabama snowstorm" },
    { src: "/bama_snow.jpg", alt: "Alabama snow in front yard" },
    { src: "/beach_storm.jpg", alt: "Storm at the beach" },
    { src: "/hail.jpg", alt: "hail from Utah thunderstorm" },
    { src: "/hurricane_michael.gif", alt: "hurricane Michael gif" },
    { src: "/split_cell.gif", alt: "supercell splitting in the plains" },
    { src: "/tornado_radar.png", alt: "radar image of tornado" },
    { src: "/beach_storm_2.jpg", alt: "second image of storm at the beach" },
    { src: "/utah_storm.jpg", alt: "image of Utah thunderstorm" },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      const nextIndex =
        selectedImageIndex < weatherImages.length - 1
          ? selectedImageIndex + 1
          : 0;
      setSelectedImageIndex(nextIndex);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null) {
      const previousIndex =
        selectedImageIndex > 0
          ? selectedImageIndex - 1
          : weatherImages.length - 1;
      setSelectedImageIndex(previousIndex);
    }
  };

  return (
    <>
      <Snowfall />
      <p>
        "Mommy, can you change it back?" I asked. I was 4 years old. My Mom was
        confused. "Back to what?" she asked. "The colorful map!" I chirped. I
        was hooked. Just like that, and I am not kidding... just like that, I
        was hooked on the weather. I had seen a temperature gradient map that
        had somehow captured my attention for decades to come. Ever since that
        very moment, I have been enamored with the weather. Now, I call it
        "meteorology". When people think it's weird, I embrace it. When they ask
        why, I proudly explain that I just love the weather. To be more
        specific, I like the extremes. I don't love "average" weather. I either
        want it to be super hot, super cold, storming, or snowing. Sure, I love
        my 70 degree sunny day just like anyone else, but I don't live for it. I
        live for the snow squall that cripples traffic for hours as my wife is
        heading home from work (sorry love)... I really just have a genuine
        appreciation for the weather. In fact, it reminds me of my Creator who
        designed the very world we live in and all the things in it. It's a
        beautiful thing, and I am grateful for it. Without it, I wouldn't be who
        I am today. If you ask just about anyone who has met me what makes me,
        well, me, they would probably say "the weather".
      </p>

      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Weather Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weatherImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer`}
              onClick={() => openLightbox(index)}
            >
              <div className="w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
            <button
              onClick={showPreviousImage}
              className="absolute left-4 text-white text-3xl font-bold z-60"
            >
              &larr;
            </button>

            <div className="relative max-w-fit w-11/12">
              <img
                src={weatherImages[selectedImageIndex].src}
                alt={weatherImages[selectedImageIndex].alt}
                className="max-w-full max-h-screen object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-white text-2xl font-bold z-60"
              >
                &times;
              </button>
            </div>

            <button
              onClick={showNextImage}
              className="absolute right-4 text-white text-3xl font-bold z-60"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </>
  );
}
