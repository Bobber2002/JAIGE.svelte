<script>
  import { DOING, STATS } from "$lib/Data.js";
  import { createEventDispatcher } from "svelte";

  import ProgressBar from "./ProgressBar.svelte";

  export let data = new Object();
  export let unlocked = false;

  let Active = $DOING.Doing.Name == data.Name && true;
  $: Active = $DOING.Doing.Name == data.Name && true;

  const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if unlocked}
  <!-- content here -->
  <div
    id={data.Name}
    class="bg-primary flex flex-col h-full w-full rounded-lg overflow-hidden text-gray-100 transition-transform hover:transform hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_8px_6px_rgba(255,255,255,.25)]"
    on:click={() => {
      DOING.set({ ...data });
      DOING.resetData();
      dispatch("actionSet");
    }}
  >
    <div
      class="h-1/5 bg-black bg-opacity-20 flex px-4 gap-2 shadow-[0px_0px_12px_0px_rgba(255,255,255,.25)]"
    >
      <h3 class="grow flex items-center text-xl whitespace-nowrap font-bold">
        {data.Name}
      </h3>
      <h4 class="flex items-center justify-end italic">
        2xp / {data.Time}s
      </h4>
    </div>
    <div class="grow flex justify-between items-center p-4">
      <img
        src={data.Image}
        alt={data.Name + " image"}
        draggable="false"
        class="w-24 aspect-auto object-cover"
      />
    </div>
    <ProgressBar Time={data.Time} {Active} />
  </div>
{:else}
  <!-- content here -->
  <div
    id={data.Name}
    class="after:absolute after:w-full after:h-full after:bg-black after:bg-opacity-60 relative bg-primary flex flex-col items-center h-full w-full rounded-lg overflow-hidden text-gray-100 transition-transform hover:transform hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_8px_6px_rgba(255,255,255,.25)]"
  >
    <div
      class="h-1/5 bg-black bg-opacity-20 w-full flex px-4 gap-2 shadow-[0px_0px_12px_0px_rgba(255,255,255,.25)]"
    >
      <h3 class="grow flex items-center text-xl whitespace-nowrap font-bold">
        Locked
      </h3>
    </div>
    {#each data.Requirements.Stats as stat}
      <p class="text-dark font-black z-10 grow flex items-center">
        {stat.Stat}: {$STATS[stat.Stat].Level} / {stat.Amount}
      </p>
    {/each}
  </div>
{/if}
