<script>
  import RewardFunctions from "./RewardFunctions.js";
  let Bar;

  let countdown;

  export let Time = 5;
  export let Active = false;
  export let Reward;

  function stop() {
    clearTimeout(countdown);
    Bar.style.transition = "width 0s linear";
    Bar.style.width = "0%";
  }

  function run() {
    if (!Active) return;
    let cooldown = Time * 1000;
    countdown = setTimeout(function tick() {
      if (Bar.style.width == "100%") {
        Object.keys(Reward).forEach((rewardType) => {
          Reward[rewardType].forEach((reward) => {
            RewardFunctions[rewardType](reward.Stat, reward.Amount);
          });
        });
        Bar.style.transition = "width 0s linear";
        Bar.style.width = "0%";
        cooldown = 10;
      } else {
        Bar.style.transition = `width ${Time}s linear`;
        Bar.style.width = "100%";
        cooldown = Time * 1000 - 10;
      }
      countdown = setTimeout(tick, cooldown);
    }, 0);
  }

  function change(node, Active) {
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
      darkgreen 0 15px,
      green 0 20px
    );
    transition: width 1s linear;
  }
</style>
