import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layouts = () => {

    return (
        <div>
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Layouts;