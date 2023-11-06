<script>
  import { PAGE } from "$lib/Data.js";
  import GameData from "$lib/Data.json";
  import { Action } from "$lib/index.js";
  import Player from "./Player.svelte";
</script>

<main id={$$props.id} class="grow h-full flex flex-col">
  <h2
    class="bg-color min-h-[3rem] flex items-center px-3 uppercase font-bold text-xl"
  >
    {$PAGE}
  </h2>
  <div class="h-full w-full py-4 phone:px-4 px-6 overflow-y-auto overflow-x-clip">
    {#if $PAGE == "Player"}
      <Player />
    {:else}
      <div
        class="grid place-items-center w-full min-h-full grow xl:grid-cols-[repeat(6,calc((100%-5rem)/6))] lg:grid-cols-[repeat(5,calc((100%-4rem)/5))] md:grid-cols-[repeat(4,calc((100%-3rem)/4))] sm:grid-cols-[repeat(3,calc((100%-2rem)/3))] phone:grid-cols-[repeat(2,calc((100%-1rem)/2))] auto-rows-[12rem] gap-4"
      >
        {#each GameData.Actions[$PAGE] as action}
          <Action data={action} on:actionSet/>
        {/each}
      </div>
    {/if}
  </div>
</main>
