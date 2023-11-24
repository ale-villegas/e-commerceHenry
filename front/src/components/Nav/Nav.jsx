import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {

    
    return (
    <div className={style.Links}>
        <Link className={style.inputNav} to={'/home'}>Home</Link>
        <Link className={style.inputNav} to= {'/about'}> About </Link>
        <SearchBar onSearch = { () => {
            console.log("OnSearchBar")
        }}/>

    </div>
  );
};

export default Nav