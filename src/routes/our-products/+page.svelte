<script lang="ts">
  import { ProductCards } from "$lib/components/heroCards";
  import Card from "$lib/components/Card.svelte";
</script>

<div class="px-4 md:px-12 lg:px-24 my-6">
  <h1 class="font-bold text-2xl md:text-3xl text-secondary mb-6">
    Our Products
  </h1>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-9 py-6"
  >
    {#each ProductCards as card}
      <Card cardDetails={card}></Card>
    {/each}
  </div>
</div>
