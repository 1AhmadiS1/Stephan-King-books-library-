import bookimg from "../../../images/images2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; 
import { useEffect, useState } from "react";
import { Get } from "../../../Api/Get";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
/* eslint-disable react/prop-types */

function BookSlice({ searchedData, Type, image3 }) {
  const [addItem, setAddItem] = useState(JSON.parse(localStorage.getItem("addtofav")) || []);
  const [detailsId, setDetailsId] = useState(null);
  const bookDetail = (theid) => {
    if (detailsId === theid) {
      setDetailsId(null); 
    } else {
      setDetailsId(theid); 
    }
  };

  const addtofav = async (id) => {
    try {
      const addedItem = await Get(`https://stephen-king-api.onrender.com/api/short/${id}`);
      if (!addItem.some(item => item.id === addedItem.data.id)) {
        const updatedItems = [...addItem, addedItem.data];
        setAddItem(updatedItems); 
        localStorage.setItem("addtofav", JSON.stringify(updatedItems));
        toast.success("Added to favorites successfully");
      } else {
        toast("Already existed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center py-6">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight border-b-4 border-red-600 inline-block pb-2">
        Stephen King {Type}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Type === "" ? addItem : searchedData)?.map((item) => (
          <div key={item.id} className="border border-gray-200 shadow-lg rounded-lg p-4">
            <img src={image3} alt="Villain" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              {Type === "Villans" ? (
                <>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 mt-2">Gender: {item.gender}</p>
                  <p className="text-gray-600 mt-1">Status: {item.status}</p>
                  {detailsId === item.id && (
                    <div className="mt-2">
                      <p className="text-gray-600">Notes: {item.notes.join(", ")}</p>
                      <p className="text-gray-600">Shorts:</p>
                      <ul className="list-disc list-inside">
                        {item.shorts.map((short, index) => (
                          <li key={index}><a href={short.url} target="_blank" rel="noopener noreferrer">{short.title}</a></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold">{item.Title}</h3>
                  <p className="text-gray-600 mt-2">Author: Stephen King</p>
                  <p className="text-gray-600 mt-1">Publisher: {item.Publisher}</p>
                  <p className="text-gray-600 mt-1">Pages: {item.Pages}</p>
                  {detailsId === item.id && (
                    <div className="mt-2">
                      <p className="text-gray-600">Highlights: {item.Notes}</p>
                      <p className="text-gray-600">Villains: {item.villains?.map((villain, index) => (
                        <span key={index}>{villain.name}, </span>
                      ))}</p>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex gap-3">
              <button 
                className="bg-gray-800 text-white w-full py-2 rounded-b-lg hover:bg-gray-900 transition-all duration-300" 
                onClick={() => bookDetail(item.id)} 
              >
                More Details
              </button>
              {Type === "Books" && (
                <button 
                  className="bg-red-600  text-white w-full py-2 rounded-b-lg hover:bg-red-800 transition-all duration-300" 
                  onClick={() => addtofav(item.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      {(Type === ""&&addItem.length>0) ? (
        <>
        <button 
          onClick={() => { 
            localStorage.clear(); 
            setAddItem([]); 
            toast.success("Favorites cleared successfully"); 
          }} 
          className="bg-red-600 my-2 text-white w-[50%] py-4 rounded-b-lg hover:bg-red-800 transition-all duration-300"
          >
          Clear
        </button>
          </>
      ):<p className="text-gray-500 text-xl my-10">There is no items</p>}
    </div>
  );
}

export default BookSlice;
