import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function CoursePlayer() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/courses/${id}`)
      .then(res => setCourse(res.data));
  }, [id]);

  if(!course) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="mb-4">{course.description}</p>

        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        {course.videos.map((v,i) => (
          <video key={i} controls className="w-full mb-4">
            <source src={v} type="video/mp4"/>
          </video>
        ))}

        <h2 className="text-xl font-semibold mb-2">Documents</h2>
        {course.documents.map((d,i) => (
          <a key={i} href={d} target="_blank" className="text-blue-500 block mb-2">{d.split("/").pop()}</a>
        ))}
      </div>
    </div>
  );
}
