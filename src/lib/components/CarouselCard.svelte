<script lang="ts">
  import type { ExampleCards } from "./heroCards";
  let isModalOpen = false;
  let dialogRef: HTMLDialogElement | null = null;
  export let cardDetails: ExampleCards;

  function openModal() {
    isModalOpen = true;
    dialogRef?.showModal();
  }

  function closeModal() {
    isModalOpen = false;
    dialogRef?.close();
  }
</script>

<div class="w-full h-full bg-secondary">
  <div
    class="card-container flex justify-center items-center h-full p-4 md:p-6 cursor-pointer"
    on:click={openModal}
  >
    <img
      src={cardDetails.imgsrc}
      alt={cardDetails.header}
      class=" shadow-lg max-w-full max-h-64 md:max-h-80 object-cover"
    />
    <div
      class="card-details bg-base-100 bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0"
    >
      <h3 class="font-bold underline text-sm md:text-lg">
        <a href={cardDetails.link} class="hover:text-blue-500"
          >{cardDetails.header}</a
        >
      </h3>
      <p class="text-xs md:text-sm">{cardDetails.content}</p>
    </div>
  </div>
</div>

<dialog
  bind:this={dialogRef}
  class="modal p-0 bg-black bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"
>
  <div
    class="modal-box max-w-3xl w-full mx-4 md:mx-8 p-4 md:p-8 bg-white shadow-md relative border border-gray-300"
    style="border-radius: 0;"
  >
    <button
      class="btn btn-sm btn-ghost absolute right-2 top-2 text-lg"
      on:click={closeModal}
      >✕
    </button>
    <div class="h-full flex flex-col justify-between items-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {cardDetails.header}
      </h1>
      <div
        class="w-full md:w-2/3 lg:w-1/2 flex justify-center items-center mb-4"
      >
        <img
          class="max-w-full max-h-full h-full w-auto shadow-none"
          src={cardDetails.imgsrc}
          alt={cardDetails.header}
        />
      </div>
      <div>
        <h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-2">
          <a href={cardDetails.link} class="hover:text-blue-500">
            {cardDetails.header}
          </a>
        </h3>
        <p class="text-sm md:text-lg lg:text-xl">{cardDetails.content}</p>
      </div>
    </div>
  </div>
</dialog>

<style>
  .card-container:hover .card-details {
    opacity: 100;
  }
</style>
