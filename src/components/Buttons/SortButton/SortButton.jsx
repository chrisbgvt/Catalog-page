import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './SortButton.scss';

const SortButton = ({setProducts}) => {

    const sortingHandler = (sortBy) => {
        switch(sortBy) {
            case 'name_asc':
                setProducts(state => state.slice().sort((a, b) => a.name.localeCompare(b.name)));
                break;
            case 'name_desc':
                setProducts(state => state.slice().sort((a, b) => b.name.localeCompare(a.name)));
                break;
            case 'price_asc':
                setProducts(state => state.slice().sort((a, b) => a.price - b.price));
                break;
            case 'price_desc':
                setProducts(state => state.slice().sort((a, b) => b.price - a.price));
                break;
            case 'newest':
                setProducts(state => state.slice().sort((a, b) => a.created_at.localeCompare(b.created_at)));
                break;
            default:
              return 'Error when sorting!';
        }
    }

    return (
        <DropdownButton className={'sort-btn d-flex justify-content-end'} title="Sort by" onSelect={(e) => sortingHandler(e)}>
            <Dropdown.Item eventKey="name_asc">Name A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="name_desc">Name Z-A</Dropdown.Item>
            <Dropdown.Item eventKey="price_asc">Price asc</Dropdown.Item>
            <Dropdown.Item eventKey="price_desc">Price desc</Dropdown.Item>
            <Dropdown.Item eventKey="newest">Newest</Dropdown.Item>
        </DropdownButton>
    );
}

export default SortButton;