import BookSlice from "../Molcueles/Books/BookSlice"
import Footer from "../Organism/Home/Footer"
import NavBar from "../Organism/Home/NavBar"
import image2 from "./../../images/images2.jpeg"
function Faviourte() {
const Data=localStorage.getItem("addtofav")
const searchedData=JSON.parse(Data);




  return (
    <div>
      <NavBar/>
      <div className="w-[90%] mx-auto">

      <BookSlice searchedData={searchedData} Type="" image3={image2}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Faviourte
