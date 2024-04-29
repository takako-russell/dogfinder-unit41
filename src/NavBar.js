import { NavLink } from "react-router-dom";

function NavBar({ dogs }) {
  const dogLinks = dogs.map((dog) => (
    <NavLink key={dog.name} to={`dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));

  return (
    <nav className="nav-bar">
      <NavLink to="/dogs">Home</NavLink>
      {dogLinks}
    </nav>
  );
}

export default NavBar;
