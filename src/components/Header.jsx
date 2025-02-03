import { Link } from 'react-router-dom';

const navItems = [
  {
    label:'Home',
    path : '/'
  },
  {
    label:"Holidays' Calendar",
    path:'/holidays'
  },
  {
    label:"Top Students",
    path:'/top-students'
  },
  {
    label:'Contact Us',
    path:'/Contact-us'
  }
 
]

function Header() {
  return (
    <>
      <header className="bg-gray-400 text-white py-4 px-6 shadow-lg">
        <div className="min-w-screen flex justify-between items-center">
          {/* Left: Logo and School Name */}
          <div className="flex items-center basis-1/5 gap-2">
            <div className="w-16 h-16 border-4 border-gray-500 rounded-full overflow-hidden">
              <img src="/src/assets/images/logo_school.png" alt="School Logo"  className='w-[100%] h-[100%] object-cover'/>
            </div>
            <div className=' w-36'>
              <h1 className="text-xl font-bold  text-center "> Web Hut</h1>
              <p className="text-md font-semibold text-center text-purple-700"> Coding made easy </p>
            </div>
          </div>

          {/* Right: Navigation Links */}
          <nav className="space-x-4 font-semibold text-xl grow  ">
            <ul className='flex justify-around'>
              <li>
                <Link to="/teachers" className="hover:text-gray-300">Teachers</Link>
              </li>
              <li>
                 <Link to="/holidays" className="hover:text-gray-300">Holidays' Calendar</Link>
              </li>
              <li>
                <Link to="/top-students" className="hover:text-gray-300">Top Students</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
