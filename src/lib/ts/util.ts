import lineHeight from "line-height";

export type TextDimensions = {
	width: number;
	height: number;
	lineHeight: number;
};

export const getTextDimensions = (element: HTMLElement): TextDimensions => {
	// Create a temporary span element to measure text dimensions
	const span = document.createElement('span');

	// Use the same font and style as the element
	span.style.font = window.getComputedStyle(element).font;
	span.style.lineHeight = window.getComputedStyle(element).lineHeight;

	// Insert a character that tends to have full height
	span.textContent = 'g';

	// Append to body to measure dimensions
	document.body.appendChild(span);

	// Get width and height
	const width = span.offsetWidth; // Width of one character
	const height = span.offsetHeight; // Line height or height of the character

	const lh = lineHeight(span);

	// Clean up by removing the span from the body
	document.body.removeChild(span);

	return { width, height, lineHeight: lh  };
};
