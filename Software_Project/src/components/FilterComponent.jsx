import { Accordion, Container, Col, Row, Dropdown, ButtonGroup, Form, ToggleButton, InputGroup, Button } from "react-bootstrap"

const radios = [
  { name: 'Compra', value: '1' },
  { name: 'Venta', value: '2' },
  { name: 'Cualquiera', value: '3' },
];

const generateRadios = (radios, radioValue) => {
  return radios.map((radio, idx) => (
    <ToggleButton key={idx}
      id={`radio-${idx}`}
      type="radio"
      variant="secondary"
      name="radio"
      value={radio.value}
      checked={radioValue === radio.value}>
      {radio.name}
    </ToggleButton>
  ));
};


const FilterComponent = () => {
  return (
    <Row>
      <Accordion>
        <Accordion.Header>
          Filtros
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row>
              <Col md={4}>
                <Row>
                  <ButtonGroup>
                    {generateRadios(radios)}
                  </ButtonGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <Button>-</Button>
                    <Form.Control/>
                    <Button>+</Button>
                  </InputGroup>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <ButtonGroup>
                    {generateRadios(radios)}
                  </ButtonGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <Button>-</Button>
                    <Form.Control/>
                    <Button>+</Button>
                  </InputGroup>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <ButtonGroup>
                    {generateRadios(radios)}
                  </ButtonGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <Button>-</Button>
                    <Form.Control/>
                    <Button>+</Button>
                  </InputGroup>
                </Row>
              </Col>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion>
    </Row>
  )
}

export default FilterComponent