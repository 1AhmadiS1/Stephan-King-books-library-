import { useEffect, useState } from 'react';
import NavBar from '../Organism/Home/NavBar';
import { Get } from '../../Api/Get';
import { useLocation } from 'react-router-dom';
import Footer from "../Organism/Home/Footer"
function Details() {
    const [rdata, setRdata] = useState(null); 
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl =
                    location.state.TheType === "Books"
                        ? `https://stephen-king-api.onrender.com/api/book/${location.state.id}`
                        : `https://stephen-king-api.onrender.com/api/villain/${location.state.id}`;

                const data = await Get(apiUrl);
                setRdata(data.data); 
                console.log(data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, [location.state]);

    return (
        <div>
            <NavBar />
            <div className='my-24 mx-auto'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div>

                    <img src={location.state.typeimg} alt="" />
                  </div>
                    {rdata ? ( 
                        location.state.TheType === "Books" ? (
                            <div className='text-lg md:w-[40%] '>
                                <p><span className='font-extrabold text-amber-950'>Title:</span> {rdata.Title}</p>
                                <p><span className='font-extrabold'>Publisher:</span> {rdata.Publisher}</p>
                                <p><span className='font-extrabold'>Pages:</span> {rdata.Pages}</p>
                                <p><span className='font-extrabold'>Highlights:</span> {rdata.Notes.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}</p>
                                <p><span className='font-extrabold'>Villains:</span> {rdata.villains?.map((item, index) => (
                                    <span key={index}>{item.name}</span>
                                ))}</p>
                            </div>
                        ) : (
                            <div className='text-lg md:w-[40%]'>
                                <p><span className='font-extrabold text-amber-950'>Name:</span> {rdata.name}</p>
                                <p><span className='font-extrabold'>Status:</span> {rdata.status}</p>
                                <p><span className='font-extrabold'>Highlights:</span> {rdata.notes?.map((item, index) => (
                                    <span key={index}>{item}{index < rdata.notes.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                                <p><span className='font-extrabold'>Books:</span> {rdata.books?.map((book, index) => (
                                    <span key={index}>
                                        {book.title}
                                        {index < rdata.books.length - 1 ? ', ' : ''}
                                    </span>
                                ))}</p>
                            </div>
                        )
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Details;
