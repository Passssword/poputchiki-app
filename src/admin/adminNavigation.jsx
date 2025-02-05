import style from './admin.module.css'
import linksStyle from '../style/links.module.css';
import { NavLink } from "react-router-dom";
import Loca from './location.svg'
import UsersImg from './users.svg'
import AdvertsImg from './adverts.svg'

const AdminNavigation = () => {
    return(
        <div className={style.adminNavWrapper}>
            <img className={style.LocationImg} src={Loca} />
            <NavLink className={linksStyle.linkSidebar} to="/admin-panel/manage-locations">Локации</NavLink><br />
            <img className={style.LocationImg} src={AdvertsImg} />
            <NavLink className={linksStyle.linkSidebar} to="/admin-panel/manage-adverts">Объявления</NavLink><br />
            <img className={style.LocationImg} src={UsersImg} />
            <NavLink className={linksStyle.linkSidebar} to="/admin-panel/manage-users">Пользователи</NavLink><br />
        </div>
    )
}

export default AdminNavigation;