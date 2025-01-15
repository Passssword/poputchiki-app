import style from './admin.module.css'
import { NavLink } from "react-router-dom";

const AdminNavigation = () => {
    return(
        <div className={style.adminNavWrapper}>
                <NavLink to="/admin-panel/manage-locations">Локации</NavLink><br />
                <NavLink to="/admin-panel/manage-adverts">Объявления</NavLink><br />
                <NavLink to="/admin-panel">Пользователи</NavLink><br />
            </div>
    )
}

export default AdminNavigation;