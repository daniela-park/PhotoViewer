// import React from 'react';
import { render } from '@testing-library/react';
import App from './App/App';

test('renders React Photo Viewer text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeInTheDocument();
});


// A unit test to check our imageUrl generation code -
// for me, this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.
// The current URL is: https://picsum.photos/id/600/1600/900.jpg `https://picsum.photos/id/${test}/1600/900.jpg`
test('first image URL works', () => {
    const { getByAltText } = render(<App/>);
    const img = getByAltText(/(Image 1$)/i);
    expect(img).toHaveAttribute('src', 'https://picsum.photos/id/600/1600/900.jpg');
});

test('URLs do not include broken images', () => {
    const { getByAltText } = render(<App/>);

    const img = getByAltText(/(Image 1$)/i);
    
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/601/1600/900.jpg');
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/624/1600/900.jpg');
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/632/1600/900.jpg');
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/636/1600/900.jpg');
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/644/1600/900.jpg');
    expect(img).not.toHaveAttribute('src', 'https://picsum.photos/id/647/1600/900.jpg');

});



