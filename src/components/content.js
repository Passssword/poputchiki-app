import style from './content.module.css'
import { Routes, Route, useRoutes,Outlet } from "react-router-dom";
import SearchResultsPage from './searchResultsPage.jsx';
import CreateAdvertPage from './createAdvertPage.jsx';
import AdminPanel from '../admin/admin.jsx';

function Content () {
    
    return(
    <div className={style.content_wrapper}>
        <Routes>
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/create-advert" element={<CreateAdvertPage />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
    </div>
)}

export default Content;