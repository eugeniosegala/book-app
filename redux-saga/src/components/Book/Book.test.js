import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Book from './Book';

configure({ adapter: new Adapter() });

const singleBook = {
  id: 2086,
  book_author: [
    'Ανώνυμος',
    'Carlos',
  ],
  book_title: 'Ο Αλέξανδρος ο Μακεδών',
  book_publication_year: 1529,
  book_publication_country: 'Ιταλία',
  book_publication_city: 'Βενετία',
  book_pages: 104,
};

describe('Book', () => {
  it('should render correctly with the expected value', () => {
    const wrapper = shallow(<Book item={singleBook} />);
    //console.log(wrapper.debug());

    expect(wrapper.find('CardTitle').text()).toBe(singleBook.book_title);
    expect(wrapper.find('CardText').text()).toBe(singleBook.book_author.join(''));
    expect(wrapper.find('.publication-year').text()).toBe(String(singleBook.book_publication_year));
    expect(wrapper.find('.publication-country').text()).toBe(String(singleBook.book_publication_country));

  });
});
