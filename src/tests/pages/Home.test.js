import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';

describe('testing <Home />', () => {
  const wrapper = shallow(<Home />);


  test('should match with Home snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should find div home container', () => {
    expect(wrapper.contains(<div className="home-container" />));  
  })
});
