import React from 'react';
import { shallow } from 'enzyme';
import ToDoPage from './todopage';

test('renders correctly', () => {
  const wrapper = shallow(<ToDoPage />);
  expect(wrapper).toMatchSnapshot();
});