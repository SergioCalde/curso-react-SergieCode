import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const NavBar = () => {

    const { itemList } = useContext( CartContext );

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to='/' className="navbar-brand" href="#">Shopping Cart</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link active" aria-current="page">Shopping</NavLink>
                    </li>
                </ul>
                <NavLink to='/cart'>
                    <Badge badgeContent={itemList.length} color="secondary">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </NavLink>
            </div>
        </div>
    </nav>
  )
}
