import './navbar.css'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";

const Navbar = () => {
  const { state } = useContext(Cartcontext);

  // Calculate the total quantity in the cart
  const totalQuantity = state.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/cart">
        {/* Display the cart link with the item count */}
        Cart ({totalQuantity})
      </NavLink>
    </div>
  );
};

export default Navbar;
