import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Kid from '../pages/Kid';
import Life from '../pages/Life';
import InvalidPage from '../pages/InvalidPage';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/kid' element={<Kid />} />
                <Route path='/life' element={<Life />} />
                <Route path='*' element={<InvalidPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes;