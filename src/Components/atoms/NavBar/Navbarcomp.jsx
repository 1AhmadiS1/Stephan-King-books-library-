import { NavLink } from "react-router-dom";







function Navbarcomp() {
  const navbarcomp=[
    {
      name: "Home",
      link: "/", 
    },
    {
      name: "Books",
      link: "/books", 
    },
    {
      name: "Villans",
      link: "/Villans", 
    },
    {
      name: "About",
      link: "/about", 
    }

  ];

  return (
    <>

{navbarcomp.slice().map((item,index)=>(
  <li key={index}>
          <NavLink to={item.link} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent text-xl dark:border-gray-700"aria-current="page">{item.name}</NavLink>
        </li>
))}

</>

)
}
export default Navbarcomp
