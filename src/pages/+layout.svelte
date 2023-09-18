<script>
    import "../app.css";
    import Modal from "$lib/components/Modal.svelte";

    import SearchableList from "$lib/components/SearchableList.svelte";
    import MainMenu from "$lib/components/MainMenu.svelte";
    import {MenuItem} from "$lib/components/menu.js";
    import {pets} from '$lib/data/pets.js';

    let modal;
    let searchList;


    function onModalOpen(event) {
        console.log(event);
        document.getElementById("window").classList.add("blur");
        searchList.focus();
    }

    function onModalClose(event) {
        console.log(event);
        document.getElementById("window").classList.remove("blur");
        searchList.reset();
    }

    function onEvent(event) {
        console.log(event)
    }

    const menuItems = [
        new MenuItem("Events", "/events"),
        new MenuItem("Services", "/services"),
    ]

</script>

<div class="content" id="window">
    <MainMenu on:focus={modal.openModal()} items={menuItems}></MainMenu>
    <div class="m-10">
        <slot />
    </div>
</div>

<Modal id="my_modal" on:open={onModalOpen} on:close={onModalClose} bind:this={modal}>
    <SearchableList on:item={onEvent} id="search-input" placeholder="Search for a term" bind:this={searchList} dataprovider={pets} />
</Modal>

