
import { Mail, Phone, MapPin, Target, Eye, Users, Briefcase, GraduationCap, Building, Lightbulb, TrendingUp, FileText, Award, Code, Rocket, HandHeart, Factory, Handshake } from "lucide-react";
import { Button } from "../components/ui/button";
import ResonanceLogo from "../components/ui/ResonanceLogo";
import ResonanceLogoNav from "../components/ui/ResonanceLogoNav";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Background geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-25"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-20"></div>
          
          {/* Geometric lines and shapes */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M0,300 Q250,200 500,300 T1000,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none"/>
            <path d="M0,700 Q250,600 500,700 T1000,700" stroke="url(#lineGradient)" strokeWidth="2" fill="none"/>
            <circle cx="100" cy="200" r="3" fill="#f97316" opacity="0.3"/>
            <circle cx="900" cy="800" r="2" fill="#dc2626" opacity="0.4"/>
            <circle cx="200" cy="600" r="2" fill="#ea580c" opacity="0.3"/>
          </svg>
        </div>

<div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-16 text-center">
  {/* Logo */}
  <div className="mb-1">
    <div className="relative">
      <div className="w-56 sm:w-60 md:w-72 lg:w-[30rem] h-auto relative">
        <img
          src="/images/page1/logo.jpg"
          alt="Logo"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>

  {/* Company Name */}
  <div>
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2E5C9D] leading-tight">
      Entreprenuership & Employability Solutions Pvt Ltd.
    </h1>
  </div>
