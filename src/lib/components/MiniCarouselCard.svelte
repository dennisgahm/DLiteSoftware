<script lang="ts">
  import type { ProgramCards } from "./mccpProgramCards";
  let isModalOpen = false;
  export let cardDetails: ProgramCards;

  let dialogRef: HTMLDialogElement | null = null;

  function openModal() {
    isModalOpen = true;
    dialogRef?.showModal();
  }

  function closeModal() {
    isModalOpen = false;
    dialogRef?.close();
  }
</script>

<div
  class="w-full h-full bg-secondary flex justify-center items-center p-3 md:p-4 cursor-pointer shadow-md"
  on:click={openModal}
>
  <img
    class="object-cover max-w-full max-h-full shadow-md"
    src={cardDetails.imgsrc}
    alt={cardDetails.header}
  />
</div>

<dialog bind:this={dialogRef} class="modal">
  <div
    class="modal-box w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-[75vh] md:h-[85vh] flex flex-col justify-between overflow-auto p-4 md:p-6 bg-white shadow-lg"
  >
    <button
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg"
      on:click={closeModal}>✕</button
    >
    <div class="h-full flex flex-col justify-evenly items-center">
      <h1 class="text-lg md:text-2xl lg:text-4xl font-bold mb-4">
        {cardDetails.header}
      </h1>
      <div
        class="flex-0 w-full md:w-2/3 lg:w-1/2 h-2/5 md:h-3/5 flex justify-center items-center mb-4"
      >
        <img
          class="max-w-full max-h-full h-full w-auto shadow-lg"
          src={cardDetails.imgsrc}
          alt={cardDetails.header}
        />
      </div>
      <div class="w-full max-w-sm md:max-w-xl lg:max-w-3xl space-y-3">
        <h3
          class="font-bold underline text-lg md:text-xl lg:text-2xl mb-2 md:mb-3"
        >
          {cardDetails.header}
        </h3>
        {#each cardDetails.content as content}
          <p class="text-sm md:text-lg lg:text-xl mb-1 md:mb-2">{content}</p>
        {/each}
      </div>
    </div>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal-box {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background-color: #fff;
  }
</style>
