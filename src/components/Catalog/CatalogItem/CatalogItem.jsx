import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";

import './CatalogItem.scss';

const CatalogItem = ({product}) => {
    return (
        <Col md={4} className={'py-3'}>
            <Card className="h-100 border-0 shadow">
                <Card.Img variant="top" width="100%" height="200px" src={product.image} />
                <Card.Body className={'d-flex flex-column'}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="description">{product.description}</Card.Text>
                    <Card.Text>{product.onSale == 'true' 
                        ? <><span className="old-price">{product.price}</span> <span>{product.salePrice}</span></> 
                        : product.price} lv.
                    </Card.Text>
                    <Card.Text>
                        {[...Array(Number(product.rating))].map((x, index) => <FaStar key={index} />)}
                    </Card.Text>
                    <Button className="btn btn-primary mt-auto" onClick={() => alert("Product added to cart!")}>Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CatalogItem;