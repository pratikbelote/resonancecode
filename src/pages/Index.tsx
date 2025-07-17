
import { Mail, Phone, MapPin, Target, Eye, Users, Briefcase, GraduationCap, Building, Lightbulb, TrendingUp, FileText, Award, Code, Rocket, HandHeart, Factory, Handshake } from "lucide-react";
import { Button } from "../components/ui/button";
import ResonanceLogo from "../components/ui/ResonanceLogo";
import ResonanceLogoNav from "../components/ui/ResonanceLogoNav";

const Index = () => {
  return (
    <div className="min-h-screen">
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
          <div className="mb-8">
            <div className="relative">
              {/* Main logo shape */}
              {/* <div className="w-32 h-32 mx-auto mb-6 relative"> */}
                <img src="./media/resonanceLogo.png" alt="Logo" />
              {/* </div> */}
            </div>
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
      <section className="h-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden pb-5">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-10"></div>
        </div>

        <div className="max-w-full mx-auto gap-12 items-center relative z-10 mt-5">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* <img src="./media/resonancelogo.png" style={{width: "380px"}} className="mx-auto"/> */}
              <ResonanceLogo />
              <h1 className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[6rem] font-bold text-[#2E5C9D] leading-tight text-center">
                Empowering India’s Skilled <br />Workforce & Entrepreneurs
              </h1>
              
              <img src="./media/workforce1.png" className="mx-auto"/>
              
              <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-[#2E5C9D] font-bold leading-relaxed text-center">
                Resonance Solutions – Bridging Skills, Employability & Sustainability
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Our Company Section */}
      <ResonanceLogoNav />
      <section className="h-auto flex items-center justify-center relative overflow-hidden pb-3">
        
        <div className="max-w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Image/Visual */}
          <img src="./media/audience.png" className="lg:w-full" />

          {/* Text Content */}
          <div className="space-y-8 w">
            <div className="space-y-6 ps-5 md:ps-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E5C9D] leading-tight">
                Welcome to
                <br />
                <span className="text-black font-medium">Our Company</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-black font-bold leading-relaxed w-2/3">
                A dynamic social enterprise advancing entrepreneurship and employability through skill development, strategic partnerships and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E5C9D] mb-4">Our Edge:</h3>
                <div className="space-y-3 text-xl md:text-2xl text-black font-bold">
                  <p>
                    Govt-aligned programs (NATS, NAPS, WISTA, AEDP)
                  </p>
                  <p>
                    Strong Academia - Industry - Government linkages
                  </p>
                  <p>
                    Onboarded 25,000 Candidates in 100+ Establishments (industries and organizations)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-12">
            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Vision</h2>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To ignite a vibrant entrepreneurial culture and equip the youth with employable skills to create a robust industrial workforce for the nation and beyond.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-orange-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Mission</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed">
                  To establish a strong framework that empowers entrepreneurs to overcome challenges and develop scalable, sustainable businesses.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  To champion innovation as a key driver of India's economic advancement.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  To foster job creation, financial inclusivity and GDP growth through the success of entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                {/* Vision illustration */}
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center aspect-video">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Mission illustration */}
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center aspect-video">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section className="h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Our Focus
                <br />
                <span className="text-blue-700">Area's</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
            </div>

            <div className="space-y-6">
              {[
                { icon: GraduationCap, text: "Employability & Skills Training" },
                { icon: Users, text: "Apprenticeship & Staffing" },
                { icon: Building, text: "Industry Academia Government Collaboration" },
                { icon: Lightbulb, text: "Entrepreneurship Development" },
                { icon: TrendingUp, text: "Startup Incubation" },
                { icon: FileText, text: "Policy Implementation" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-base md:text-lg text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Areas
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                {/* Top row */}
                <div className="flex justify-between">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Middle row */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Building className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Bottom row */}
                <div className="flex justify-between">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Center connecting element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Core <span className="text-orange-600">Programs</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Top Row */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">National Apprenticeship Training Scheme</h3>
                <p className="text-gray-600">(NATS)</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">National Apprenticeship Promotion Scheme</h3>
                <p className="text-gray-600">(NAPS)</p>
              </div>

              {/* Bottom Row */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Apprenticeship Embedded Degree Program</h3>
                <p className="text-gray-600">(AEDP)</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Work Integrated Skills Training & Apprenticeships</h3>
                <p className="text-gray-600">(WISTA)</p>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Key <span className="text-blue-700">Services</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* Top Row */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Skilled Workforce Sourcing & Onboarding</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Customize Skill Development Program</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Campus Entrepreneurship Program</h3>
              </div>

              {/* Bottom Row */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Startup Mentoring & Fundraising</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Incubation Support & Handholding</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mx-auto mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">CSR Project Implementation</h3>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Industry <span className="text-blue-700">Partners</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto"></div>
            </div>

            <div className="space-y-8 mt-12">
              {/* Partner Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {/* Row 1 */}
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-20">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-20">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-20">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* CSR Partners Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">CSR AND KNOWLEDGE PARTNERS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-20">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Resonance Section */}
      <section className="h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Why Choose <span className="text-blue-700">Resonance</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
              
              <p className="text-lg md:text-xl text-blue-700 font-medium leading-relaxed">
                Dynamic team of young professionals connected with the grassroot level in all cross sections of the society. Created impact in socio economic upliftment through employable skills training, job facilitation & wealth creating entrepreneurship trainings.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Influential Trainers Certified by:</h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-base leading-relaxed">1. Ministry of Entrepreneurship & Skill Development,</p>
                <p className="text-base leading-relaxed">2. Center for Innovation & AICTE, Ministry of Education, GOI</p>
                <p className="text-base leading-relaxed">3. Department of Science & Technology, GOI</p>
                <p className="text-base leading-relaxed">4. National Institute of Entrepreneurship & Small Business Development, MSME</p>
                <p className="text-base leading-relaxed">5. Entrepreneurship Development Institute of India, EDII</p>
                <p className="text-base leading-relaxed">6. International Finance Corporation, World Bank Group</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & MD Section */}
      <section className="h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Vivek Somnath Sinare - Founder & MD"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Founder & <span className="text-orange-600">MD</span>
              </h2>
              
              <h3 className="text-3xl font-bold text-blue-800">Vivek Somnath Sinare</h3>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A seasoned socio-economic development leader with 20+ years of expertise in entrepreneurship training and large-scale skill development across India. A Gold Medalist and certified trainer by the IFC, World Bank, and NIESBUD, Vivek has empowered over 25,000 youth through industry-integrated programs. He has held national leadership roles in premier skilling institutions and is a passionate advocate for "Viksit Bharat," delivering impactful sessions at top universities nationwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                <Eye className="w-5 h-5 inline mr-2" />
                Visionary
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                <Users className="w-5 h-5 inline mr-2" />
                Mentor
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                <Award className="w-5 h-5 inline mr-2" />
                Awarded
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                <FileText className="w-5 h-5 inline mr-2" />
                Author
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Best Advisory Section */}
      <section className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Meet Our Best <span className="text-blue-700">Advisory</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {/* First Row */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop&crop=face" 
                  alt="Dr. Milind Kamble"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">DR. MILIND KAMBLE</h3>
                <p className="text-sm text-gray-600">Leading entrepreneur and visionary strategist pioneering transformative entrepreneurial landscape through inclusive growth and MSCI leadership.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop&crop=face" 
                  alt="Atul Kulkarni"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">ATUL KULKARNI</h3>
                <p className="text-sm text-gray-600">Techno-managerial expert with 35+ years in rural credit, banking and policy, specializing in supply chain and global markets.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face" 
                  alt="Vaibhav Dange"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">VAIBHAV DANGE</h3>
                <p className="text-sm text-gray-600">Change agent with expertise in government CSR, sustainable development, and strategic planning.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&crop=face" 
                  alt="Rita Sen Gupta"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">RITA SEN GUPTA</h3>
                <p className="text-sm text-gray-600">Former HR-CEO renowned expert in skill development and experience training 1500 professionals in entrepreneurship.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {/* Second Row */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop&crop=face" 
                  alt="Sumitra Goenka"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">SUMITRA GOENKA</h3>
                <p className="text-sm text-gray-600">First Generation Entrepreneur, Director of Rachana Goenka Industries Ltd & CEO Rachana Goenka & Co venture consultant managing Storage & Logistics, Pvt Ltd, UiImg Pvt Ltd and Operational Life Insurance & investments. Growth architect & NSE listed Company.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&h=150&fit=crop&crop=face" 
                  alt="Rajendra Bagade"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">RAJENDRA BAGADE</h3>
                <p className="text-sm text-gray-600">Senior Chartered Accountant and Director at SDAC Associates, with expertise in multinational corporations, banks, PSUs, FPO, FPCs and major industries.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=150&h=150&fit=crop&crop=face" 
                  alt="Saara A Tomar"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">SAARA A TOMAR</h3>
                <p className="text-sm text-gray-600">Startup mentor and edtech founder with 20+ years in sales, marketing, and strategic planning.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=150&h=150&fit=crop&crop=face" 
                  alt="Narendra Godse"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-900 mb-2">NARENDRA GODSE</h3>
                <p className="text-sm text-gray-600">Startup mentor and public sector advisor with 20+ years in sales, marketing, and strategic planning. Kolkata incubation edtech venture.</p>
              </div>
            </div>
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
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Career</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-orange-400" />
                  <span>info@resonance.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-orange-400" />
                  <span>+91 12345 67890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-orange-400" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Resonance Entrepreneurship & Employability Solutions Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;