<script>
  import GameData from "$lib/Data.json";
  import { createEventDispatcher } from "svelte";
  import Navbar__Button from "./Navbar__Button.svelte";
  import Logo from "$lib/images/logo.png";

  const pages = ["Player", ...Object.keys(GameData.Actions)];

  console.log(pages);

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
  class="relative h-full flex flex-col bg-navbar transition-[width_.5s] overflow-hidden {Open
    ? 'w-44'
    : 'w-12'} z-10 text-light"
>
  <div class="min-w-max bg-white bg-opacity-30 flex gap-2 items-center">
    <div class="h-12 w-12">
      <img src={Logo} alt="" />
    </div>
    <h1 class="text-xl">Idle Game</h1>
  </div>
  <div class="grow flex flex-col gap-1 pt-1">
    {#each pages as page}
      <Navbar__Button Icon Name={page} on:click={() => changePage(page)} />
    {/each}
    <button
      on:click={Toggle}
      class="transition-[all] bg-inherit mt-auto shadow-[inset_15px_0_17px_-7px_rgba(0,0,0,.25)] h-12
      w-full rounded-br-lg text-sm text-black text-opacity-10 font-black grid place-items-center"
    >
      <span class="{Open && 'rotate-180'} text-light transition-[transform]"
        >❯</span
      >
    </button>
  </div>
</nav>
