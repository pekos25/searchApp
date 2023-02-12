import React from "react";

import Form from "react-bootstrap/Form";

const Search = ({ serchData }) => {
  const handleSearch = (event) => {
    serchData(event.target.value);
  };
  return (
    <Form>
      <Form.Group className="m-3">
        <Form.Label>Input search text</Form.Label>
        <Form.Control
          placeholder="Enter text here"
          onChange={handleSearch.bind(this)}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
