import React from 'react';

import { Routes, Route, useRoutes,Outlet } from "react-router-dom";
import style from './admin.module.css'
import AdminNavigation from './adminNavigation.jsx';


function AdminPanel (props) {

    return(
        <div className={style.admin_page_wrapper}>
            <AdminNavigation />
            <Outlet />
        </div>
)}

  export default AdminPanel;