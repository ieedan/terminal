<script lang="ts">
	import { faTerminal } from '@fortawesome/pro-regular-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import LightSwitch from '../LightSwitch.svelte';
</script>

<header class="flex h-9 place-items-center justify-between border-b px-3">
	<FontAwesomeIcon icon={faTerminal} size="sm" />
	<LightSwitch />
</header>
