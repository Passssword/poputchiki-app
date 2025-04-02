import style from './content.module.css'
import { Routes, Route } from "react-router-dom";
import SearchResultsPage from './searchResultsPage.jsx';
import AdvertPageContener from './adverts/advertPage.jsx';
import CreateAdvertPage from './createAdvertPage.jsx';
import StylePage from './stylePage.jsx';
import AdminPanel from './admin/admin.jsx';
import AuthorizationPage from './auth/AuthorizationPage.jsx';
import CreateLocations from './admin/createLocations.jsx';
import ManageAdverts from './admin/manageAdverts.jsx';
import ManageUsers from './admin/manageUsers.jsx';

function Content () {
    
    return(
    <div className={style.content_wrapper}>
        <Routes>
            <Route path="/adverts" element={<SearchResultsPage />} />
                <Route path="/adverts/:advertId" element={<AdvertPageContener />} />
            {/* </Route> */}
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