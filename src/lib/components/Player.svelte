<script>
  import { STATS } from "$lib/Data.js";
</script>

<div class="flex flex-col">
  <div
    class="w-full h-full grid gap-4 grid-cols-2 grid-rows-[repeat(4,1fr)] sm:grid-cols-7 sm:grid-rows-5 [&>*]:rounded-lg [&>*]:bg-gray-500"
  >
    <div
      class="bg-green-300 sm:col-span-2 sm:row-span-3 row-span-3 p-6 grid place-items-center"
    >
      <div
        class="h-full w-full relative [&>*]:absolute [&>*]:translate-x-[-50%] [&>*]:translate-y-[-50%] [&>*]:bg-black [&>*]:bg-opacity-20 sm:[&>*]:max-h-[calc(100%/6)] sm:[&>*]:min-h-[calc(100%/6)] [&>*]:max-h-[calc(100%/8)] [&>*]:min-h-[calc(100%/8)] [&>*]:aspect-square [&>*]:flex"
      >
        <div
          class="top-[10.5%] left-[calc(50%-20%)] flex flex-col justify-between items-center"
        >
          <p>hat</p>
        </div>
        <div
          class="top-[10.5%] left-[calc(50%+20%)] flex flex-col justify-between items-center"
        >
          <p>face</p>
        </div>
        <div
          class="top-[33.9%] left-[calc(50%-40%)] flex flex-col justify-between items-center"
        >
          <p>over torso</p>
        </div>
        <div
          class="top-[33.9%] left-1/2 flex flex-col justify-between items-center"
        >
          <p>torso</p>
        </div>
        <div
          class="top-[33.9%] left-[calc(50%+40%)] flex flex-col justify-between items-center"
        >
          <p>back</p>
        </div>
        <div
          class="top-[64.9%] left-[calc(50%-40%)] flex flex-col justify-between items-center"
        >
          <p>belt</p>
        </div>
        <div
          class="top-[64.9%] left-1/2 flex flex-col justify-between items-center"
        >
          <p>legs</p>
        </div>
        <div
          class="top-[64.9%] left-[calc(50%+40%)] flex flex-col justify-between items-center"
        >
          <p>hands</p>
        </div>
        <div
          class="top-[92%] left-[calc(50%-40%)] flex flex-col justify-between items-center"
        >
          <p>left hand</p>
        </div>
        <div
          class="top-[92%] left-1/2 flex flex-col justify-between items-center"
        >
          <p>shoes</p>
        </div>
        <div
          class="top-[92%] left-[calc(50%+40%)] flex flex-col justify-between items-center"
        >
          <p>right hand</p>
        </div>
      </div>
    </div>
    <div
      class="bg-green-300 p-2 sm:col-span-5 sm:row-span-3 row-span-3 grid place-items-center sm:grid-rows-5 sm:grid-cols-11 grid-cols-5 grid-rows-11 gap-2 [&>*]:bg-black [&>*]:bg-opacity-20 [&>*]:rounded-lg [&>*]:aspect-square [&>*]:w-full"
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div class="bg-green-300 col-span-full sm:row-span-2 p-4">
      {#each Object.keys($STATS) as stat}
        <p class="underline">
          {stat}
        </p>
        <div class="flex flex-col w-full">
          <p>Level: {$STATS[stat]["Level"]}</p>
          <div
            style="--progress: {($STATS[stat]['Experience'] /
              $STATS[stat]['Experience Needed']) *
              100}%;"
            class="ProgressBar flex justify-center items-center text-black text-opacity-80 text-xs font-bold bg-black bg-opacity-20 relative overflow-hidden w-full h-3 rounded-full before:left-0 before:w-full before:h-full before:absolute"
          >
            <p class="z-10">
              {$STATS[stat]["Experience"]} / {$STATS[stat]["Experience Needed"]}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="grow" />
</div>

<style>
  .ProgressBar::before {
    background-image: repeating-linear-gradient(
      65deg,
      rgb(0, 140, 0) 0 15px,
      rgb(0, 160, 0) 0 20px
    );
    transition: width 50ms linear;
    width: var(--progress);
  }
</style>
