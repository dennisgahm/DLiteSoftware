<script lang="ts">
  import { redirect } from "@sveltejs/kit";
  import Carousel from "./Carousel.svelte";
  import { CarouselCards } from "./heroCards";
</script>

<div
  class="flex flex-1 flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-24 space-y-6 md:space-y-0 md:space-x-6"
>
  <div
    class="flex flex-col items-center md:items-start md:p-12 space-y-4 md:flex-1 max-w-lg md:max-w-none"
  >
    <h1
      class="font-bold text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 text-secondary"
    >
      Welcome!
    </h1>
    <p class="text-lg md:text-2xl font-light">
      We offer <b class="underline">software solutions</b> that create value, efficiency,
      and convenience.
    </p>
    <div class="space-y-3">
      <h3 class="font-semibold text-lg md:text-xl">Past Projects.</h3>
      <ul class="text-base md:text-lg font-light space-y-2">
        <li>
          <span class="underline">Extracting textbook information</span> from a
          college website and organizing it in an
          <span class="underline">Excel</span> file.
        </li>
        <li>
          <span class="underline">Automating chemistry lab equipment</span> to
          perform experiments
          <span class="font-semibold">never-before-possible</span>
        </li>
      </ul>
    </div>
    <a href="/our-products">
      <button
        class="border-none p-4 font-bold text-lg md:text-xl mt-6 bg-[#0096FF] hover:bg-primary text-accent"
      >
        Our Products
      </button>
    </a>
  </div>
  <div
    class="flex flex-1 justify-center items-center w-full max-w-lg md:max-w-none"
  >
    <Carousel {CarouselCards}></Carousel>
  </div>
</div>
