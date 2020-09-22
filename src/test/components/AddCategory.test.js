import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCatagory />', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategorias={setCategory} />);

  //realizar antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks(); //limpiar simulaciones
    wrapper = shallow(<AddCategory setCategorias={setCategory} />);
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'hola mundo';

    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategory).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategory y limpiar la caja de texto', () => {
    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategory).toHaveBeenCalled();
    // expect(setCategory).toHaveBeenCalledTimes(1); otra forma de hacerlo

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
