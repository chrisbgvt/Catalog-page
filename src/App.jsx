import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import productsJson from './config/DB.json';

import Catalog from './components/Catalog/Catalog';
import Categorie from './components/Catalog/Categorie/Categorie';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="App">
            <Navbar  />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={ <Navigate replace to="catalog" /> } />
                    <Route path="catalog" 
                        element={
                            <Catalog 
                                    initialProducts={productsJson} 
                                    // sorting={sortingHandler} 
                                    // loadMore={loadHandler} 
                                    totalProducts={productsJson.length}
                                    // currentPage={currentPage} 
                                    // itemsPerPage={itemsPerPage}
                                />
                        } 
                    />
                    <Route path="catalog/:categorie" 
                        element={
                            <Categorie 
                                initialProducts={productsJson} 
                                // sorting={sortingHandler} 
                                // loadMore={loadHandler} 
                                // totalProducts={productsJson.length} 
                                // currentPage={currentPage} 
                                // itemsPerPage={itemsPerPage} 
                            />
                        } 
                    />
                    {/* <Route path="*" element={<PageNotFound />} /> */}
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
