import linksStyle from '../../style/links.module.css';
import { NavLink } from "react-router-dom";
const Auth = () => {
    return (
    <div>
        <NavLink className={linksStyle.linkAuth} to="/auth">Войдите как пользователь</NavLink>
    </div>
    )}

export default Auth;