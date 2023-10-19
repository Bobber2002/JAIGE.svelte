<script>
  import { STATS } from "$lib/Data.js";
  import Reward from "$lib/components/RewardFunctions.js";
  import { Game, Action } from "$lib/index.js";

  let stats;

  function showStats(e) {
    if (e.keyCode == 80) {
      if (stats.style.display == "none") return (stats.style.display = "block");
      stats.style.display = "none";
    }
  }
</script>

<Game class="bg-slate-950">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
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
  <div class="grid place-items-center w-full h-full">
    <Action
      id="kill1"
      Name="Kill"
      Time={1}
      Image="https://res.cloudinary.com/practicaldev/image/fetch/s--OKGj_vhJ--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285827/cdaa974c-cb9e-44cc-a155-fd44092a0462.png"
      Reward={{
        Experience: [{ Stat: "strength", Amount: 10 }],
      }}
    />
  </div>
</Game>
<svelte:window on:keydown|preventDefault={showStats} />
