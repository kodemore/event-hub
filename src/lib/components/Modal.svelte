<script scope="module">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let id="modal";
    export function openModal() {
        let element = document.getElementById(id);
        element.showModal();
        dispatch("open", {id, element});
        console.log(`Modal ${id} opened`);
    }
    export function closeModal() {
        let element = document.getElementById(id);
        element.close();
        dispatch("close", {id, element});
        console.log(`Modal ${id} closed`);
    }
</script>
<dialog class="modal" id="{id}" on:close={closeModal}>
    <div class="modal-box t-10">
        <slot/>
    </div>
</dialog>
