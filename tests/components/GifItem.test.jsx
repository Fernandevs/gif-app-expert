import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem/>', () => {
    const title = 'One Piece';
    const url = 'https://one-piece.com/Luffy.jpg';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={ title } url={ url }/>);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el título en el componente', () => {
        render(<GifItem title={ title } url={ url }/>);

        expect(screen.getByText(title)).toBeTruthy()
    });
});
