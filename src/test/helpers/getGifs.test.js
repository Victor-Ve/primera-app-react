import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
  test('debe traer 15 elementos', async () => {
    const gifs = await getGifs('one punch');

    expect(gifs.length).toBe(15);
  });
  test('Debe devolver 0 si no mando ningun argumento+', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
