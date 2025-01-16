import style from './admin.module.css'
import { NavLink } from "react-router-dom";
import Loca from './location.svg'
import UsersImg from './users.svg'
import AdvertsImg from './adverts.svg'

const AdminNavigation = () => {
    return(
        <div className={style.adminNavWrapper}>
            <img className={style.LocationImg} src={Loca} />
            <NavLink to="/admin-panel/manage-locations">Локации</NavLink><br />
            <img className={style.LocationImg} src={AdvertsImg} />
            <NavLink to="/admin-panel/manage-adverts">Объявления</NavLink><br />
            <img className={style.LocationImg} src={UsersImg} />
            <NavLink to="/admin-panel">Пользователи</NavLink><br />
        </div>
    )
}

export default AdminNavigation;