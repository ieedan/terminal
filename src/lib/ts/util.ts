import lineHeight from "line-height";

export type TextDimensions = {
	width: number;
	height: number;
	lineHeight: number;
};

export const getTextDimensions = (element: HTMLElement): TextDimensions => {
	const style = window.getComputedStyle(element);
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	if (!ctx) return { width: 0, height: 0, lineHeight: 0 };
	ctx.font = style.font;

	// Create a temporary span element to measure text dimensions
	const span = document.createElement('span');

	// Use the same font and style as the element
	span.style.font = window.getComputedStyle(element).font;
	span.style.lineHeight = window.getComputedStyle(element).lineHeight;

	span.textContent = 'w';

	// Append to body to measure dimensions
	document.body.appendChild(span);

	const height = span.offsetHeight; // Line height or height of the character

	const lh = lineHeight(span);

	// Clean up by removing the span from the body
	document.body.removeChild(span);

	return { width: ctx.measureText("g").width, height, lineHeight: lh  };
};
