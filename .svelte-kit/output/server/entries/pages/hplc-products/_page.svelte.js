import { c as create_ssr_component, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { H as HPLCProductCards } from "../../../chunks/heroCards.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="px-4 md:px-12 lg:px-24 my-6"><h1 class="font-bold text-2xl md:text-3xl text-secondary mb-6" data-svelte-h="svelte-1oie4nj">HPLC Products</h1> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-9 py-6">${each(HPLCProductCards, (card) => {
    return `${validate_component(Card, "Card").$$render($$result, { cardDetails: card }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
