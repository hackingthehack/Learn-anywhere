import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if(user?.role === "tutor") {
      axios.get("http://localhost:4000/api/courses")
        .then(res => setCourses(res.data.filter(c=>c.tutorId._id === user._id)));
    } else {
      axios.get(`http://localhost:4000/api/enrollments/${user._id}`)
        .then(res => setCourses(res.data.map(e=>e.courseId)));
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{user?.role === "tutor" ? "Your Courses" : "Enrolled Courses"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
