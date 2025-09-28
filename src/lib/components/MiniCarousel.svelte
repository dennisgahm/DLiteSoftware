<script lang="ts">
  import Card from "./MiniCarouselCard.svelte";
  import { onMount, onDestroy } from "svelte";
  import type { ProgramCards } from "./mccpProgramCards";
  import { writable } from "svelte/store";
  import { tick } from "svelte";

  export let CarouselCards: ProgramCards[];

  // Local state for the current slide
  let currentSlide = writable(0);
  let intervalId: number | null = null;
  let carouselContainer: HTMLDivElement | null = null;

  function navigateToNextSlide() {
    currentSlide.update((index) => (index + 1) % CarouselCards.length);
    scrollToSlide();
  }

  function navigateToPreviousSlide() {
    currentSlide.update(
      (index) => (index - 1 + CarouselCards.length) % CarouselCards.length
    );
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

  const n = CarouselCards.length;
</script>

<div
  class="flex flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden"
>
  <div class="w-full md:w-3/5 relative overflow-hidden shadow-md">
    <div
      bind:this={carouselContainer}
      class="carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory"
    >
      {#each CarouselCards as card, index}
        <div class="snap-center min-w-full flex justify-center">
          <Card cardDetails={card}></Card>
        </div>
      {/each}
    </div>
    <div class="control-buttons absolute inset-y-0 left-0 flex items-center">
      <button
        class="text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none"
        on:click={navigateToPreviousSlide}>❮</button
      >
    </div>
    <div class="control-buttons absolute inset-y-0 right-0 flex items-center">
      <button
        class="text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none"
        on:click={navigateToNextSlide}>❯</button
      >
    </div>
  </div>
  <div
    class="w-full md:w-2/5 bg-primary p-4 md:p-6 flex flex-col justify-center text-center md:text-left text-white shadow-lg"
  >
    <h1 class="text-lg md:text-2xl font-bold">
      {#if $currentSlide !== undefined}
        {CarouselCards[$currentSlide].header}
      {/if}
    </h1>
    {#if $currentSlide !== undefined}
      {#each CarouselCards[$currentSlide].content as content}
        <p class="text-xs md:text-base mt-2">{content}</p>
      {/each}
    {/if}
  </div>
</div>

<div class="flex justify-evenly gap-2 mt-4">
  {#each CarouselCards as _, index}
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
