import { useState, useEffect } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './Filter.scss';

const Filter = ({catalogProducts, setProducts, setItemsPerPage, isActiveMobileFilters, setIsActiveMobileFilters}) => {
    const [filteredProducts, setFilteredProducts] = useState(catalogProducts);
    const [selectedOnSale, setSelectedOnSale] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        let newFilteredProducts = catalogProducts;
        
        if (selectedOnSale !== null) {
            newFilteredProducts = newFilteredProducts.filter(x => x.onSale.toLowerCase() === selectedOnSale.toLowerCase());
        }
        
        if (selectedBrand) {
            newFilteredProducts = newFilteredProducts.filter(x => x.brand === selectedBrand);
        }
    
        // Only update the state if the filtered products have changed
        if (JSON.stringify(newFilteredProducts) !== JSON.stringify(filteredProducts)) {
            setFilteredProducts(newFilteredProducts);
            setProducts(newFilteredProducts);
        }
    }, [selectedOnSale, selectedBrand, catalogProducts]);

    const handleChange = (e, type) => { 
        if (type === 'onSale') {
            setSelectedOnSale(e.target.value);
        } else if (type === 'brand') {
            setSelectedBrand(e.target.value);
        }
        const newFilteredProducts = filteredProducts.filter(x => x[type] === e.target.value);
        setProducts(newFilteredProducts);
        setItemsPerPage(3);
    };

    const resetHandler = () => {
        setFilteredProducts(catalogProducts);
        setProducts(catalogProducts);
    };

    const uniqueBrands = filteredProducts.reduce((brands, product) => {
        if (!brands.includes(product.brand)) {
            brands.push(product.brand);
        }
        return brands;
    }, []);

    return (
        <Form className={`filter-form d-md-block d-none ${isActiveMobileFilters ? 'open-filter' : ''}`}>
            {isActiveMobileFilters && <div className="filter-header"><h2 className="mb-0">Filter</h2> <span onClick={() => setIsActiveMobileFilters(false)}><FaRegWindowClose /></span></div>}
            <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>On sale</Accordion.Header>
                    <Accordion.Body>
                        <div className="mb-3">
                            <Form.Check
                                type="radio"
                                id="some"
                                name="onSale"
                                label="On Sale"
                                value="true"
                                onChange={(e) => handleChange(e, 'onSale')}
                            />
                            <Form.Check
                                type="radio"
                                id="another"
                                name="onSale"
                                label="Not On Sale"
                                value="false"
                                onChange={(e) => handleChange(e, 'onSale')}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body>
                        {uniqueBrands.map((x, index) => (
                            <div key={index} className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id={x}
                                    name="brand"
                                    label={x}
                                    value={x}
                                    onChange={(e) => handleChange(e, 'brand')}
                                />
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className="reset" type="reset" onClick={resetHandler}>Reset</Button>
        </Form>
    );
}

export default Filter;