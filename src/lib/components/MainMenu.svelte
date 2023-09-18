<script>
   import {createEventDispatcher} from "svelte";
   import {MenuItem} from "./menu.js";
   import { Icon, Home } from "svelte-hero-icons";

   const dispatch = createEventDispatcher();

   export let items = [
        new MenuItem('main-menu-1', 'Menu Item 1', '#'),
    ];

    function onFocus(event) {
        dispatch("focus", event);
    }
</script>
<style>
    .bg-near-black {
        background-color: #111;
    }
</style>
<div class="bg-near-black p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Menu -->
        <ul class="flex space-x-6">
            <li class="py-2 px-4 rounded-full text-gray-300 hover:bg-gray-700">
                <a href="/">
                    <Icon class="h-6 w-6" src={Home} solid/>
                </a>
            </li>
            {#each items as item}
                {#if item.active}
                    <li class="py-2 px-4 rounded-full text-gray-300 bg-gray-700">
                        <a href="{item.url}">{item.name}</a>
                    </li>
                {:else}
                    <li class="py-2 px-4 rounded-full text-gray-300 hover:bg-gray-700">
                        <a href="{item.url}">{item.name}</a>
                    </li>
                {/if}
            {/each}

        </ul>
        <!-- Search Bar -->
        <div class="relative" on:click={onFocus}>
            <input disabled type="text" placeholder="Search"
                   class="rounded-full pl-10 py-2 pr-4 bg-gray-800 text-gray-300 outline-none">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="h-6 w-6 text-gray-400" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
        </div>
    </div>
</div>
