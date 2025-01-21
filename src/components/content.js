import style from './content.module.css'
import { Routes, Route, useRoutes,Outlet } from "react-router-dom";
import SearchResultsPage from './searchResultsPage.jsx';
import CreateAdvertPage from './createAdvertPage.jsx';
import StylePage from './stylePage.jsx';
import AdminPanel from '../admin/admin.jsx';
import AuthorizationPage from './auth/AuthorizationPage.jsx';
import CreateLocations from '../admin/createLocations.jsx';
import ManageAdverts from '../admin/manageAdverts.jsx';
import ManageUsers from '../admin/manageUsers.jsx';

function Content () {
    
    return(
    <div className={style.content_wrapper}>
        <Routes>
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/create-advert" element={<CreateAdvertPage />} />
            <Route path="/admin-panel/*" element={<AdminPanel />}>
                <Route path="manage-locations" element={<CreateLocations />} />
                <Route path="manage-adverts" element={<ManageAdverts />} />
                <Route path="manage-users" element={<ManageUsers />} />
            </Route>
            <Route path="/style-page" element={<StylePage />} />
            <Route path="/auth" element={<AuthorizationPage />} />
        </Routes>
    </div>
)}

export default Content;