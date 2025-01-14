import style from './AuthorizationPage.module.css'
import styleButtons from '../../style/buttons.module.css'

const AuthorizationPage = () => {
    return (
        <div className={style.authPage}>
            <div className={style.authFormWrapper}>
                <p className={style.authCaption}>Authorization</p>
                <input  type="text" placeholder="Inter Login"/>
                <input  type="password" placeholder="Inter password"/>
                <button className={styleButtons.btnLogin}>Login</button>
            </div>
        </div>)
}

export default AuthorizationPage;