</div>


        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 opacity-30">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden py-10">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-10"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto w-full relative z-10 space-y-8 text-center">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E5C9D] leading-tight">
            Empowering India’s Skilled <br />Workforce & Entrepreneurs
          </h1>

          {/* Image */}
          <img
            src="./media/workforce1.png"
            alt="Workforce"
            className="w-full max-w-md mx-auto object-contain"
          />

          {/* Subtitle */}
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#2E5C9D] font-bold leading-relaxed">
            Resonance Solutions – Bridging Skills, Employability & Sustainability
          </h2>
        </div>
      </section>

      {/* Welcome to Our Company Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden p-6 bg-white">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          {/* Image */}
          <div className="w-full flex justify-center bg-white border border-white p-4 rounded-xl">
            <img
              src="./media/audience.png"
              alt="Audience"
              className="w-full max-w-sm md:max-w-full m-0 object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E5C9D]">
                Welcome to
                <br />
                <span className="text-black font-medium">Our Company</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-black font-bold leading-relaxed">
                A dynamic social enterprise advancing entrepreneurship and employability through skill development, strategic partnerships and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-[#2E5C9D] mb-4">Our Edge:</h3>
              <div className="space-y-3 text-base sm:text-lg md:text-xl text-black font-bold">
                <p>Govt-aligned programs (NATS, NAPS, WISTA, AEDP)</p>
                <p>Strong Academia - Industry - Government linkages</p>
                <p>Onboarded 25,000 Candidates in 100+ Establishments</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="h-auto lg:min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center relative overflow-hidden mt-5 py-10 lg:py-15 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl w-full space-y-20 md:space-y-32">
          
          {/* Vision Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="./media/vision.png"
                alt="Vision"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E5C9D]">Vision</h2>
              <p className="text-base sm:text-lg md:text-xl text-black font-bold leading-relaxed">
                To ignite a vibrant entrepreneurial culture and equip the youth with employable
                skills to create a robust industrial workforce for the nation and beyond.
              </p>
            </div>
          </div>

          {/* Mission Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E5C9D]">Mission</h2>
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-black font-bold leading-relaxed">
                <p>
                  To establish a strong framework that empowers entrepreneurs to overcome challenges and develop scalable, sustainable businesses.
                </p>
                <p>
                  To champion innovation as a key driver of India's economic advancement.
                </p>
                <p>
                  To foster job creation, financial inclusivity and GDP growth through the success of entrepreneurial ventures.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-start order-1 md:order-2">
              <img
                src="./media/bonding.png"
                alt="Bonding"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section className="h-auto flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

          {/* Text Content */}
          <div className="space-y-8">
            
            {/* Heading */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2E5C9D] leading-tight">
                Our Focus <span className="font-normal">Area's</span>
              </h2>
            </div>

            {/* Focus Items */}
            <div className="space-y-4 sm:space-y-5">
              {[
                { icon: GraduationCap, text: "Employability & Skills Training" },
                { icon: Users, text: "Apprenticeship & Staffing" },
                { icon: Building, text: "Industry Academia Government Collaboration" },
                { icon: Lightbulb, text: "Entrepreneurship Development" },
                { icon: TrendingUp, text: "Startup Incubation" },
                { icon: FileText, text: "Policy Implementation" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-black text-base sm:text-lg md:text-2xl font-semibold sm:font-bold">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./media/focusArea.png"
              alt="Focus Area"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="h-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10 lg:py-20">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-16 mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#2E5C9D] text-center">
            Core <span className="font-normal">Programs</span>
          </h1>
        </div>
        <div className="max-w-7xl w-full text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">National Apprenticeship Training Scheme</h3>
              <p className="text-gray-600">(NATS)</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">National Apprenticeship Promotion Scheme</h3>
              <p className="text-gray-600">(NAPS)</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Apprenticeship Embedded Degree Program</h3>
              <p className="text-gray-600">(AEDP)</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Work Integrated Skills Training & Apprenticeships</h3>
              <p className="text-gray-600">(WISTA)</p>
            </div>

          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="h-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <div className="max-w-7xl w-full text-center relative z-10">

          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Key <span className="text-blue-700">Services</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {/* Service Cards */}
            {[
              { icon: Users, title: "Skilled Workforce Sourcing & Onboarding", color: "from-blue-500 to-blue-600" },
              { icon: Code, title: "Customize Skill Development Program", color: "from-orange-500 to-orange-600" },
              { icon: GraduationCap, title: "Campus Entrepreneurship Program", color: "from-green-500 to-green-600" },
              { icon: Rocket, title: "Startup Mentoring & Fundraising", color: "from-purple-500 to-purple-600" },
              { icon: HandHeart, title: "Incubation Support & Handholding", color: "from-red-500 to-red-600" },
              { icon: FileText, title: "CSR Project Implementation", color: "from-indigo-500 to-indigo-600" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl mx-auto mb-4`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold sm:font-bold text-blue-900">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

          {/* CTA Button */}
          <div className="pt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Services
            </Button>
          </div>

        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="h-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <div className="max-w-7xl w-full text-center relative z-10">
          
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Industry <span className="text-blue-700">Partners</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          </div>

          {/* Partner Logos */}
          <div className="space-y-10 my-10">
            {/* Generate all logos in rows */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
              {[...Array(22)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg flex items-center justify-center h-20 transition-shadow"
                >
                  <img
                    src={`/images/clients/${i + 1}.svg`}
                    alt={`Client ${i + 1}`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="pt-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Partners
            </Button>
          </div> */}
        </div>
      </section>

      {/* Government Partners Section */}
      <section className="h-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <div className="max-w-7xl w-full text-center relative z-10">
          
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Government <span className="text-blue-700">Partners</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          </div>

          {/* Partner Logos */}
          <div className="my-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg flex items-center justify-center h-20 transition-shadow"
                >
                  <img
                    src={`/images/govlogo/${i + 1}.svg`}
                    alt={`Government Partner ${i + 1}`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="pt-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Government Partners
            </Button>
          </div> */}
        </div>
      </section>

      {/* Why Choose Resonance Section */}
      <section className="h-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10 lg:py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Why Choose <span className="text-blue-700">Resonance</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded" />
              <p className="text-base sm:text-lg md:text-xl text-blue-700 font-medium leading-relaxed">
                Dynamic team of young professionals connected with the grassroot level in all cross sections of the society. Created impact in socio-economic upliftment through employable skills training, job facilitation & wealth-creating entrepreneurship trainings.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800">Influential Trainers Certified by:</h3>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Ministry of Entrepreneurship & Skill Development</li>
                <li>Center for Innovation & AICTE, Ministry of Education, GOI</li>
                <li>Department of Science & Technology, GOI</li>
                <li>National Institute of Entrepreneurship & Small Business Development, MSME</li>
                <li>Entrepreneurship Development Institute of India, EDII</li>
                <li>International Finance Corporation, World Bank Group</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl"
              />
              {/* Decorative Circles */}
              <div className="absolute top-4 left-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & MD Section */}
      <section className="h-auto bg-gradient-to-br from-orange-50 via-white to-orange-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <img 
                src="\images\founder\found23.png" 
                alt="Vivek Somnath Sinare - Founder & MD"
                className="w-full h-72 sm:h-80 md:h-92 object-cover rounded-xl"
              />
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20" />
              <div className="absolute bottom-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Founder & <span className="text-orange-600">MD</span>
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-blue-800">Vivek Somnath Sinare</h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded" />

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                A seasoned socio-economic development leader with 20+ years of expertise in entrepreneurship training and large-scale skill development across India. A Gold Medalist and certified trainer by the IFC, World Bank, and NIESBUD, Vivek has empowered over 25,000 youth through industry-integrated programs. He has held national leadership roles in premier skilling institutions and is a passionate advocate for "Viksit Bharat," delivering impactful sessions at top universities nationwide.
              </p>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm text-center font-semibold flex items-center justify-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Visionary</span>
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm text-center font-semibold flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Mentor</span>
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm text-center font-semibold flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Awarded</span>
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm text-center font-semibold flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Author</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Best Advisory Section */}
      <section className="h-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-20">
        <div className="max-w-6xl w-full text-center relative z-10 space-y-12">
          {/* Section Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Meet Our Best <span className="text-blue-700">Advisory</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto"></div>
          </div>

          {/* Advisory Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'DR. MILIND KAMBLE',
                img: '/images/advisers/7.svg',
                desc: 'Leading entrepreneur and visionary strategist pioneering transformative entrepreneurial landscape through inclusive growth and MSCI leadership.'
              },
              {
                name: 'ATUL KULKARNI',
                img: '/images/advisers/3.svg',
                desc: 'Techno-managerial expert with 35+ years in rural credit, banking and policy, specializing in supply chain and global markets.'
              },
              {
                name: 'VAIBHAV DANGE',
                img: '/images/advisers/1.svg',
                desc: 'Change agent with expertise in government CSR, sustainable development, and strategic planning.'
              },
              {
                name: 'RITA SEN GUPTA',
                img: '/images/advisers/2.svg',
                desc: 'Former HR-CEO renowned expert in skill development and experience training 1500 professionals in entrepreneurship.'
              },
              {
                name: 'SUMITRA GOENKA',
                img: '/images/advisers/6.svg',
                desc: 'Entrepreneur, Director & CEO managing Storage & Logistics, UiImg Pvt Ltd, and more. Growth architect & NSE listed company.'
              },
              {
                name: 'RAJENDRA BAGADE',
                img: '/images/advisers/4.svg',
                desc: 'Senior Chartered Accountant with expertise in MNCs, PSUs, FPOs, and FPCs across diverse industries.'
              },
              {
                name: 'SAARA A TOMAR',
                img: '/images/advisers/8.svg',
                desc: 'Startup mentor and edtech founder with 20+ years in sales, marketing, and strategic planning.'
              },
              {
                name: 'NARENDRA GODSE',
                img: '/images/advisers/5.svg',
                desc: 'Startup mentor and public sector advisor with 20+ years in sales, marketing, and strategy.'
              }
            ].map((advisor, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left">
                <img 
                  src={advisor.img}
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">{advisor.name}</h3>
                <p className="text-sm text-gray-600 text-justify">{advisor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Index;