<script>
  import { PAGE, STATS } from "./Data.js";
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
</script>

<div
  style={$$props.style}
  class="after:-z-10 after:absolute after:w-full after:h-full after:backdrop-blur-sm after:backdrop-brightness-[.4] after:backdrop-grayscale-[0.45] after:backdrop-saturate-[0.45] w-screen h-screen bg-cover backdrop-blur-2xl bg-center bg-[url(https://cdn.akamai.steamstatic.com/steam/apps/1782380/ss_22b173653dc9eba6998104de8cbf6004e63c879d.1920x1080.jpg?t=1695902614)] flex {$$props.class}"
>
  <Navbar on:changePage={handleChangePage} />
  <Page id="page">
    <slot />
  </Page>
</div>
