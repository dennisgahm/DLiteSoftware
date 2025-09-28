import { c as create_ssr_component, a as add_attribute, b as escape } from "./ssr.js";
import { t as theme } from "./store.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardDetails } = $$props;
  theme.subscribe((t) => {
  });
  if ($$props.cardDetails === void 0 && $$bindings.cardDetails && cardDetails !== void 0) $$bindings.cardDetails(cardDetails);
  return `<div class="hover:cursor-pointer flex flex-col md:flex-row bg-base shadow product-card overflow-hidden transform transition-transform duration-200 hover:scale-105"><figure class="bg-secondary p-3 flex-shrink-0 w-full md:w-48"><img${add_attribute("src", cardDetails.imgsrc, 0)}${add_attribute("alt", cardDetails.header, 0)} class="object-cover w-full h-full"></figure> <div class="p-4 flex-grow"><h2 class="font-semibold mb-2">${escape(cardDetails.header)}</h2> <p class="text-xs">${escape(cardDetails.content)}</p></div></div>`;
});
export {
  Card as C
};
