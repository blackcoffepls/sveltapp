<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    export let items;
    export let activeItem;





</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
    }

    li {
        margin: 0 16px;
        font-size: 20px;
        cursor: pointer;
    }

    .active {
        color: red;
        border-bottom: 2px solid red;
    }
    .tabs {
        margin: 30px;
    }
</style>