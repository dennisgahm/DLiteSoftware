import { c as create_ssr_component, a as add_attribute, b as escape, o as onDestroy, e as each, v as validate_component } from "../../chunks/ssr.js";
import "@sveltejs/kit";
import { C as CarouselCards } from "../../chunks/heroCards.js";
const css = {
  code: ".card-container.svelte-1cbxf7v:hover .card-details.svelte-1cbxf7v{opacity:100}",
  map: '{"version":3,"file":"CarouselCard.svelte","sources":["CarouselCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">let isModalOpen = false;\\nlet dialogRef = null;\\nexport let cardDetails;\\nfunction openModal() {\\n  isModalOpen = true;\\n  dialogRef?.showModal();\\n}\\nfunction closeModal() {\\n  isModalOpen = false;\\n  dialogRef?.close();\\n}\\n<\/script>\\n\\n<div class=\\"w-full h-full bg-secondary\\">\\n  <div\\n    class=\\"card-container flex justify-center items-center h-full p-4 md:p-6 cursor-pointer\\"\\n    on:click={openModal}\\n  >\\n    <img\\n      src={cardDetails.imgsrc}\\n      alt={cardDetails.header}\\n      class=\\" shadow-lg max-w-full max-h-64 md:max-h-80 object-cover\\"\\n    />\\n    <div\\n      class=\\"card-details bg-base-100 bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0\\"\\n    >\\n      <h3 class=\\"font-bold underline text-sm md:text-lg\\">\\n        <a href={cardDetails.link} class=\\"hover:text-blue-500\\"\\n          >{cardDetails.header}</a\\n        >\\n      </h3>\\n      <p class=\\"text-xs md:text-sm\\">{cardDetails.content}</p>\\n    </div>\\n  </div>\\n</div>\\n\\n<dialog\\n  bind:this={dialogRef}\\n  class=\\"modal p-0 bg-black bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center\\"\\n>\\n  <div\\n    class=\\"modal-box max-w-3xl w-full mx-4 md:mx-8 p-4 md:p-8 bg-white shadow-md relative border border-gray-300\\"\\n    style=\\"border-radius: 0;\\"\\n  >\\n    <button\\n      class=\\"btn btn-sm btn-ghost absolute right-2 top-2 text-lg\\"\\n      on:click={closeModal}\\n      >✕\\n    </button>\\n    <div class=\\"h-full flex flex-col justify-between items-center\\">\\n      <h1 class=\\"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\\">\\n        {cardDetails.header}\\n      </h1>\\n      <div\\n        class=\\"w-full md:w-2/3 lg:w-1/2 flex justify-center items-center mb-4\\"\\n      >\\n        <img\\n          class=\\"max-w-full max-h-full h-full w-auto shadow-none\\"\\n          src={cardDetails.imgsrc}\\n          alt={cardDetails.header}\\n        />\\n      </div>\\n      <div>\\n        <h3 class=\\"font-bold text-lg md:text-xl lg:text-2xl mb-2\\">\\n          <a href={cardDetails.link} class=\\"hover:text-blue-500\\">\\n            {cardDetails.header}\\n          </a>\\n        </h3>\\n        <p class=\\"text-sm md:text-lg lg:text-xl\\">{cardDetails.content}</p>\\n      </div>\\n    </div>\\n  </div>\\n</dialog>\\n\\n<style>\\n  .card-container:hover .card-details {\\n    opacity: 100;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2EE,8BAAe,MAAM,CAAC,4BAAc,CAClC,OAAO,CAAE,GACX"}'
};
const CarouselCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dialogRef = null;
  let { cardDetails } = $$props;
  if ($$props.cardDetails === void 0 && $$bindings.cardDetails && cardDetails !== void 0) $$bindings.cardDetails(cardDetails);
  $$result.css.add(css);
  return `<div class="w-full h-full bg-secondary"><div class="card-container flex justify-center items-center h-full p-4 md:p-6 cursor-pointer svelte-1cbxf7v"><img${add_attribute("src", cardDetails.imgsrc, 0)}${add_attribute("alt", cardDetails.header, 0)} class="shadow-lg max-w-full max-h-64 md:max-h-80 object-cover"> <div class="card-details bg-base-100 bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0 svelte-1cbxf7v"><h3 class="font-bold underline text-sm md:text-lg"><a${add_attribute("href", cardDetails.link, 0)} class="hover:text-blue-500">${escape(cardDetails.header)}</a></h3> <p class="text-xs md:text-sm">${escape(cardDetails.content)}</p></div></div></div> <dialog class="modal p-0 bg-black bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"${add_attribute("this", dialogRef, 0)}><div class="modal-box max-w-3xl w-full mx-4 md:mx-8 p-4 md:p-8 bg-white shadow-md relative border border-gray-300" style="border-radius: 0;"><button class="btn btn-sm btn-ghost absolute right-2 top-2 text-lg" data-svelte-h="svelte-1xt6p1">✕</button> <div class="h-full flex flex-col justify-between items-center"><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">${escape(cardDetails.header)}</h1> <div class="w-full md:w-2/3 lg:w-1/2 flex justify-center items-center mb-4"><img class="max-w-full max-h-full h-full w-auto shadow-none"${add_attribute("src", cardDetails.imgsrc, 0)}${add_attribute("alt", cardDetails.header, 0)}></div> <div><h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-2"><a${add_attribute("href", cardDetails.link, 0)} class="hover:text-blue-500">${escape(cardDetails.header)}</a></h3> <p class="text-sm md:text-lg lg:text-xl">${escape(cardDetails.content)}</p></div></div></div> </dialog>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { CarouselCards: CarouselCards2 } = $$props;
  let currentSlide = 0;
  let carouselContainer = null;
  onDestroy(() => {
  });
  CarouselCards2.length;
  if ($$props.CarouselCards === void 0 && $$bindings.CarouselCards && CarouselCards2 !== void 0) $$bindings.CarouselCards(CarouselCards2);
  return `<div><div class="relative w-full overflow-hidden"><div class="flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory"${add_attribute("this", carouselContainer, 0)}>${each(CarouselCards2, (card, i) => {
    return `<div${add_attribute("id", `slide${i}`, 0)} class="snap-center min-w-full flex justify-center">${validate_component(CarouselCard, "Card").$$render($$result, { cardDetails: card }, {}, {})} </div>`;
  })}</div> <div class="absolute inset-y-0 left-0 flex items-center"><button class="text-4xl text-gray-700 hover:text-gray-900 bg-opacity-80 rounded-full p-2 m-3 focus:outline-none" aria-label="Previous Slide" data-svelte-h="svelte-a4zpl4">❮</button></div> <div class="absolute inset-y-0 right-0 flex items-center"><button class="text-4xl text-gray-700 hover:text-gray-900 bg-opacity-80 rounded-full p-2 m-3 focus:outline-none" aria-label="Next Slide" data-svelte-h="svelte-1ah9fsx">❯</button></div></div> <div class="flex justify-evenly gap-2 mt-4">${each(CarouselCards2, (_, index) => {
    return `<span class="${"w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 " + escape(
      index == currentSlide ? "bg-primary scale-125" : "border-secondary border-2",
      true
    )}"></span>`;
  })}</div></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-1 flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-24 space-y-6 md:space-y-0 md:space-x-6"><div class="flex flex-col items-center md:items-start md:p-12 space-y-4 md:flex-1 max-w-lg md:max-w-none" data-svelte-h="svelte-1yljcf0"><h1 class="font-bold text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 text-secondary">Welcome!</h1> <p class="text-lg md:text-2xl font-light">We offer <b class="underline">software solutions</b> that create value, efficiency,
      and convenience.</p> <div class="space-y-3"><h3 class="font-semibold text-lg md:text-xl">Past Projects.</h3> <ul class="text-base md:text-lg font-light space-y-2"><li><span class="underline">Extracting textbook information</span> from a
          college website and organizing it in an
          <span class="underline">Excel</span> file.</li> <li><span class="underline">Automating chemistry lab equipment</span> to
          perform experiments
          <span class="font-semibold">never-before-possible</span></li></ul></div> <a href="/our-products"><button class="border-none p-4 font-bold text-lg md:text-xl mt-6 bg-[#0096FF] hover:bg-primary text-accent">Our Products</button></a></div> <div class="flex flex-1 justify-center items-center w-full max-w-lg md:max-w-none">${validate_component(Carousel, "Carousel").$$render($$result, { CarouselCards }, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
