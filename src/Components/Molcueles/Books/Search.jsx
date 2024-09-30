import { useEffect, useState } from "react";
import { Get } from "../../../Api/Get";
import BookSlice from "./BookSlice";
import image2 from "./../../../images/images2.jpeg"
function Search() {
  const [data, setData] = useState(null);
  const [thebook, setThebook] = useState("");
  const [searchedData,setSearchedData]=useState(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Rdata = await Get("https://stephen-king-api.onrender.com/api/books");
        setData(Rdata.data);
        setSearchedData(Rdata.data)
        console.log(Rdata);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const findTheBook = (e) => {
    e.preventDefault();
    
    if (thebook === "") {
setSearchedData(data)
    } else {
      const thedata = data?.filter((item) => item.Title.toLowerCase() === thebook.toLowerCase());
      setSearchedData(thedata)
      console.log(searchedData);
    }
    setThebook("");
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={findTheBook} className="flex justify-center my-10 space-x-4">
        <input
          type="text"
          value={thebook}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md
          text-white
          "
          placeholder="Search for a book..."
          onChange={(e) => {
            setThebook(e.target.value);
          }}
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Search
        </button>
      </form>
<BookSlice searchedData={searchedData} Type="Books" image3={image2}/>
    </div>
  );
}

export default Search;
