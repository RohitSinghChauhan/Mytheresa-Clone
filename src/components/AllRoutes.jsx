import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Mens from '../pages/Mens';
import Womens from '../pages/Womens';
import Kids from '../pages/Kids';
import Life from '../pages/Life';
import InvalidPage from '../pages/InvalidPage';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mens' element={<Mens />} />
                <Route path='/womens' element={<Womens />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/life' element={<Life />} />
                <Route path='*' element={<InvalidPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes;