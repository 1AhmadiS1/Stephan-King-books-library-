import { useNavigate } from "react-router-dom";
import image from "../../../../images/bg1.jpeg";

function SwipeImages() {
const navigate=useNavigate();
const toThebooks=()=>{
navigate("/books")
}

const toTheauthor=()=>{
  navigate("/about");
  }

  return (
    <div className="border-b-2  border-gray-900">

    <div
      className="p-10 bg-no-repeat bg-center bg-cover h-[500px] relative my-2  
      "
      style={{ backgroundImage: `url(${image})` }}
      >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col h-[500px] justify-center items-center text-center">
        <h1 className="text-white font-extrabold font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
          <p>Explore the Dark</p>
          <p>Worlds of Stephen King</p>
        </h1>
        <div className="flex gap-3">

        <button onClick={toThebooks} className="bg-red-700 hover:bg-red-900 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300">
          Browse Collection
        </button>
        <button onClick={toTheauthor}
            className="bg-blue-700 hover:bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300"
            >
            About the Author
          </button>
            </div>
      </div>
    </div>
    
 
              </div>
  );
}

export default SwipeImages;
