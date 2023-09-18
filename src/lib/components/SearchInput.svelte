<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function _onChange(event) {
        dispatch("change", {"value": document.getElementById(id).value, "id": id})
    }

    function _onKeyPressed(event) {
        dispatch("key", {"keyCode": event.keyCode, "value": document.getElementById(id).value, "id": id})
    }
    export let id;
    export let placeholder;

    export function focus() {
        document.getElementById(id).focus();
    }

    export function reset() {
        document.getElementById(id).value = "";
    }
</script>

<div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
    <input type="text" placeholder="{placeholder}" id="{id}" on:keydown={_onKeyPressed} on:keyup={_onChange} on:change={_onChange} class="searchbox input input-ghost w-full" />
    <slot />
</div>
