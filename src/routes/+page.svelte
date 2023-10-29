<script>
  import { STATS } from "$lib/Data.js";
  import { Game } from "$lib/index.js";
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
</Game>
<svelte:window on:keydown|preventDefault={showStats} />
