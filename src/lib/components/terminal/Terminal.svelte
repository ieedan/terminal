<script lang="ts">
	import Editor from './Editor.svelte';
	import Header from './Header.svelte';
</script>

<div
	class="flex h-full w-full flex-col overflow-hidden sm:rounded-xl
     sm:border border-gui-border bg-gui-background shadow-lg sm:h-3/4 sm:w-3/4"
>
	<Header />
	<Editor />
</div>
