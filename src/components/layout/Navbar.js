import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
  state = {  }
  render() {
      return (
        <div>
          <Navbar color="dark" dark  expand="md">
            <NavbarBrand href="/">SDLC Tracking Application</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/create_task">Create Task</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/dashboard">All Tasks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/my_dashboard">My Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/staff">Staff</NavLink>
                </NavItem>
              
              </Nav>
        
          </Navbar>
        </div>
      );
    }
}

export default AppNav;

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Acme Staff Portal
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/staff">
//                   Staff
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;
