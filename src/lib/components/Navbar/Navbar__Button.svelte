<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let Name;

  function handleClick() {
    dispatch("click");
  }
</script>

<button
  class="min-w-max h-12 aspect-square flex items-center gap-2 hover:bg-black hover:bg-opacity-20 p-2"
  on:click={handleClick}
>
  <p
    class="h-full aspect-square grid place-items-center rounded-full bg-white bg-opacity-10"
  >
    {Name[0]}
  </p>
  {Name}
</button>
