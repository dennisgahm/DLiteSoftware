<script lang="ts">
  export let header: string;
  export let content: string;
  export let imgsrc: string;
</script>

<div class="w-full relative bg-secondary">
  <div
    class="card-container flex justify-center items-center flex-1 p-4 md:p-6 cursor-pointer"
  >
    <img
      src={imgsrc}
      alt=""
      class=" shadow-lg max-w-full h-full object-cover"
    />
    <div
      class="card-details bg-white bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0"
    >
      <h3 class="font-bold underline text-sm md:text-lg">
        {header}
      </h3>
      <p class="text-xs md:text-sm whitespace-pre-line">{content}</p>
    </div>
  </div>
</div>

<style>
  .card-container:hover .card-details {
    opacity: 100;
  }
</style>
