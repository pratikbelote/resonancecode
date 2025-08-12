import { Users, Building, Lightbulb, Trophy, Heart, Globe, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResonanceLogo from "../components/ui/ResonanceLogo";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E5C9D] mb-2">About Us</h1>
          <p className="text-lg text-gray-700">
            Building India’s future by empowering entrepreneurs and skilled talent through trusted partnerships, innovation, and impact-driven programs.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2E5C9D]">Our Mission</h2>
          <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
            To establish a resilient ecosystem where entrepreneurs and the workforce are equipped with the skills, resources, and networks needed to drive sustainable economic growth.
          </p>

          <h2 className="text-3xl font-bold text-[#2E5C9D]">Our Vision</h2>
          <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
            To ignite an entrepreneurial and skilled movement across India that creates jobs, fosters innovation, and builds industry-aligned capability at scale.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="\media\focusArea.png"
                alt="Vision Illustration"
                className="w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/media/placeholder.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E5C9D]">Core Values</h2>
            <p className="text-gray-600 mt-2">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Championing creative solutions for real-world challenges." },
              { icon: Users, title: "Empowerment", desc: "Equipping individuals with skills and opportunity." },
              { icon: Building, title: "Collaboration", desc: "Bridging academia, industry and government." },
              { icon: Trophy, title: "Excellence", desc: "Delivering impact with quality and consistency." },
              { icon: Heart, title: "Integrity", desc: "Transparent, accountable relationships." },
              { icon: Globe, title: "Inclusivity", desc: "Creating access across regions and backgrounds." },
            ].map((v, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border border-border rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-3">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1f3d7a]">{v.title}</h3>
                </div>
                <p className="text-sm text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E5C9D]">Our Impact</h2>
            <p className="text-gray-600 mt-2">
              Numbers that reflect the scale and depth of our work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "25,000+", label: "Candidates Onboarded" },
              { value: "100+", label: "Establishments" },
              { value: "50+", label: "Active Partnerships" },
              { value: "75%", label: "Placement Conversion" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-extrabold text-[#2E5C9D] mb-2">{s.value}</div>
                <div className="text-sm font-medium text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      {/* <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E5C9D]">Leadership & Team</h2>
            <p className="text-gray-600 mt-2">
              The people powering the mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Anjali Sharma", role: "Founder & CEO", img: "/media/team1.jpg" },
              { name: "Ravi Patel", role: "Head of Programs", img: "/media/team2.jpg" },
              { name: "Neha Gupta", role: "Partnerships Lead", img: "/media/team3.jpg" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-orange-500 to-red-600">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/media/avatar-placeholder.png";
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1f3d7a]">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2E5C9D] mb-4">
            Join Us in Creating Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're an entrepreneur, partner, or aspiring talent — there's a place for you in the movement.
          </p>
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow hover:scale-105 transition">
              Partner With Us
            </button>
            <button className="px-8 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Spacer / Footer padding */}

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

export default About;
