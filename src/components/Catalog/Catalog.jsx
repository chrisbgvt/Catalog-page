import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button, Col } from 'react-bootstrap';
import { FaFilter } from "react-icons/fa";

import CatalogItem from './CatalogItem/CatalogItem';
import Filter from './Filter/Filter';
import SortButton from '../Buttons/SortButton/SortButton';

import './Catalog.scss';

const Catalog = ({initialProducts, totalProducts}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const currentProducts = filteredProducts.slice(0, indexOfLastProduct);
    const [isActiveMobileFilters, setIsActiveMobileFilters] = useState(false);

    useEffect(() => {
        setProducts(currentProducts);
    }, [filteredProducts, currentPage, itemsPerPage]);

    const loadHandler = () => {
        if (filteredProducts.length > itemsPerPage) {
            setItemsPerPage(state => state + 3);
        }
    }

    const openMobileFIlter = () => {
        setIsActiveMobileFilters(true);
    };

    return (
        <Container className="catalog">
            <Row>
                <Col md={3} className={'py-3'}>
                    <Filter catalogProducts={initialProducts} setProducts={setFilteredProducts} setItemsPerPage={setItemsPerPage} isActiveMobileFilters={isActiveMobileFilters} setIsActiveMobileFilters={setIsActiveMobileFilters} />
                </Col>
                <Col md={9} className={'py-3'}>
                    <h1>Shop</h1>
                    <Button className="filter-btn d-md-none" onClick={openMobileFIlter}><FaFilter /> Filter</Button>
                    <Row>
                        <div className="d-flex justify-content-between align-items-center" >
                            <span>{currentProducts.length} out of {filteredProducts.length}</span>
                            <SortButton setProducts={setFilteredProducts} />
                        </div>
                    </Row>
                    <Row>
                        {products.length > 0 
                            ? (
                                <>
                                    {products.map((x) => (<CatalogItem key={x.id} product={x} />))}
                                </>
                                ) 
                                : (
                                    <p>No products found</p>
                                    )
                                }
                    </Row>
                    <Button className="load-more" onClick={loadHandler} disabled={products.length >= filteredProducts.length}>Load more</Button>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Catalog;