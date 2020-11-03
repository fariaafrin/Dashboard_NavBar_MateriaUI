// import React from 'react'
// import { Link, NavLink } from "react-router-dom";
// import brandLogo from "../images/AmariSchool.png";

// const Navbar = () => {
//     return (


//         // <nav className="navbar navbar-expand-lg navbar-dark  navbar-static-top navbar-custom">
//         <nav className="navbar navbar-expand-lg   sticky-top navbar-custom navline">
//             <div className='container'>

//                 <NavLink className="navbar-brand" exact to="/">
//                     <div className='singlebrand'>
//                         <img src={brandLogo} alt="logo" className="" />
//                     </div>
//                 </NavLink>



//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>



//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ml-auto">
//                         <h2 className="line"><span className="line-center"></span></h2>
//                         <li className="nav-item ">
//                             <NavLink className="nav-link" exact to="/home">HOME <span className="sr-only">(current)</span> </NavLink>
//                         </li>

//                         <li className="nav-item ">
//                             <NavLink className="nav-link" exact to="/about">ABOUT </NavLink>
//                         </li>

//                         <li className="nav-item dropdown ">
//                             <NavLink className="nav-link " exact to="/course" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 COURSES
//                             </NavLink>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <NavLink className="dropdown-item" exact to="/course">Action</NavLink>
//                                 <NavLink className="dropdown-item" exact to="/course">Another action</NavLink>
//                                 <div className="dropdown-divider"></div>
//                                 <NavLink className="dropdown-item" exact to="/course">Something else here</NavLink>
//                             </div>
//                         </li>

//                         <li className="nav-item ">
//                             <NavLink className="nav-link" exact to="/contact">CONTACT </NavLink>
//                         </li>
//                     </ul>

//                     <ul className="navbar-nav ">

//                         {/* search bar mine */}

//                         <li className="nav-item searchbar icondiv">

//                             <form action="">

//                                 <div className="searching" >
//                                     <i className="fa fa-search fa-lg"></i>

//                                 </div>
//                                 <input type="search" />
//                             </form>
//                         </li>
//                         {/* ------------ */}



//                         <li className="nav-item ">
//                             <a className="nav-link" href='#'><i className="fa fa-cart-plus fa-lg" aria-hidden="true"></i></a>
//                         </li>



//                         <li className="nav-item dropdown ">
//                             <NavLink exact to="/course" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <a className="nav-link" href='#'><i className="fa fa-th fa-lg" aria-hidden="true"></i></a>
//                             </NavLink>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <NavLink className="dropdown-item" exact to="/course">Career option</NavLink>
//                                 <div className="dropdown-divider"></div>
//                                 <NavLink className="dropdown-item" exact to="/course">Language Activities</NavLink>

//                             </div>
//                         </li>


//                     </ul>

//                 </div>
//             </div>
//         </nav>


//     );
// }
// export default Navbar;