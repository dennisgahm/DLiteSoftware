<script lang="ts">
  import Card from "./CarouselCard.svelte";
  import { onMount, onDestroy } from "svelte";

  export let CarouselCards;
  let currentSlide = 0;
  let intervalId: number | null = null;
  let carouselContainer: HTMLDivElement | null = null;

  function navigateToNextSlide() {
    const n: number = CarouselCards.length;
    currentSlide = (currentSlide + 1) % n;
    scrollToSlide(currentSlide);
  }

  function navigateToPrevSlide() {
    const n: number = CarouselCards.length;
    currentSlide = (currentSlide - 1 + n) % n;
    scrollToSlide(currentSlide);
  }

  function scrollToSlide(index: number) {
    if (carouselContainer) {
      const slideWidth = carouselContainer.offsetWidth;
      carouselContainer.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  }

  function setSlide(index: number) {
    currentSlide = index;
    scrollToSlide(index);
  }

  onMount(() => {
    // Set interval to navigate to the next slide every 5 seconds
    intervalId = setInterval(navigateToNextSlide, 5000);

    // Clean up the interval when the component is unmounted
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

  const n = CarouselCards.length;
</script>

<div>
  <div class="relative w-full overflow-hidden">
    <div
      bind:this={carouselContainer}
      class="flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory"
    >
      {#each CarouselCards as card, i}
        <div
          id={`slide${i}`}
          class="snap-center min-w-full flex justify-center"
        >
          <Card cardDetails={card} />
        </div>
      {/each}
    </div>

    <div class="absolute inset-y-0 left-0 flex items-center">
      <button
        class="text-4xl text-gray-700 hover:text-gray-900 bg-opacity-80 rounded-full p-2 m-3 focus:outline-none"
        on:click={navigateToPrevSlide}
        aria-label="Previous Slide"
      >
        ❮
      </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <button
        class="text-4xl text-gray-700 hover:text-gray-900 bg-opacity-80 rounded-full p-2 m-3 focus:outline-none"
        on:click={navigateToNextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  </div>

  <div class="flex justify-evenly gap-2 mt-4">
    {#each CarouselCards as _, index}
      <span
        class="w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 {index ==
        currentSlide
          ? 'bg-primary scale-125'
          : 'border-secondary border-2'}"
        on:click={() => setSlide(index)}
      />
    {/each}
  </div>
</div>
