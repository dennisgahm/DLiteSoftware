import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
const textbook = "/_app/immutable/assets/textbook-information-extraction1.2BvPLzPQ.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto" data-svelte-h="svelte-4lq55c"><h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6">Textbook Information Extraction</h1> <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6"><img class="mx-auto" alt="textbook-Information-extraction"${add_attribute("src", textbook, 0)}> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4">Textbook Information Extraction</p> <p class="my-4 text-sm sm:text-base md:text-lg">The <strong>Textbook Information Extraction</strong> program extracts textbook
      information from a community college&#39;s website and puts it into an Excel sheet.
      The main purpose of this program is to allow the book store owner to quickly
      see the price the college is selling the book so that he can adjust his own
      prices.</p> <p class="my-4 text-sm sm:text-base md:text-lg">Without this program, the book store owner has to manually go to the
      college&#39;s website and click on each class to get the textbook information.
      If the book store owner wants to look at all the textbooks for every
      class, this becomes a very tedious task as the owner has to click 100s of
      times on the website to navigate to the pertinent information.</p> <p class="my-4 text-sm sm:text-base md:text-lg">This program allows for the book store owner to quickly see all the
      textbook informations at a glance. Checking the price for a textbook
      requires only looking at the Excel sheet instead of having to click many
      times on the website.</p> <p class="my-4 text-sm sm:text-base md:text-lg">Also, this program allows you to see the differences in the textbook
      information between a current Excel page and an old Excel page. This
      allows the book store owner to see which textbook prices have changed so
      that the owner can also change the price he sells it.</p></div></div>`;
});
export {
  Page as default
};
