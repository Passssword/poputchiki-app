import React from 'react';

import { Routes, Route, useRoutes,Outlet } from "react-router-dom";
import style from './admin.module.css'
import AdminNavigation from './adminNavigation.jsx';
import CreateLocations from './createLocations.jsx';
import ManageAdverts from './manageAdverts.jsx';


function AdminPanel (props) {

    return(
        <div className={style.admin_page_wrapper}>
            <AdminNavigation />
            <Routes>
                {/* <Route path="/admin-panel" element={<AdminNavigation />} /> */}
                <Route path="/manage-locations" element={<CreateLocations />} />
                <Route path="/manage-adverts" element={<ManageAdverts />} />
            </Routes>
        </div>
)}

  export default AdminPanel;