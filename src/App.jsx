import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Details from "./pages/Details";
import taskData from "./assets/tasks.json";
import { useState } from "react";
import "./App.css";
import "./index.css";
import Cover from "./pages/Cover";

function App() {
  const [tasks, setTasks] = useState(taskData);
  return (
    <Router>
      <Cover />
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/details/:taskId"
              element={<Details tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
