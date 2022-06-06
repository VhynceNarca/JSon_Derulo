import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logodiv">
          <img src="/logo.png" className="imglogo" alt="logo"/>
          <h3 className='logo'>Paw Society</h3>
        </div>
        <ul className="nav-links">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/dogs'>
            <li>Dogs</li>
          </Link>
          <Link to='/cats'>
            <li>Cats</li>
          </Link>
          <Link to='/'>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
export default Navbar

// import { Link } from "react-router-dom"
// import { styled } from '@stitches/react';

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Logo>
//             <div><LogoImg src="/logo.png" /></div>
//             <div><Name>Paw Society</Name></div>
//         </Logo>
        
//         <Navlinkdiv>
//           <Navlink to='/' className='home'>
//             <Navlist>Home</Navlist>
//           </Navlink>
//           <Navlink to='/dogs' className='about'>
//             <Navlist>Dogs</Navlist>
//           </Navlink>
//           <Navlink to='/cats' className='services'>
//             <Navlist>Cats</Navlist>
//           </Navlink>
//         </Navlinkdiv>
//       </Nav>
//     </>
//   )
// }
// export default Navbar

// const Nav = styled('nav', {
//   display: 'flex',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   height: '12vh',
//   boxShadow: '#D2D2D2 0px 30px 30px -20px'
// });

// const Navlinkdiv = styled('ul', {
//   display: 'flex',
//   justifyContent: 'flex-end',
//   textDecoration: 'none',
// });

// const Navlink= styled(Link, {
//   textDecoration: 'none',
// });

// const Navlist = styled('a', {
//   color: '#6C6853',
//   fontSize: '24px',
//   fontWeight: 500,
//   padding: '10px 20px',
//   margin: '0 10px',
//   textDecoration:'none',
//   '&:active': {
//     color: '#FFCA7E',
//   },
// });

// const LogoImg = styled('img', {
//   width:'50px',
//   height:'50px'
// });

// const Logo = styled('div', {
//   display:'flex',
//   alignItems:'center',
//   flexWrap:'wrap',
//   justifyContent:'space-between',
//   width:'16vw'
// });

// const Name = styled('h3', {
//   color: '#FFCA7E',
//   fontSize: '32px'
// });