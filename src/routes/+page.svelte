<script>
  import { PAGE, STATS } from "$lib/Data.js";
  import { Game, Action } from "$lib/index.js";
  import GameData from "$lib/Data.json";
  let stats;

  console.log($STATS);
  function showStats(e) {
    if (e.keyCode == 80) {
      if (stats.style.display == "none") return (stats.style.display = "block");
      stats.style.display = "none";
    }
  }
</script>

<Game>
  <div bind:this={stats} class="absolute hidden bg-white z-50">
    <ul>
      {#each Object.keys($STATS) as stat}
        <li>
          <p class="underline">
            {stat}
          </p>
          {#each Object.keys($STATS[stat]) as info}
            {info} = {$STATS[stat][info]}
            <br />
          {/each}
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="grid place-items-center w-full grow overflow-y-auto grid-cols-[repeat(3,1fr)] auto-rows-max gap-4 p-4"
  >
    {#each GameData.Actions[$PAGE] as action}
      <Action
        id={action.Name}
        Name={action.Name}
        Time={action.Time}
        Image={action.Image}
        Reward={action.Reward}
      />
    {/each}
  </div>
</Game>
<svelte:window on:keydown|preventDefault={showStats} />
