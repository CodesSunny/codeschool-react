import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Teachers from './pages/Teachers';
import Holidays from './pages/Holidays';
import TopStudents from './pages/TopStudents';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4 bg-gray-50">
          <Routes>
            <Route path="/" element={<h1>Welcome to Our School!</h1>} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/top-students" element={<TopStudents />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
