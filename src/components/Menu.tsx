import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Nav
      variant="tabs"
      className="justify-content-center"
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <Nav.Item style={{ padding: '10px' }}>
        <Link to="/">MainPage</Link>
      </Nav.Item>
      <Nav.Item style={{ padding: '10px' }}>
        <Link to="/orders">Orders</Link>
      </Nav.Item>
      <Nav.Item style={{ padding: '10px' }}>
        <Link to="/products">Products</Link>
      </Nav.Item>
      <Nav.Item style={{ padding: '10px' }}>
        <Link to="/customers">Customers</Link>
      </Nav.Item>
    </Nav>
  );
}

// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// export const menuLinks: { [link: string]: string } = {
//   '/orders': 'Orders',
//   '/products': 'Products',
//   '/customers': 'Customers',
//   '/employees': 'Employees',
//   // '/categories': 'Categories',
//   // '/shippers': 'Shippers',
//   // '/suppliers': 'Suppliers',
//   // '/regions': 'Regions',
// };

// export default class Menu extends React.Component<{}> {
//   render() {
//     return (
//       <Nav variant="tabs" className="justify-content-center" style={{ marginBottom: '20px' }}>
//         <Nav.Item>
//           <LinkContainer to={{ pathname: '/' }} exact>
//             <Nav.Link>MainPage</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         {Object.keys(menuLinks).map((link) => (
//           <Nav.Item key={link}>
//             <LinkContainer to={{ pathname: link }}>
//               <Nav.Link>{menuLinks[link]}</Nav.Link>
//             </LinkContainer>
//           </Nav.Item>
//         ))}
//       </Nav>
//     );
//   }
// }
