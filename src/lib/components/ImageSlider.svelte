<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import { tick } from "svelte";

  export let imgSrc: string[];

  // Local state for the current slide
  let currentSlide = writable(0);
  let intervalId: number | null = null;
  let carouselContainer: HTMLDivElement | null = null;

  function navigateToNextSlide() {
    currentSlide.update((index) => (index + 1) % imgSrc.length);
    scrollToSlide();
  }

  function navigateToPreviousSlide() {
    currentSlide.update((index) => (index - 1 + imgSrc.length) % imgSrc.length);
    scrollToSlide();
  }

  function scrollToSlide() {
    const slideIndex = $currentSlide;
    if (carouselContainer) {
      const slideWidth = carouselContainer.offsetWidth;
      carouselContainer.scrollTo({
        left: slideWidth * slideIndex,
        behavior: "smooth",
      });
    }
  }

  function setSlide(index: number) {
    currentSlide.set(index);
    scrollToSlide();
  }

  onMount(async () => {
    await tick();
    intervalId = setInterval(navigateToNextSlide, 5000);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

  const n = imgSrc.length;
</script>

<!-- <div class="carousel-wrapper mx-9">
  <div
    class="carousel-container"
    style:transform="translateX(calc(-{100 * $currentSlide}%))"
  >
    {#each imgSrc as src}
      <div class="carousel-item">
        <div class="w-full h-full bg-secondary">
          <div
            class="card-container flex justify-center items-center h-full p-6"
          >
            <img {src} alt={src} />
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="control-buttons">
    <button class="btn btn-circle" on:click={navigateToPreviousSlide}>❮</button>
    <button class="btn btn-circle" on:click={navigateToNextSlide}>❯</button>
  </div>
</div>

<div class="grid grid-flow-col gap-1 mx-9 m-2">
  {#each imgSrc as _, index}
    <div
      class="dot {index == $currentSlide
        ? 'bg-accent scale-100'
        : 'bg-primary scale-90'}"
      on:click={() => setSlide(index)}
    >
      &nbsp;
    </div>
  {/each}
</div>

<style>
  .carousel-container {
    display: flex;
    transition: transform 0.5s ease;
  }

  .carousel-wrapper {
    overflow: hidden;
    position: relative;
    z-index: 1; /* Lower than the header */
  }

  .control-buttons {
    z-index: 5;
    position: absolute;
    left: 5%;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  .carousel-item {
    flex: 0 0 100%;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .header-wrapper {
    z-index: 10;
    position: relative;
  }
</style> -->

<div
  class="flex relative flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden"
>
  <div
    bind:this={carouselContainer}
    class="carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory"
  >
    {#each imgSrc as src}
      <div class="snap-center min-w-full flex justify-center">
        <div class="w-full h-full bg-secondary">
          <div
            class="card-container flex justify-center items-center h-full p-6"
          >
            <img {src} alt={src} />
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="control-buttons absolute inset-y-0 left-0 flex items-center">
    <button
      class="text-2xl md:text-3xl p-2 m-2 md:m-3 focus:outline-none"
      on:click={navigateToPreviousSlide}>❮</button
    >
  </div>
  <div class="control-buttons absolute inset-y-0 right-0 flex items-center">
    <button
      class="text-2xl md:text-3xl l p-2 m-2 md:m-3 focus:outline-none"
      on:click={navigateToNextSlide}>❯</button
    >
  </div>
</div>

<div class="flex justify-evenly gap-2 mt-4">
  {#each imgSrc as _, index}
    <span
      class="w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 {index ==
      $currentSlide
        ? 'bg-primary scale-125'
        : 'border-secondary border-2'}"
      on:click={() => setSlide(index)}
    />
  {/each}
</div>

<style>
  .carousel-wrapper {
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .dot {
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }
</style>
