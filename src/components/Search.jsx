import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import country from "../country-codes.json";

const Search = ({ query, setQuery, fetch, setCountry, setCityName }) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch();
    setCityName(query.city);
    setCountry(query.country);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <Row>
        <Col md={4}>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              placeholder="Enter a city name"
              name="city"
              value={query.city || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="my-2">
            <Form.Select name="country" onChange={handleChange}>
              <option value="">Select country</option>
              {country.map((c, i) => (
                <option value={c.Code} key={i}>
                  {c.Name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex justify-content-center my-2">
          <Button type="submit">Check Weather</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
