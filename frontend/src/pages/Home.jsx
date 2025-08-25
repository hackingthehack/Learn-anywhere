// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import Navbar from "../components/Navbar";

// // export default function Home() {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:4000/api/courses").then(res => setCourses(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="p-6">
// //         <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {courses.map(course => (
// //             <div key={course._id} className="border p-4 rounded shadow hover:shadow-lg transition">
// //               <h2 className="text-xl font-semibold">{course.title}</h2>
// //               <p className="text-gray-600">{course.description}</p>
// //               <p className="font-bold mt-2">${course.price}</p>
// //               <Link className="text-blue-500 mt-2 block" to={`/course/${course._id}`}>View Course</Link>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // src/pages/Home.jsx
// import { BookOpen, Users, Clock, Laptop } from "lucide-react";
// import tutoringImg from "../assets/Video tutorial-amico.svg";

// export default function Home() {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-center px-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//           Learn Smarter with <span className="text-blue-600">TutorHub</span>
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
//           Find the perfect tutor for any subject and start learning online, 
//           anytime, anywhere.
//         </p>
//         <a
//           href="#features"
//           className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
//         >
//           Get Started
//         </a>
        

// <img
//   src={tutoringImg}
//   alt="Tutoring Illustration"
//   className="mt-10 w-80 md:w-[500px]"
// />


//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-white">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
//           Why Choose <span className="text-blue-600">TutorHub?</span>
//         </h2>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
//           <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//             <Users className="text-blue-600 w-12 h-12 mb-4" />
//             <h3 className="text-xl font-semibold">Expert Tutors</h3>
//             <p className="text-gray-600 mt-2">
//               Learn from experienced tutors across all subjects.
//             </p>
//           </div>
//           <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//             <BookOpen className="text-blue-600 w-12 h-12 mb-4" />
//             <h3 className="text-xl font-semibold">Personalized Learning</h3>
//             <p className="text-gray-600 mt-2">
//               Sessions tailored to your goals and study pace.
//             </p>
//           </div>
//           <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//             <Clock className="text-blue-600 w-12 h-12 mb-4" />
//             <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
//             <p className="text-gray-600 mt-2">
//               Book lessons at times that fit your lifestyle.
//             </p>
//           </div>
//           <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//             <Laptop className="text-blue-600 w-12 h-12 mb-4" />
//             <h3 className="text-xl font-semibold">Learn Anywhere</h3>
//             <p className="text-gray-600 mt-2">
//               Join lessons from your laptop, tablet, or phone.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call To Action */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Start Learning Today!
//         </h2>
//         <p className="mt-4 text-lg">
//           Join thousands of students leveling up their skills with TutorHub.
//         </p>
//         <a
//           href="#"
//           className="mt-6 inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
//         >
//           Sign Up Now
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-8 text-center">
//         <p>&copy; {new Date().getFullYear()} TutorHub. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
// src/pages/Dashboard.jsx
import { Video, FileText, User, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600">TutorHub</h2>
        <nav className="mt-8 flex flex-col gap-4">
          <a href="#classes" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Video className="w-5 h-5" /> Video Classes
          </a>
          <a href="#videos" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Video className="w-5 h-5" /> Video Library
          </a>
          <a href="#docs" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FileText className="w-5 h-5" /> Documents
          </a>
          <a href="#profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <User className="w-5 h-5" /> Profile
          </a>
          <a href="#logout" className="flex items-center gap-2 text-red-600 hover:text-red-700 mt-8">
            <LogOut className="w-5 h-5" /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Student!</h1>

        {/* Video Classes Section */}
        <section id="classes" className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Live Class</h2>
          <div className="bg-white rounded-2xl shadow p-6">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Class"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Video Library */}
        <section id="videos" className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Video Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Math Basics", "Physics Intro", "English Grammar"].map((title, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <img src={`https://via.placeholder.com/300x180?text=${title}`} alt={title} className="rounded-lg" />
                <h3 className="mt-2 font-semibold text-gray-800">{title}</h3>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Watch
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section id="docs" className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <ul className="bg-white rounded-xl shadow divide-y">
            {["Algebra Notes.pdf", "Physics Formulas.docx", "English Essay.doc"].map((doc, i) => (
              <li key={i} className="flex justify-between items-center p-4">
                <span>{doc}</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Download
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
