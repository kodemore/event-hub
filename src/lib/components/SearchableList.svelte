<script>
    import SearchInput from "./SearchInput.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let dataprovider = [];
    export let id;
    export let placeholder;
    let searchInput;
    $: items = dataprovider;
    $: term = "";
    $: selectedItem = null;

    function onKey(event) {
        event.stopPropagation();
        event.preventDefault();
        let keyCode = event.detail.keyCode
        if (keyCode == 38) {
            if (selectedItem == null) {
                selectedItem = 0;
            }
            selectedItem--;
            if (selectedItem < 0) {
                selectedItem = 0;
            }
            console.log(selectedItem);
            document.querySelectorAll(".menu > li > a").forEach((item, index) => {
                if (index == selectedItem) {
                    item.classList.add("selected");
                } else {
                    item.classList.remove("selected");
                }
            });
            document.querySelectorAll(".menu > li > a").forEach((item, index) => {
                if (index == selectedItem) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
            document.getElementById(items[selectedItem].id).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        } else if (keyCode == 40) {
            if (selectedItem == null) {
                selectedItem = 0;
            }
            selectedItem++;
            if (selectedItem > items.length - 1) {
                selectedItem = items.length - 1;
            }
            console.log(selectedItem);
            document.querySelectorAll(".menu > li > a").forEach((item, index) => {
                if (index == selectedItem) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
            document.getElementById(items[selectedItem].id).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        } else if (keyCode == 13) {
            dispatch("item", {
                id: items[selectedItem].id,
                item: items[selectedItem]
            });
        }
    }
    function onChange(event) {
        term = event.detail.value;
        items = dataprovider.filter(item => (item.title.toLowerCase().includes(term.toLowerCase()) || item.type.toLowerCase().includes(term.toLowerCase())));
    }

    function onItemClicked(event) {
        dispatch("item", {
            id: event.currentTarget.id,
            item: dataprovider.find(item => item.id == event.currentTarget.id)
        });
    }

    export function focus() {
        searchInput.focus();
    }

    export function reset() {
        searchInput.reset();
    }
</script>

<SearchInput id="{id}-search" placeholder="{placeholder}" on:key={onKey} on:change={onChange} bind:this={searchInput} />
<div style="max-height: 400px; overflow: scroll">
{#if items}
<ul class="menu w-full rounded-box" id="{id}-list">
    {#each items as item}
        <li class="mt-2">
            <a class="bg-accent-content/5 select-none" id="{item.id}" on:click={onItemClicked}>
                <span>
                {#if term}
                    {@html item.title.replace(new RegExp(term, "gi"), (match) => `<strong class="p-0 m-0"><u>${match}</u></strong>`)}
                {:else}
                    {item.title}
                {/if}
                </span>
                {#if item.type.toLowerCase() === "service"}
                    <span class="badge badge-outline badge-accent ml-auto">Service</span>
                {/if}
                {#if item.type.toLowerCase() === "event"}
                    <span class="badge badge-outline badge-primary ml-auto">Event</span>
                {/if}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 ml-auto" viewBox="0 0 16 16">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                </svg>
            </a>
        </li>
    {/each}
</ul>
{/if}
</div>
