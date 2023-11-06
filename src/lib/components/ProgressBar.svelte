<script>
  import { DOING, VARIABLES } from "$lib/Data.js";

  let Bar;
  let countdown;

  export let Time = 5;
  export let Active;

  function stop() {
    clearTimeout(countdown);
    Bar.style.transition = "width 0s linear";
    Bar.style.width = "0%";
  }

  function run() {
    if (!Active) return;
    countdown = setTimeout(function tick() {
      if (Bar && Bar.style.width == "100%") {
        Bar.style.transition = "width 0s linear";
        Bar.style.width = "0%";
      } else if (Bar) {
        Bar.style.transition = `width ${Time / $VARIABLES.Tickrate}s linear`;
        Bar.style.width = $DOING.Data.Progress;
      }
      countdown = setTimeout(tick, $VARIABLES.Tickrate);
    }, 0);
  }

  function change() {
    run();
    return {
      update(Active) {
        if (Active) {
          return run();
        } else {
          return stop();
        }
      },
    };
  }
</script>

<div use:change={Active} class=" relative w-full h-2 bg-gray-400">
  <div bind:this={Bar} class="ProgressBar h-full absolute w-0" />
</div>

<style>
  .ProgressBar {
    background-image: repeating-linear-gradient(
      65deg,
      rgb(0, 140, 0) 0 15px,
      rgb(0, 160, 0) 0 20px
    );
    transition: width 1s linear;
  }
</style>
