import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el componenete <GifGriditem />', () => {
  const url = 'https://localhost/algo.jpg';
  const title = 'un titulo';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Comprobar el render de el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la img igual al url y alt de los props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('debe tener animate__zoomInDown', () => {
    const div = wrapper.find('div');

    const className = div.props().className;

    expect(className.includes('animate__zoomInDown')).toBe(true);
  });
});
