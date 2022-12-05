import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs.js';


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Piece';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Luffy',
                url: 'http://localhost:8080/luffy.jpg'
            },
            {
                id: '123',
                title: 'Chopper',
                url: 'http://localhost:8080/chopper.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});