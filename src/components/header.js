import style from './header.module.css'
import { Routes, Route, NavLink, Outlet, } from "react-router-dom";
import GenerelSearch from './generalSearch.jsx';

function Header () {
    return (
        <div className={style.header}>
            <div className={style.menu_wrapper}>
                {/*====Menu====*/}
                <nav className={style.menuWrapper}>
                    <ul className={style.menuList}>
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><NavLink to='/search-results' activeClassName={style.activeLink}>Search</NavLink></li>
                        <li><NavLink to='/create-advert' activeClassName={style.activeLink}>Create advert</NavLink></li>
                        <li><NavLink to='/admin-panel' activeClassName={style.activeLink}>Admin panel</NavLink></li>
                        <li><NavLink to='/style-page' activeClassName={style.activeLink}>Style page</NavLink></li>
                    </ul>
                </nav>
                {/*===========*/}
                
            </div>
            
            {/* <Outlet /> */}
            <Routes>
                <Route path="/" element={<GenerelSearch />} exact />
            </Routes>

        </div>
    )
}

export default Header;