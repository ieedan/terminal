<script lang="ts">
	import { setMode, mode } from 'mode-watcher';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faSunBright, faMoon } from '@fortawesome/pro-solid-svg-icons';

	const toggle = () => {
		if ($mode == 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	};
</script>

<button
	role="checkbox"
	on:click={toggle}
	type="button"
	class="border-border group relative h-6 w-10 rounded-2xl border bg-gui-background shadow-sm"
	aria-checked={$mode == 'dark'}
>
	<div
		class="absolute left-[1px] top-[1px] flex size-5 place-items-center justify-center
        rounded-full bg-gui-foreground-primary text-gui-background transition-all group-aria-checked:translate-x-4"
	>
		{#if $mode == 'light'}
			<FontAwesomeIcon icon={faSunBright} size="xs" />
		{:else}
			<FontAwesomeIcon icon={faMoon} size="xs" />
		{/if}
	</div>
</button>
