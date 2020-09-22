import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
  const categoria = 'hola';
  test('Snapshots del componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar item cuando se cargan imagenes useFectchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/cualqueir/cosa.jpg',
        title: 'cualqueir cosa',
      },
      {
        id: '123',
        url: 'https://localhost/cualqueir/cosa.jpg',
        title: 'cualqueir cosa',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid categoria={categoria} />);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    expect(wrapper.find('p').exists()).toBe(false);
    // expect(wrapper).toMatchSnapshot(); poco eficaz
  });
});
