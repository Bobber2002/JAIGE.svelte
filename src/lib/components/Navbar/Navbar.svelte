<script>
  import GameData from "$lib/Data.json";
  import { createEventDispatcher } from "svelte";
  import Item from "./Item.svelte";

  const dispatch = createEventDispatcher();

  function changePage(page) {
    dispatch("changePage", { page: page });
  }

  let Open = false;

  function Toggle() {
    Open = !Open;
  }
</script>

<nav
  class="relative h-full flex flex-col bg-gray-600 transition-[width_.5s] overflow-hidden {Open
    ? 'w-44'
    : 'w-12'} z-10 text-gray-300"
>
  <div class="min-w-max bg-white bg-opacity-30 flex gap-2 items-center">
    <div class="h-12 w-12">
      <svg
        height="3rem"
        width="3rem"
        version="1.1"
        viewBox="0 0 135 135"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="67.7"
          cy="71.5"
          r="33"
          fill="none"
          stroke="#000"
          stroke-width="6"
        />
        <path
          d="m51.9 11.9h31.7l3.07 11.4.944.391c19.4 8.03 32 26.9 32 47.9 0 2.26-.149 4.53-.445 6.77l-.133 1.01 8.37 8.37-15.8 27.4-11.4-3.06-.809.623c-9.06 6.95-20.2 10.7-31.6 10.7-11.4 6e-5-22.5-3.77-31.6-10.7l-.81-.623-11.4 3.06-15.8-27.4 8.37-8.37-.133-1.01c-.296-2.25-.445-4.51-.445-6.77.000141-21 12.6-39.9 32-47.9l.944-.391z"
          fill="none"
          stroke="#000"
          stroke-width="4"
        />
        <path
          id="b"
          d="m64.7 30.6v24h-5.08l8.08 14 8.08-14h-5.08l-.000265-24h-5.99"
        />
        <use id="a" transform="rotate(120 67.7 71.5)" xlink:href="#b" />
        <use transform="rotate(120 67.7 71.5)" xlink:href="#a" />
      </svg>
    </div>
    <h1 class="text-xl">Idle Game</h1>
  </div>
  <div class="grow flex flex-col gap-1 pt-1">
    {#each Object.keys(GameData.Actions) as pageName}
      <Item Icon Name={pageName} on:click={() => changePage(pageName)} />
    {/each}
    <button
      on:click={Toggle}
      class="transition-[all] bg-inherit mt-auto shadow-[inset_15px_0_17px_-7px_rgba(0,0,0,.25)] h-12
      w-full rounded-br-lg text-sm text-black text-opacity-40 font-black grid place-items-center"
    >
      <span class="{Open && 'rotate-180'} transition-[transform]">❯</span>
    </button>
  </div>
</nav>
