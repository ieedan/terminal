<script lang="ts">
	import Editor from './Editor.svelte';
	import Header from './Header.svelte';
</script>

<div
	class="border-gui-border bg-gui-background flex h-full w-full flex-col
     overflow-hidden rounded-xl border shadow-lg sm:h-3/4 sm:w-3/4"
>
	<Header />
	<Editor />
</div>
