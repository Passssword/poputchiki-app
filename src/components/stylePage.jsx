import style from './stylePage.module.css'
function StylePage () {
    
    return(
    <div className={style.stylePage_wrapper}>
        <div className={style.nav_wrapper}>
            Plan: <br />
            1. Страница объявления<br />
            2. Страница пользователя<br />
            3. Страница регистрации пользователя<br />
            4. Страница аунтефикации<br /><br />
            
            StylePage<br /><br />
            
            Стилизация заголовков<br />
            Стилизация блоков<br />
            <ul>
                <li>текстовые блоки</li>
                <li>блоки информационные</li>
                <li>блок "Важная информация"</li>
            </ul>
            Стилизация таблиц<br />
            Стилизация кнопок<br />
            Стилизация ссылок<br />
            Стилизация списков<br />
        </div>
        <div className={style.content_wrapper}>
            <h1>Заголовок 1</h1>
            <h2>Заголовок 2</h2>
            <h3>Заголовок 3</h3>
            <h4>Заголовок 4</h4>
            <h5>Заголовок 5</h5>
        </div>
        
    </div>
)}

export default StylePage;