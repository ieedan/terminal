<script lang="ts">
    import { faTerminal } from "@fortawesome/pro-regular-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import LightSwitch from "../LightSwitch.svelte";
</script>

<header class="border-b h-9 flex place-items-center px-3 justify-between">
    <FontAwesomeIcon icon={faTerminal} size="sm"/>
    <LightSwitch/>
</header>