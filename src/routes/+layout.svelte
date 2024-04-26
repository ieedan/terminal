<script lang="ts">
	import '../app.pcss';
    import '@fontsource/geist-sans';
    import '@fontsource/geist-mono';
	import { ModeWatcher, mode, userPrefersMode } from 'mode-watcher';
	import { onMount } from 'svelte';

    onMount(() => {
        console.log($mode);
        console.log($userPrefersMode);
    })
</script>

<ModeWatcher/>
<slot/>
