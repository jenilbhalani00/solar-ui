import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <header
      className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex">
        <ul className="lg:flex lg:gap-[100px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
          {["/", "/about", "/products", "/service", "/blog", "/contacts"].map(
            (path, index) => (
              <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* login and registration */}

        <ul className="lg:flex lg:gap-[100px] lg:mt-[25px] text-[20px] lg:ml-[120px] md:hidden sm:hidden">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                isActive ? "text-white" : "hover:text-white"
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                isActive ? "text-white" : "hover:text-white"
              }`
            }
          >
            Register
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// these code update login page

// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [lastScrollPos, setLastScrollPos] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoginForm, setIsLoginForm] = useState(true); // login and register

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > lastScrollPos) {
//         setIsScrollingDown(true);
//       } else {
//         setIsScrollingDown(false);
//       }
//       setLastScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollPos]);

//   const openModal = (isLogin) => {
//     setIsLoginForm(isLogin);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   // Close modal when clicking outside of it
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <div className="relative z-50 lg:block md:hidden sm:hidden">
//       <header
//         className={`sticky top-0 z-50 shadow-lg lg:bg-zinc-900 transition-transform duration-300 ${
//           isScrollingDown ? "-translate-y-full" : "translate-y-0"
//         }`}
//       >
//         <nav>
//           <div className="flex">
//             <ul className="lg:flex lg:gap-[90px] lg:ml-[120px] md:hidden sm:hidden">
//               {[
//                 "/",
//                 "/about",
//                 "/products",
//                 "/service",
//                 "/blog",
//                 "/contacts",
//               ].map((path, index) => (
//                 <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
//                   <NavLink
//                     to={path}
//                     className={({ isActive }) =>
//                       `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                         isActive ? "text-white" : "hover:text-white"
//                       }`
//                     }
//                   >
//                     {path.slice(1).toUpperCase() || "HOME"}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//             <div className="lg:ml-auto lg:mr-[120px] lg:mt-[12px]">
//               <button
//                 onClick={() => openModal(true)} // Open Login Modal
//                 className="p-2 pl-6 pr-6 font-bold text-gray-400 transition-colors border border-transparent rounded-md hover:text-white"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => openModal(false)} // Open Register Modal
//                 className="p-2 pl-5 pr-5 ml-10 font-bold text-gray-400 transition-colors border border-transparent rounded-md hover:text-white"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
//           onClick={handleOverlayClick}
//         >
//           <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//             <h2 className="mb-4 text-2xl font-bold">
//               {isLoginForm ? "Login" : "Register"}
//             </h2>
//             <form>
//               {!isLoginForm && ( // Show Register form
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   />
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   />

//                   <label className="block text-gray-700">Password</label>
//                   <input
//                     type="password"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   />

//                   <button
//                     type="submit"
//                     className="w-full py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700"
//                   >
//                     Register
//                   </button>
//                 </div>
//               )}

//               {isLoginForm && (
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   />
//                   <label className="block text-gray-700">Password</label>
//                   <input
//                     type="password"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700"
//                   >
//                     Login
//                   </button>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="w-full mt-4 text-gray-500 hover:text-gray-700"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
