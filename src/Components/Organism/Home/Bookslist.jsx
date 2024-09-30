import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { Get } from "../../../Api/Get";
import { useNavigate } from "react-router-dom";

function Bookslist(props) {
    const {url,TheType , typeimg}=props
    const [data, setData] = useState([]);
const navigate=useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data1 = await Get(url);
                setData(data1.data);
                console.log(data); // Log the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
const detailsPage=(id)=>{
navigate("/details",{state:{TheType,typeimg,id}})


}
    return (
        <div className="mt-40">
            <h1 className="text-center mt-10 font-extrabold "> Pobular {TheType}</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                breakpoints={{
                    640: {
                        slidesPerView: 1, 
                    },
                    768: {
                        slidesPerView: 3, 
                    },
                }}                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {data.length > 0 ? (
                    data.slice(0,10).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col justify-center">

                            <img src={typeimg} className="mx-auto my-10 " alt={item.name} />
                            <div className="flex  justify-center">
                            <button onClick={()=>{detailsPage(item.id)}} className="text-white px-40 py-4  md:px-20 md:py-4 lg:px-30 lg:py-4 hover:bg-gray-900">Details</button>
                            </div>
                            <h1 className=" text-center mb-10 ">{item.Title || item.name}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <div className="text-center my-10">Loading...</div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default Bookslist;
