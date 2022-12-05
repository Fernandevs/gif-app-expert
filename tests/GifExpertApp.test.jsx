import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp/>);

        expect(container).toMatchSnapshot();
    });

    test('Debe agregar un elemento a las categorías si no existe', () => {
        const onAddCategory = jest.fn();
        render(<GifExpertApp/>);
    });
});
