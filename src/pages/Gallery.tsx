import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, MapPin, Phone, X } from "lucide-react";
import clsx from "clsx";

type GalleryItem = {
  id: string;
  title: string;
  src: string;
  alt?: string;
};

const sampleGallery: GalleryItem[] = [
  { id: "1", title: "Skill Workshop", src: "/media/audience.png", alt: "Workshop" },
  { id: "2", title: "Entrepreneur Meetup", src: "/media/bonding.png", alt: "Meetup" },
  { id: "3", title: "Training Session", src: "/media/vision.png", alt: "Training" },
  { id: "4", title: "Campus Program", src: "/media/workforce.png", alt: "Campus" },
  { id: "5", title: "Incubation Support", src: "/media/workforce1.png", alt: "Incubation" },
  { id: "6", title: "Startup Mentoring", src: "/media/audience.png", alt: "Mentoring" },
  // add more as needed
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  // scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openLightbox = (index: number) => {
    setCurrent(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? sampleGallery.length - 1 : c - 1));
  };
  const next = () => {
    setCurrent((c) => (c === sampleGallery.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />

      {/* Hero / Header */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E5C9D] mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-700">
            Moments from our programs, workshops, incubation and community building initiatives.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleGallery.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition"
              onClick={() => openLightbox(idx)}
            >
              <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt || item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/media/placeholder.png";
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2">
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative max-w-3xl w-full">
            <button
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow hover:scale-105 transition"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>

            <div className="flex items-center justify-center">
              <button
                aria-label="Previous"
                onClick={prev}
                className="hidden md:flex items-center justify-center mr-4 bg-white/80 rounded-full p-3 shadow hover:bg-white transition"
              >
                ‹
              </button>

              <div className="w-full">
                <div className="relative">
                  <img
                    src={sampleGallery[current].src}
                    alt={sampleGallery[current].alt || sampleGallery[current].title}
                    className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/media/placeholder.png";
                    }}
                  />
                  <div className="mt-3 text-center">
                    <h2 className="text-xl font-semibold text-white">
                      {sampleGallery[current].title}
                    </h2>
                    <p className="text-sm text-gray-300">{`Image ${current + 1} of ${sampleGallery.length}`}</p>
                  </div>
                </div>
              </div>

              <button
                aria-label="Next"
                onClick={next}
                className="hidden md:flex items-center justify-center ml-4 bg-white/80 rounded-full p-3 shadow hover:bg-white transition"
              >
                ›
              </button>
            </div>

            {/* Mobile prev/next */}
            <div className="flex justify-between mt-6 md:hidden">
              <button
                onClick={prev}
                className="px-4 py-2 bg-white/90 rounded-full font-semibold shadow"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="px-4 py-2 bg-white/90 rounded-full font-semibold shadow"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer spacer */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">RESONANCE</h3>
              <p className="text-gray-300 mb-4">
                Entrepreneurship & Employability Solutions Pvt. Ltd.
              </p>
              <p className="text-gray-400 text-sm">
                Empowering businesses and individuals through innovative solutions and strategic guidance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="/gallery" className="hover:text-orange-400 transition-colors">Gallery</a></li>
                <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
                {/* <li><a href="#" className="hover:text-orange-400 transition-colors">Career</a></li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-orange-400" />
                  <span>apply.theresonance@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-orange-400" />
                  <span>+91 6366824350</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-orange-400" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Resonance Entrepreneurship & Employability Solutions Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
