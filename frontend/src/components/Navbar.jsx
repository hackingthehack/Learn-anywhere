// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between">
//       <div>
//         <Link to="/" className="font-bold text-lg">LearnAnywhere</Link>
//       </div>
//       <div className="space-x-4">
//         {user ? (
//           <>
//             <Link to="/dashboard">{user.role === "tutor" ? "Tutor Dashboard" : "Dashboard"}</Link>
//             <button onClick={logout} className="bg-red-600 px-2 py-1 rounded">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }
// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-blue-600">TutorHub</h1>
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#tutors" className="hover:text-blue-600">Tutors</a>
          <a href="#login" className="hover:text-blue-600">Login</a>
        </div>
        <button 
          className="md:hidden text-blue-600"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md p-4">
          <a href="#home" className="block py-2">Home</a>
          <a href="#tutors" className="block py-2">Tutors</a>
          <a href="#login" className="block py-2">Login</a>
        </div>
      )}
    </nav>
  );
}
