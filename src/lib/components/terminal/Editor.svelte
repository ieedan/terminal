<script lang="ts">
	import { getTextDimensions, type TextDimensions } from '$lib/ts/util';

	let container: HTMLDivElement;
	let pre: HTMLPreElement;
	let editor: HTMLTextAreaElement;
	let input: string = '';

	let characterRect: TextDimensions;

	let previousText = '';

	let cwd = '$root/';

	let focused = false;

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

	const focus = () => {
		characterRect = getTextDimensions(editor);
		focused = true;
	}
</script>

<svelte:document on:keydown={docKeydown} />

<div class="relative flex-grow overflow-y-auto" bind:this={container}>
	<textarea
		bind:value={input}
		bind:this={editor}
		on:focus={focus}
		on:blur={() => focused = false}
		on:keydown={(e) => {
			if (e.key == 'Enter') e.preventDefault();
		}}
		class="absolute top-0 h-full w-full cursor-default resize-none bg-transparent font-serif outline-none focus:outline-none"
	/>
	<pre
		bind:this={pre}
		class="pointer-events-none absolute top-0 h-full w-full bg-gui-background p-2 font-serif">{previousText}{cwd} {input}</pre>
	<div
		data-show={focused}
		style="height: {characterRect?.height}px; top: {cursorPos.y - 12}px; left: {cursorPos.x + 3}px;"
		class="animate-flash absolute w-[2px] bg-gui-foreground-primary data-[show=false]:hidden"
	></div>
</div>
