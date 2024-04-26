<script lang="ts">
	import { getTextDimensions, type TextDimensions } from '$lib/ts/util';
	import { onMount } from 'svelte';

	let editor: HTMLTextAreaElement;
	let input: string = '';

	let characterRect: TextDimensions;

	let previousText = '';

	let cwd = '$root/';

	$: cursorPos = calculateCursorPosition(previousText + cwd + ' ' + input, characterRect);

	const calculateCursorPosition = (
		text: string,
		charRect: TextDimensions
	): { x: number; y: number } => {
		if (!charRect) return { x: 0, y: 0 };

		const lines = text.split('\n');

		let currentLine = lines[lines.length - 1];

		return { x: currentLine.length * charRect.width, y: charRect.lineHeight * lines.length };
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (document.activeElement != editor) return;

		if (e.key == 'Enter') {
			enter();
		} else if (e.ctrlKey && e.key == 'c') {
			cancel();
		}
	};

	const enter = () => {
		if (input.trim() == 'clear') {
			previousText = '';
		} else {
			previousText += `${cwd} ${input.trim()} \n`;
		}

		input = '';
	};

	const cancel = () => {
		console.log('cancel');
	};

	onMount(() => {
		characterRect = getTextDimensions(editor);
		console.log(characterRect);
	});
</script>

<svelte:document on:keydown={docKeydown} />

<div class="relative flex-grow">
	<textarea
		bind:value={input}
		bind:this={editor}
		on:keydown={(e) => {
			if (e.key == 'Enter') e.preventDefault();
		}}
		class="absolute h-full w-full cursor-default resize-none bg-transparent font-serif outline-none focus:outline-none"
	/>
	<pre
		class="bg-gui-background pointer-events-none absolute h-full w-full p-2 font-serif">{previousText}{cwd} {input}</pre>
	<div
		style="height: {characterRect?.height}px; top: {cursorPos.y - 12}px; left: {cursorPos.x + 3}px;"
		class="bg-gui-foreground-primary absolute w-[2px] animate-flash"
	></div>
</div>
