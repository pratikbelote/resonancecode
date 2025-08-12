import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "gallery", label: "Gallery", path: "/gallery" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>(() => {
    // derive initial from path
    const matched = navItems.find((n) =>
      n.path === "/" ? location.pathname === "/" : location.pathname.startsWith(n.path)
    );
    return matched ? matched.id : "home";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync active tab when location changes
  useEffect(() => {
    const matched = navItems.find((n) =>
      n.path === "/" ? location.pathname === "/" : location.pathname.startsWith(n.path)
    );
    setActiveItem(matched ? matched.id : "home");
  }, [location.pathname]);

  const handleItemClick = (itemId: string, path: string) => {
    setActiveItem(itemId);
    setIsMenuOpen(false);
    navigate(path);

    // If you also want to scroll to a same-page section with matching id:
    if (location.pathname === path) {
      const section = document.getElementById(itemId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-full px-2 py-2 shadow-lg flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center px-4">
            <div className="w-20 h-8 relative">
              <img className="w-16 h-full" src="/media/resonanceLogoNav.png" alt="Logo" />
            </div>
            <span className="ml-2 font-bold text-lg text-foreground">RESONANCE</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id, item.path)}
                className={`
                  relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out
                  ${
                    activeItem === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-background/90 backdrop-blur-md border border-border rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out hover:bg-accent"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-16 right-0 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl
            transition-all duration-500 ease-out origin-top-right
            ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <div className="p-2 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id, item.path)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ease-in-out
                  ${
                    activeItem === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                `}
                style={{
                  animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;














// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const handleItemClick = (itemId: string) => {
//     setActiveItem(itemId);
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
//         <div className="bg-background/90 backdrop-blur-md border border-border rounded-full px-2 py-2 shadow-lg flex items-center space-x-4">
//           {/* Logo */}
//           <div className="flex items-center px-4">
//             <div className="w-8 h-8 relative">
//               <svg viewBox="0 0 100 100" className="w-full h-full">
//                 <defs>
//                   <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#f97316"/>
//                     <stop offset="50%" stopColor="#ea580c"/>
//                     <stop offset="100%" stopColor="#dc2626"/>
//                   </linearGradient>
//                 </defs>
//                 <path d="M20 15 L50 15 L50 35 L35 50 L20 35 Z" fill="url(#navLogoGradient)"/>
//                 <path d="M50 15 L80 15 L80 35 L65 50 L50 35 Z" fill="url(#navLogoGradient)"/>
//                 <path d="M50 50 L65 65 L50 80 L35 65 Z" fill="url(#navLogoGradient)"/>
//               </svg>
//             </div>
//             <span className="ml-2 font-bold text-lg text-foreground">RESONANCE</span>
//           </div>
          
//           {/* Navigation Items */}
//           <div className="flex items-center space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleItemClick(item.id)}
//                 className={`
//                   relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out
//                   ${
//                     activeItem === item.id
//                       ? 'bg-primary text-primary-foreground shadow-md'
//                       : 'text-foreground hover:bg-accent hover:text-accent-foreground'
//                   }
//                 `}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <nav className="md:hidden fixed top-4 right-4 z-50">
//         {/* Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="bg-background/90 backdrop-blur-md border border-border rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out hover:bg-accent"
//         >
//           <div className="relative w-6 h-6">
//             <Menu
//               className={`absolute inset-0 transition-all duration-300 ${
//                 isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
//               }`}
//             />
//             <X
//               className={`absolute inset-0 transition-all duration-300 ${
//                 isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
//               }`}
//             />
//           </div>
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`
//             absolute top-16 right-0 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl
//             transition-all duration-500 ease-out origin-top-right
//             ${
//               isMenuOpen
//                 ? 'opacity-100 scale-100 translate-y-0'
//                 : 'opacity-0 scale-75 -translate-y-4 pointer-events-none'
//             }
//           `}
//         >
//           <div className="p-2 space-y-1">
//             {navItems.map((item, index) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleItemClick(item.id)}
//                 className={`
//                   w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ease-in-out
//                   ${
//                     activeItem === item.id
//                       ? 'bg-primary text-primary-foreground shadow-md'
//                       : 'text-foreground hover:bg-accent hover:text-accent-foreground'
//                   }
//                 `}
//                 style={{
//                   animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
//                 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Backdrop */}
//       {isMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;