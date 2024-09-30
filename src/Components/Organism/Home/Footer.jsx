import { NavLink } from "react-router-dom"
import logo from "../../../images/Logo/library-book-reading-abstract-icon-or-emblem-vector.jpg"
function Footer() {
  return (<footer className="bg-gray-800 text-white text-white  shadow-2xl mt-8 py-8">
  <div className="w-full max-w-screen-xl mx-auto px-6 md:py-10">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <a href="#" className="flex items-center mb-6 md:mb-0 space-x-4">
        <img src={logo} className="h-12" alt="Library Logo" />
        <span className="self-center text-3xl font-bold text-white">Book Library</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-lg font-medium space-x-8">
        <li>
          <a href="#" className="hover:underline text-white">Home</a>
        </li>
        <li>
          <a href="#" className="hover:underline text-white">About Us</a>
        </li>
        <li>
          <a href="#" className="hover:underline text-white">Browse Books</a>
        </li>
        <li>
          <a href="#" className="hover:underline text-white">Contact</a>
        </li>
      </ul>
    </div>
    <hr className="my-8 border-gray-400" />
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex space-x-6 mb-4 sm:mb-0">
        <NavLink to="" className="text-gray-200 hover:text-white">
          <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.68 0H1.32C.593 0 0 .593 0 1.32v21.36C0 23.407.593 24 1.32 24H12.82v-9.32h-3.12v-3.64h3.12V8.135c0-3.1 1.895-4.788 4.666-4.788 1.326 0 2.465.099 2.796.143v3.241l-1.919.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.586l-.467 3.64H15.57V24h7.11c.727 0 1.32-.593 1.32-1.32V1.32C24 .593 23.407 0 22.68 0z" /></svg>
          <span className="sr-only">Facebook</span>
        </NavLink>
        <NavLink to="" className="text-gray-200 hover:text-white">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.933 4.933 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.935 4.935 0 0 0 1.524 6.573 4.906 4.906 0 0 1-2.229-.616v.061a4.928 4.928 0 0 0 3.95 4.827 4.936 4.936 0 0 1-2.224.084 4.931 4.931 0 0 0 4.604 3.417 9.874 9.874 0 0 1-6.115 2.108c-.398 0-.79-.023-1.17-.068a13.954 13.954 0 0 0 7.557 2.213c9.054 0 14.01-7.505 14.01-14.01 0-.213 0-.425-.015-.637A9.935 9.935 0 0 0 24 4.59a9.851 9.851 0 0 1-2.046.561z" /></svg>
          <span className="sr-only">Twitter</span>
        </NavLink>
        <NavLink to="" className="text-gray-200 hover:text-white">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c-5.488 0-9.937 4.448-9.937 9.936 0 4.385 3.043 8.065 7.175 9.333.525.095.716-.228.716-.508v-1.772c-2.918.636-3.533-1.225-3.533-1.225-.477-1.21-1.165-1.533-1.165-1.533-.953-.652.071-.638.071-.638 1.053.073 1.607 1.083 1.607 1.083.934 1.6 2.449 1.137 3.046.87.094-.678.366-1.138.666-1.4-2.33-.265-4.788-1.165-4.788-5.197 0-1.147.409-2.086 1.08-2.824-.108-.265-.47-1.332.102-2.777 0 0 .88-.281 2.88 1.07.835-.232 1.732-.349 2.625-.354.892.005 1.789.122 2.625.354 2-1.351 2.88-1.07 2.88-1.07.572 1.445.211 2.512.103 2.777.672.738 1.08 1.677 1.08 2.824 0 4.045-2.461 4.926-4.805 5.184.376.325.711.962.711 1.94v2.883c0 .284.188.61.725.506C18.938 20.163 22 16.483 22 12.099c0-5.488-4.448-9.936-9.937-9.936z" /></svg>
          <span className="sr-only">GitHub</span>
        </NavLink>
      </div>
      <span className="text-lg text-gray-200 sm:text-center">© 2023 Book Library. All Rights Reserved.</span>
    </div>
  </div>
</footer>




  )
}

export default Footer
