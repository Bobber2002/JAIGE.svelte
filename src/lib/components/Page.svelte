<script>
  import { PAGE } from "$lib/Data.js";
</script>

<main id={$$props.id} class="grow h-full flex flex-col">
  <h2 class="bg-red-800 min-h-[3rem] flex items-center px-3 uppercase">
    {$PAGE}
  </h2>
  <slot />
</main>
