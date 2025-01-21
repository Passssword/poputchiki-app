import style from './admin.module.css'
import styleButtons from '../style/buttons.module.css'

const ManageUsers = () => {
    return(
        <div className={style.manageUsersWrapper}>
            <div className={style.createUsersWrapper}>
                <form className={style.registrationForm}>
                    <input type="text" placeholder="Enter Login" />
                    <input type="password" placeholder="Enter Password"/>
                    <button className={`${styleButtons.btn} ${styleButtons.btnCreate}`}>Добавить</button>
                </form>
                </div>
            <div className={style.listUsersWrapper}>
                <table className={style.manageUsersListTable}>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th>Usage buttons</th>
                        </tr>
                        <tr>
                            <td>111</td>
                            <td>222</td>
                            <td>333</td>
                            <td>Buttons</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )}

export default ManageUsers