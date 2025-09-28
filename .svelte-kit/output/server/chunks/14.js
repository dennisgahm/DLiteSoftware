import { c as create_ssr_component, a as add_attribute, b as escape, e as each, d as subscribe, o as onDestroy, v as validate_component } from "./ssr.js";
import { w as writable } from "./index.js";
const css$1 = {
  code: "dialog.svelte-1qkvmh5::backdrop{background-color:rgba(0, 0, 0, 0.6)}.modal-box.svelte-1qkvmh5{box-shadow:0 10px 15px rgba(0, 0, 0, 0.1);border-radius:0.5rem;background-color:#fff}",
  map: '{"version":3,"file":"MiniCarouselCard.svelte","sources":["MiniCarouselCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">let isModalOpen = false;\\nexport let cardDetails;\\nlet dialogRef = null;\\nfunction openModal() {\\n    isModalOpen = true;\\n    dialogRef?.showModal();\\n}\\nfunction closeModal() {\\n    isModalOpen = false;\\n    dialogRef?.close();\\n}\\n<\/script>\\n\\n<div\\n  class=\\"w-full h-full bg-secondary flex justify-center items-center p-3 md:p-4 cursor-pointer shadow-md\\"\\n  on:click={openModal}\\n>\\n  <img\\n    class=\\"object-cover max-w-full max-h-full shadow-md\\"\\n    src={cardDetails.imgsrc}\\n    alt={cardDetails.header}\\n  />\\n</div>\\n\\n<dialog bind:this={dialogRef} class=\\"modal\\">\\n  <div\\n    class=\\"modal-box w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-[75vh] md:h-[85vh] flex flex-col justify-between overflow-auto p-4 md:p-6 bg-white shadow-lg\\"\\n  >\\n    <button\\n      class=\\"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg\\"\\n      on:click={closeModal}>✕</button\\n    >\\n    <div class=\\"h-full flex flex-col justify-evenly items-center\\">\\n      <h1 class=\\"text-lg md:text-2xl lg:text-4xl font-bold mb-4\\">\\n        {cardDetails.header}\\n      </h1>\\n      <div\\n        class=\\"flex-0 w-full md:w-2/3 lg:w-1/2 h-2/5 md:h-3/5 flex justify-center items-center mb-4\\"\\n      >\\n        <img\\n          class=\\"max-w-full max-h-full h-full w-auto shadow-lg\\"\\n          src={cardDetails.imgsrc}\\n          alt={cardDetails.header}\\n        />\\n      </div>\\n      <div class=\\"w-full max-w-sm md:max-w-xl lg:max-w-3xl space-y-3\\">\\n        <h3\\n          class=\\"font-bold underline text-lg md:text-xl lg:text-2xl mb-2 md:mb-3\\"\\n        >\\n          {cardDetails.header}\\n        </h3>\\n        {#each cardDetails.content as content}\\n          <p class=\\"text-sm md:text-lg lg:text-xl mb-1 md:mb-2\\">{content}</p>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n</dialog>\\n\\n<style>\\n  dialog::backdrop {\\n    background-color: rgba(0, 0, 0, 0.6);\\n  }\\n\\n  .modal-box {\\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\\n    border-radius: 0.5rem;\\n    background-color: #fff;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4DE,qBAAM,UAAW,CACf,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACrC,CAEA,yBAAW,CACT,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC1C,aAAa,CAAE,MAAM,CACrB,gBAAgB,CAAE,IACpB"}'
};
const MiniCarouselCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardDetails } = $$props;
  let dialogRef = null;
  if ($$props.cardDetails === void 0 && $$bindings.cardDetails && cardDetails !== void 0) $$bindings.cardDetails(cardDetails);
  $$result.css.add(css$1);
  return `<div class="w-full h-full bg-secondary flex justify-center items-center p-3 md:p-4 cursor-pointer shadow-md"><img class="object-cover max-w-full max-h-full shadow-md"${add_attribute("src", cardDetails.imgsrc, 0)}${add_attribute("alt", cardDetails.header, 0)}></div> <dialog class="modal svelte-1qkvmh5"${add_attribute("this", dialogRef, 0)}><div class="modal-box w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-[75vh] md:h-[85vh] flex flex-col justify-between overflow-auto p-4 md:p-6 bg-white shadow-lg svelte-1qkvmh5"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg" data-svelte-h="svelte-1l6dlx2">✕</button> <div class="h-full flex flex-col justify-evenly items-center"><h1 class="text-lg md:text-2xl lg:text-4xl font-bold mb-4">${escape(cardDetails.header)}</h1> <div class="flex-0 w-full md:w-2/3 lg:w-1/2 h-2/5 md:h-3/5 flex justify-center items-center mb-4"><img class="max-w-full max-h-full h-full w-auto shadow-lg"${add_attribute("src", cardDetails.imgsrc, 0)}${add_attribute("alt", cardDetails.header, 0)}></div> <div class="w-full max-w-sm md:max-w-xl lg:max-w-3xl space-y-3"><h3 class="font-bold underline text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">${escape(cardDetails.header)}</h3> ${each(cardDetails.content, (content) => {
    return `<p class="text-sm md:text-lg lg:text-xl mb-1 md:mb-2">${escape(content)}</p>`;
  })}</div></div></div> </dialog>`;
});
const css = {
  code: ".carousel-container.svelte-12pcmx9{display:flex;transition:transform 0.5s ease-in-out}",
  map: `{"version":3,"file":"MiniCarousel.svelte","sources":["MiniCarousel.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"./MiniCarouselCard.svelte\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nimport { writable } from \\"svelte/store\\";\\nimport { tick } from \\"svelte\\";\\nexport let CarouselCards;\\n// Local state for the current slide\\nlet currentSlide = writable(0);\\nlet intervalId = null;\\nlet carouselContainer = null;\\nfunction navigateToNextSlide() {\\n    currentSlide.update((index) => (index + 1) % CarouselCards.length);\\n    scrollToSlide();\\n}\\nfunction navigateToPreviousSlide() {\\n    currentSlide.update((index) => (index - 1 + CarouselCards.length) % CarouselCards.length);\\n    scrollToSlide();\\n}\\nfunction scrollToSlide() {\\n    const slideIndex = $currentSlide;\\n    if (carouselContainer) {\\n        const slideWidth = carouselContainer.offsetWidth;\\n        carouselContainer.scrollTo({\\n            left: slideWidth * slideIndex,\\n            behavior: \\"smooth\\",\\n        });\\n    }\\n}\\nfunction setSlide(index) {\\n    currentSlide.set(index);\\n    scrollToSlide();\\n}\\nonMount(async () => {\\n    await tick();\\n    intervalId = setInterval(navigateToNextSlide, 5000);\\n});\\nonDestroy(() => {\\n    if (intervalId)\\n        clearInterval(intervalId);\\n});\\nconst n = CarouselCards.length;\\n<\/script>\\n\\n<div\\n  class=\\"flex flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden\\"\\n>\\n  <div class=\\"w-full md:w-3/5 relative overflow-hidden shadow-md\\">\\n    <div\\n      bind:this={carouselContainer}\\n      class=\\"carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory\\"\\n    >\\n      {#each CarouselCards as card, index}\\n        <div class=\\"snap-center min-w-full flex justify-center\\">\\n          <Card cardDetails={card}></Card>\\n        </div>\\n      {/each}\\n    </div>\\n    <div class=\\"control-buttons absolute inset-y-0 left-0 flex items-center\\">\\n      <button\\n        class=\\"text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none\\"\\n        on:click={navigateToPreviousSlide}>❮</button\\n      >\\n    </div>\\n    <div class=\\"control-buttons absolute inset-y-0 right-0 flex items-center\\">\\n      <button\\n        class=\\"text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none\\"\\n        on:click={navigateToNextSlide}>❯</button\\n      >\\n    </div>\\n  </div>\\n  <div\\n    class=\\"w-full md:w-2/5 bg-primary p-4 md:p-6 flex flex-col justify-center text-center md:text-left text-white shadow-lg\\"\\n  >\\n    <h1 class=\\"text-lg md:text-2xl font-bold\\">\\n      {#if $currentSlide !== undefined}\\n        {CarouselCards[$currentSlide].header}\\n      {/if}\\n    </h1>\\n    {#if $currentSlide !== undefined}\\n      {#each CarouselCards[$currentSlide].content as content}\\n        <p class=\\"text-xs md:text-base mt-2\\">{content}</p>\\n      {/each}\\n    {/if}\\n  </div>\\n</div>\\n\\n<div class=\\"flex justify-evenly gap-2 mt-4\\">\\n  {#each CarouselCards as _, index}\\n    <span\\n      class=\\"w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 {index ==\\n      $currentSlide\\n        ? 'bg-primary scale-125'\\n        : 'border-secondary border-2'}\\"\\n      on:click={() => setSlide(index)}\\n    />\\n  {/each}\\n</div>\\n\\n<style>\\n  .carousel-wrapper {\\n    overflow: hidden;\\n    position: relative;\\n    z-index: 1;\\n  }\\n\\n  .carousel-container {\\n    display: flex;\\n    transition: transform 0.5s ease-in-out;\\n  }\\n\\n  .dot {\\n    transition:\\n      background-color 0.3s ease,\\n      transform 0.3s ease;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwGE,kCAAoB,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,WAC7B"}`
};
const MiniCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let { CarouselCards } = $$props;
  let currentSlide = writable(0);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let carouselContainer = null;
  onDestroy(() => {
  });
  CarouselCards.length;
  if ($$props.CarouselCards === void 0 && $$bindings.CarouselCards && CarouselCards !== void 0) $$bindings.CarouselCards(CarouselCards);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  return `<div class="flex flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden"><div class="w-full md:w-3/5 relative overflow-hidden shadow-md"><div class="carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory svelte-12pcmx9"${add_attribute("this", carouselContainer, 0)}>${each(CarouselCards, (card, index) => {
    return `<div class="snap-center min-w-full flex justify-center">${validate_component(MiniCarouselCard, "Card").$$render($$result, { cardDetails: card }, {}, {})} </div>`;
  })}</div> <div class="control-buttons absolute inset-y-0 left-0 flex items-center"><button class="text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none" data-svelte-h="svelte-10nqih6">❮</button></div> <div class="control-buttons absolute inset-y-0 right-0 flex items-center"><button class="text-2xl md:text-3xl rounded-full p-2 m-2 md:m-3 focus:outline-none" data-svelte-h="svelte-ulnvv5">❯</button></div></div> <div class="w-full md:w-2/5 bg-primary p-4 md:p-6 flex flex-col justify-center text-center md:text-left text-white shadow-lg"><h1 class="text-lg md:text-2xl font-bold">${$currentSlide !== void 0 ? `${escape(CarouselCards[$currentSlide].header)}` : ``}</h1> ${$currentSlide !== void 0 ? `${each(CarouselCards[$currentSlide].content, (content) => {
    return `<p class="text-xs md:text-base mt-2">${escape(content)}</p>`;
  })}` : ``}</div></div> <div class="flex justify-evenly gap-2 mt-4">${each(CarouselCards, (_, index) => {
    return `<span class="${"w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 " + escape(
      index == $currentSlide ? "bg-primary scale-125" : "border-secondary border-2",
      true
    )}"></span>`;
  })} </div>`;
});
const img1 = "/_app/immutable/assets/1.VYpnoDE-.webp";
const img2 = "/_app/immutable/assets/2.DHdyd9R9.webp";
const img3 = "/_app/immutable/assets/3.BbuAFv1i.webp";
const img4 = "/_app/immutable/assets/4.DSbKlHdU.webp";
const img5 = "/_app/immutable/assets/5.DWH-fhuC.webp";
const img6 = "/_app/immutable/assets/6.BpuUsqvV.webp";
const img7 = "/_app/immutable/assets/7.BbSJxGuX.webp";
const img8 = "/_app/immutable/assets/8.BvrBehPD.webp";
const img9 = "/_app/immutable/assets/9.BclxISyk.webp";
const img10 = "/_app/immutable/assets/10.nYIhnNEE.webp";
const img11 = "/_app/immutable/assets/11.BVtNJ8q5.webp";
const img12 = "/_app/immutable/assets/12.cyZta3DH.webp";
const img13 = "/_app/immutable/assets/13.DzK9e967.webp";
const img14 = "/_app/immutable/assets/14.CY8gtXd_.webp";
export {
  MiniCarousel as M,
  img2 as a,
  img3 as b,
  img4 as c,
  img5 as d,
  img6 as e,
  img7 as f,
  img8 as g,
  img9 as h,
  img1 as i,
  img10 as j,
  img11 as k,
  img12 as l,
  img13 as m,
  img14 as n
};
