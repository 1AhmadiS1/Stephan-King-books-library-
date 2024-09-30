import Footer from "../Organism/Home/Footer"
import NavBar from "../Organism/Home/NavBar"
import stephan from "../../images/stephan.jpg"

function About() {
  return (
    <div>
      <NavBar/>
 <section id="about-stephen-king" className="py-10 bg-gray-100">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <img src={stephan} alt="Stephen King" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2 md:pl-6">
      <h2 className="text-3xl font-bold text-center md:text-left mb-6">About Stephen King</h2>
      <p className="text-lg text-gray-700 mb-4">
        Stephen King is a legendary author celebrated for his exceptional storytelling in the realms of horror, supernatural fiction, suspense, and fantasy. Born on September 21, 1947, in Portland, Maine, King discovered his passion for writing at an early age. His first novel, <strong>*Carrie*</strong>, released in 1974, marked the beginning of an illustrious career that has captivated millions of readers worldwide.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        With over 60 novels and 200 short stories, King has created some of the most iconic works in modern literature, including <strong>The Shining</strong>, <strong>It</strong>, <strong>Misery</strong>, and <strong>Pet Sematary</strong>. His stories delve into the darker aspects of human nature and the eternal struggle between good and evil, making his work resonate across generations.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        King's accolades include prestigious awards such as the Bram Stoker Award, the World Fantasy Award, and the Medal for Distinguished Contribution to American Letters. His works have been adapted into numerous films and miniseries, further solidifying his status as a cultural icon.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Beyond his literary achievements, King is also known for his insights into the writing process, offering invaluable advice to aspiring authors. He continues to inspire with his reflections on storytelling and the craft of writing.
      </p>
      <p className="text-lg text-gray-700">
        Stephen King resides in Maine with his wife, Tabitha, and remains a prominent figure in literature, enchanting readers with his unique ability to craft suspenseful and thought-provoking narratives.
      </p>
    </div>
  </div>
</section>


<Footer/>
    </div>
  )
}

export default About
