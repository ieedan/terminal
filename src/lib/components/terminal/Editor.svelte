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

	let editorCursorPos: number = 0;

	const CURSOR_ANIMATION_DB_TIME = 250;
	let cursorAnimationDebounce: number;
	let cursorCanAnimate = true;

	$: cursorPos = calculateCursorPosition(previousText + cwd + ' ' + input, characterRect, editorCursorPos);

	const calculateCursorPosition = (
		text: string,
		charRect: TextDimensions,
		editorPos: number
	): { x: number; y: number } => {
		if (!charRect) return { x: 0, y: 0 };

		const lines = text.split('\n');

		return { x: (editorPos + cwd.length + 1) * charRect.width, y: charRect.lineHeight * lines.length };
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (document.activeElement != editor) return;

		if (e.key == 'Enter') {
			enter();
		} else if (e.ctrlKey && e.key == 'c') {
			cancel();
		}
	};

	const editorKeydown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') e.preventDefault();

		clearTimeout(cursorAnimationDebounce);
		cursorCanAnimate = false;

		cursorAnimationDebounce = setTimeout(() => {
			cursorCanAnimate = true;
		}, CURSOR_ANIMATION_DB_TIME);

		const target = e.target as HTMLTextAreaElement;

		if (!target) return;

		setTimeout(() => {
			editorCursorPos = target.selectionStart;
		}, 0);
	};

	const enter = () => {
		if (input.trim() == 'clear') {
			previousText = '';
		} else {
			previousText += `${cwd} ${input.trim()} \n`;
		}

		input = '';
		editorCursorPos = 0;
	};

	const cancel = () => {
		console.log('cancel');
	};

	const focus = (e: Event) => {
		e.preventDefault();
		editor.focus({ preventScroll: true });
		characterRect = getTextDimensions(editor);
		focused = true;
	};
</script>

<svelte:document on:keydown={docKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="relative flex-grow overflow-y-auto"
	bind:this={container}
	on:click={focus}
>
	<textarea
		bind:value={input}
		bind:this={editor}
		on:focus={focus}
		on:blur={() => (focused = false)}
		on:keydown={editorKeydown}
		class="absolute top-0 h-full w-full cursor-default resize-none bg-transparent font-serif outline-none focus:outline-none"
	/>
	<pre
		bind:this={pre}
		class="pointer-events-none absolute top-0 w-full bg-gui-background p-2 font-serif">{previousText}{cwd} {input}</pre>
	<div
		data-show={focused}
		data-animate={cursorCanAnimate}
		style="height: {characterRect?.height}px; top: {cursorPos.y - 12}px; left: {cursorPos.x + 3}px;"
		class="data-[animate=true]:animate-flash absolute w-[2px] bg-gui-foreground-primary data-[show=false]:hidden"
	></div>
</div>
