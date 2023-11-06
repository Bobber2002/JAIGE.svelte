<script>
  import { PAGE, STATS, DOING, VARIABLES } from "./Data.js";
  import RewardFunctions from "./RewardFunctions.js";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Page from "./components/Page.svelte";
  import "./style.css";
  function checkLevelUps() {
    for (let stat in $STATS) {
      STATS.levelUp(stat);
    }
  }

  $: $STATS, checkLevelUps();

  function handleChangePage(e) {
    return PAGE.change(e.detail.page);
  }

  function handleDoing() {
    const action = $DOING.Doing;
    const delay = action.Time * 1000;
    let timer = 0;
    const tickDelay = $VARIABLES.Tickrate;
    if (!action.Name) return;
    let subInterval = setTimeout(function subTick() {
      timer += tickDelay;
      DOING.setData("Progress", Math.floor((timer / delay) * 100) + "%");
      if (timer >= delay) {
        timer = 0;
        console.log("done");
        Object.keys(action.Reward).forEach((rewardType) => {
          action.Reward[rewardType].forEach((reward) => {
            if ($DOING.Doing.Name)
              RewardFunctions[rewardType](reward.Stat, reward.Amount);
          });
        });
      }
      if ($DOING.Doing.Name) subInterval = setTimeout(subTick, tickDelay);
    }, tickDelay);
    // let interval = setTimeout(function tick() {
    //   timer = 0;
    //   console.log("done");
    //   Object.keys(action.Reward).forEach((rewardType) => {
    //     action.Reward[rewardType].forEach((reward) => {
    //       if ($DOING.Doing.Name)
    //         RewardFunctions[rewardType](reward.Stat, reward.Amount);
    //     });
    //   });
    //   if ($DOING.Doing.Name) interval = setTimeout(tick, delay);
    // }, delay);
  }
</script>

<div
  style={$$props.style}
  class="font-default text-dark after:-z-10 after:absolute after:w-full after:h-full after:backdrop-blur-sm after:backdrop-brightness-[.4] after:backdrop-grayscale-[0.45] after:backdrop-saturate-[0.45] w-screen h-screen bg-cover backdrop-blur-2xl bg-center bg-[url(https://cdn.akamai.steamstatic.com/steam/apps/1782380/ss_22b173653dc9eba6998104de8cbf6004e63c879d.1920x1080.jpg?t=1695902614)] flex {$$props.class}"
>
  <Navbar on:changePage={handleChangePage} />
  <Page id="page" on:actionSet={handleDoing}>
    <slot />
  </Page>
</div>
