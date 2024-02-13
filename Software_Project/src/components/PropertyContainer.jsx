import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProperties, setCurrentPage } from '../redux/propertySlice';
import { Card, Container, Row, Col } from 'react-bootstrap';
import numeral from 'numeral';
import Pagination from '@mui/material/Pagination';
import FilterComponent from './FilterComponent';

const PropertyCard = (props) => {
  const { price, title, rooms, bathrooms, squareMeters } = props;

  return (
    <Col xs={12} md={6} lg={4} className='my-2'>
      <Card bg={'white'} text='dark' className='h-100'>
        <Card.Img variant="top" src="https://placekitten.com/700/400" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{`${numeral(price).format('0,0.00')}$`}</Card.Subtitle>
          <Card.Text>{`${rooms} cuartos | ${bathrooms} baños | ${squareMeters} m2`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

const renderPropertyCards = (properties) => {
  // Check if properties is undefined or empty
  if (!properties || properties.length === 0) {
    return <p>No properties available</p>; // Or any other message you want to display
  }

  return properties.map(property => (
    <PropertyCard
      key={property.id} // Assuming each property has a unique identifier
      price={property.price}
      title={property.title}
      rooms={property.rooms}
      bathrooms={property.bathrooms}
      squareMeters={property.squareMeters}
    />
  ));
}

const scrollTo = (componentId) => {
  const element = document.getElementById(componentId);
  if (element) {
    element.scrollIntoView({behavior: 'instant'})
  }
}


const PropertyContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.property.currentPage);
  const totalPages = useSelector(state => state.property.totalPages);
  const properties = useSelector(state => state.property.properties);
  const status = useSelector(state => state.property.status);
  const error = useSelector(state => state.property.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProperties(currentPage));
    }
  }, [currentPage, dispatch, status]);

  return (
    <Container fluid id='property_container'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <FilterComponent/>
          <Row className='justify-content-center'>
            {renderPropertyCards(properties)}
          </Row>
          <Pagination
            className="d-flex justify-content-center"
            count={totalPages}
            page={currentPage}
            onChange={(_event, page) => {
              dispatch(setCurrentPage(page));
              dispatch(fetchProperties(page));
              scrollTo('property_container');
            }}
          />
        </>
      )}
    </Container>
  );
}


export default PropertyContainer;