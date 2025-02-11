import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import CreateEditBlog from "./pages/CreateEditBlog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogBrowse from "./pages/BlogBrowse"; 

import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog-browse" element={<BlogBrowse />} />
          <Route path="/create" element={<CreateEditBlog />} />
          <Route path="/create/:id" element={<CreateEditBlog />} />
          <Route path="/edit/:id" element={<CreateEditBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

