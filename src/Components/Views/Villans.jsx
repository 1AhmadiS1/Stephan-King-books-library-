import NavBar from '../Organism/Home/NavBar';
import Footer from "./../Organism/Home/Footer";
import BookSlice from "../Molcueles/Books/BookSlice";
import { Get } from '../../Api/Get';
import { useState, useEffect } from 'react';
import image3 from "./../../images/villan.jpeg"

function Villans() {
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Get("https://stephen-king-api.onrender.com/api/villains");
      setSearchedData(data.data);  
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavBar/> 
      <div className="w-[90%] mx-auto">
        <BookSlice searchedData={searchedData} Type="Villans" image3={image3} />
      </div>
      <Footer/>
    </div>
  );
}

export default Villans;
