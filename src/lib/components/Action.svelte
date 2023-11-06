<script>
  import { DOING } from "$lib/Data.js";
  import { createEventDispatcher } from "svelte";

  import ProgressBar from "./ProgressBar.svelte";

  export let data = new Object();

  let Active = $DOING.Doing.Name == data.Name && true;
  $: Active = $DOING.Doing.Name == data.Name && true;

  const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id={data.Name}
  class="bg-gray-500 flex flex-col h-full w-full rounded-lg overflow-hidden text-gray-100 transition-transform hover:transform hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_8px_6px_rgba(255,255,255,.25)]"
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
