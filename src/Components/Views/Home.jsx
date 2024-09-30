import SwipeImages from "../Molcueles/Home/ImageSwiper/SwipeImages"
import Bookslist from "../Organism/Home/Bookslist"
import Footer from "../Organism/Home/Footer"
import NavBar from "../Organism/Home/NavBar"
import image2 from "./../../images/images2.jpeg"
import image3 from "./../../images/villan.jpeg"


function Home() {
  return (
    <div>
      <NavBar/>
      <SwipeImages />
      <Bookslist url="https://stephen-king-api.onrender.com/api/books" TheType="Books" typeimg={image2} /> 
      <Bookslist url="https://stephen-king-api.onrender.com/api/villains" TheType="Villans" typeimg={image3}/>
      <Footer/>
    </div>
  )
}

export default Home
