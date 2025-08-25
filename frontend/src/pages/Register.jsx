import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password, role);
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border p-2 rounded"/>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 rounded"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 rounded"/>
          <select value={role} onChange={e=>setRole(e.target.value)} className="border p-2 rounded">
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}
