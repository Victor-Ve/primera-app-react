import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFecthGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('dragon ball')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar una arreglo de img y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('goku')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(15);
    expect(loading).toBe(false);
  });
});
