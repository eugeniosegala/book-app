import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = ({ updateInputValue, callBooks, history }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      history.push('/');
      callBooks({ currentPage: 1 });
    }}
  >
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search field"
        onChange={evt => updateInputValue(evt)}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          type="submit"
        >
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </form>
);

Search.propTypes = {
  history: PropTypes.any,
  updateInputValue: PropTypes.func,
  callBooks: PropTypes.func,
};

export default Search;
