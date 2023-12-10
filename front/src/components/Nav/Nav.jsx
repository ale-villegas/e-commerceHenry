import React, { useContext } from 'react';
import ShoppingCart from '../ShoppingCart';

import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import style from './Nav.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const Nav = ({ dispatch, resultados }) => {

  const { state } = useContext(GlobalContext);
    
    return (
    <div className={style.Links}>
        <Link className={style.inputNav} to={'/home'}>Home</Link>
        <Link className={style.inputNav} to= {'/about'}> About </Link>
        <ShoppingCart />

        <SearchBar resultados={resultados} dispatch={dispatch} />
    </div>
  );
};

export default Nav;
