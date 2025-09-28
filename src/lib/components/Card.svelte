<script lang="ts">
  import type { ExampleCards } from "./heroCards.js";
  import { theme } from "./store.js";

  export let cardDetails: ExampleCards;
  let mytheme = "light";
  theme.subscribe((t) => {
    mytheme = t;
  });
</script>

<div
  on:click={() => (window.location.href = cardDetails.link)}
  class="hover:cursor-pointer flex flex-col md:flex-row bg-base shadow product-card overflow-hidden transform transition-transform duration-200 hover:scale-105"
>
  <figure class="bg-secondary p-3 flex-shrink-0 w-full md:w-48">
    <img
      src={cardDetails.imgsrc}
      alt={cardDetails.header}
      class=" object-cover w-full h-full"
    />
  </figure>
  <div class="p-4 flex-grow">
    <h2 class="font-semibold mb-2">{cardDetails.header}</h2>
    <p class="text-xs">{cardDetails.content}</p>
  </div>
</div>
