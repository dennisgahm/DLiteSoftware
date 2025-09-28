import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
const img1 = "/DLiteSoftware/_app/immutable/assets/1.5slwIaWG.webp";
const img2 = "/DLiteSoftware/_app/immutable/assets/2.Bh3OP72X.webp";
const img3 = "/DLiteSoftware/_app/immutable/assets/3.aWVHp4zO.webp";
const img4 = "/DLiteSoftware/_app/immutable/assets/4.BZmuhKnz.webp";
const img5 = "/DLiteSoftware/_app/immutable/assets/5.Boe17XPe.webp";
const img6 = "/DLiteSoftware/_app/immutable/assets/6.BwKPPOtU.webp";
const img7 = "/DLiteSoftware/_app/immutable/assets/7.D64BArRF.webp";
const img8 = "/DLiteSoftware/_app/immutable/assets/8.DDbi5WMq.webp";
const img9 = "/DLiteSoftware/_app/immutable/assets/9.DxQVFGSf.webp";
const img10 = "/DLiteSoftware/_app/immutable/assets/10.ZVbuKrzV.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto" data-svelte-h="svelte-hznpyw"><h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6">Sequence Builder</h1> <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6"><div><img class="mx-auto"${add_attribute("src", img1, 0)} alt="Sequence Builder Previewed Table"></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4t-2xl">Description</p> <p class="my-4 text-sm sm:text-base md:text-lg">The Sequence Builder is an easy-to-use and streamlined program that
      drastically simplifies the sequence building process. Building large
      sequence tables within ChemStation can quickly become a long and tedious
      task as users must build the tables line by line, repeatedly defining the
      same sample location, method, etc. The Sequence Builder provides users
      with a sleek and compact user interface where method parameters need only
      be defined once. The Sequence Builder creates and saves a .CSV file of a
      full sequence table which can then be imported directly into ChemStation.</p> <p class="my-4 text-sm sm:text-base md:text-lg">The Sequence Builder has several modes of operation: Simple, Simple+Add,
      and Multiple. These modes are specialized for sequence table creation
      depending on the different combinations of how many samples you wish to
      screen, how many columns you have, and how many methods you plan to use.</p> <p>Though great as a standalone product, the Sequence Builder gives an even
      greater boost to productivity when used alongside the <a class="underline" href="/mccps-system">MCCPS System</a>.  For a full list of features and detailed explanations of
      functionality, please download the Sequence Builder User&#39;s Manual from the
      <a class="underline" href="/downloads">Downloads Page</a>.</p> <p class="my-4 text-sm sm:text-base md:text-lg">The following will briefly walk you through how to use the Simple Mode of
      the Sequence Builder to accelerate your method development process:</p> <ol class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg"><li class="ml-6">Entering Method Information</li> <li class="ml-6">Entering Column Information</li> <li class="ml-6">Entering Sample Information</li> <li class="ml-6">Entering Sample Information</li> <li class="ml-6">Importing .CSV to ChemStation</li></ol> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4t-2xl"><strong>Entering Method Information</strong></p> <p class="my-4 text-sm sm:text-base md:text-lg">In this example, we will assume the user has one sample, one method, and
      ten columns to screen and that the user wishes to build a sequence table
      to inject the sample through each of the ten columns.</p> <p class="my-4 text-sm sm:text-base md:text-lg">For this application, the Simple Mode of the Sequence Builder is adequate.
      To select the Simple view option, either click Views&gt;&gt;Simple from the menu
      bar or choose Simple from the View Options drop-down menu in the
      top-center of the Sequence Builder window.</p> <div class="my-3"><img${add_attribute("src", img2, 0)} alt="" class="mx-auto"></div> <p class="my-4 text-sm sm:text-base md:text-lg">To begin importing your ChemStation methods into the Sequence Builder,
      select the Available Methods Tab at the bottom-left of the Sequence
      Builder window. On the right side of the Available Methods Tab, click
      Browse to find and select the methods folder/directory used by ChemStation
      to store all methods, and select OK.</p> <div class="my-3"><img${add_attribute("src", img3, 0)} alt="" class="mx-auto"></div> <p class="my-4 text-sm sm:text-base md:text-lg">The methods folder/ directory will now be displayed in the textbox to the
      right of the browse button; click Import Methods to bring the methods into
      the All Available Methods box to the left. From the All Available Methods
      list, double-click your desired method to select the method for use in
      building the sequence table. The selected method will be displayed above.</p> <p class="my-4 text-sm sm:text-base md:text-lg">(Also available in this tab are the options to save all imported methods,
      set a particular method as default, and add particular methods to your
      favorite methods list)</p> <div class="my-3"><img${add_attribute("src", img4, 0)} alt="" class="mx-auto"></div> <p class="text-2xl"><strong>Entering Column Information</strong></p> <p class="my-4 text-sm sm:text-base md:text-lg">To begin entering column information, click the Available Columns Tab at
      the bottom-left of the Sequence Builder window. Enter descriptive column
      information in the Active Column Set box to the left.</p> <p class="my-4 text-sm sm:text-base md:text-lg">(Also available in this tab are the options to set the current set as
      default, load a previously defined default set, save the current set,
      import a previously saved set, and load a previously defined set into the
      active columns set)</p> <div class="my-3"><img${add_attribute("src", img5, 0)} alt="" class="mx-auto"></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4t-2xl">Sample Information</p> <p class="my-4 text-sm sm:text-base md:text-lg">To begin entering sample information, look to the Required Information box
      at the top-left of the Sequence Builder window. Enter the Sample Location,
      Injection Volume, and descriptive information for Identifiers #1 and #2
      (to best identify and keep track of injections.</p> <div class="my-3"><img${add_attribute("src", img6, 0)} alt="" class="mx-auto"></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4t-2xl">Previewing and Saving the Sequence Table</p> <p class="my-4 text-sm sm:text-base md:text-lg">To preview the Sequence Table (after first ensuring that a method is
      selected and that column and sample information are defined), click the
      Preview button near the top-center of the Sequence Table window.</p> <div class="my-3"><img${add_attribute("src", img7, 0)} alt="" class="mx-auto"></div> <p class="my-4 text-sm sm:text-base md:text-lg">To save the Sequence Table, click Save to CSV to save the previewed
      sequence table as a .CSV file. This file can be opened and re-checked in
      excel. After resizing the cells, the sequence table will look as displayed
      below.</p> <div class="my-3"><img${add_attribute("src", img8, 0)} alt="" class="mx-auto"></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4t-2xl">Importing .CSV to ChemStation</p> <p class="my-4 text-sm sm:text-base md:text-lg">To import the .CSV file of the Sequence Table into ChemStation, click
      Sequence&gt;&gt;Import Sequence to open the Sequence Import window. In Step 1:
      Import Configuration (of the Sequence Import process), browse for and
      select the previously saved .CSV file, then click Finish.</p> <div class="my-3"><img${add_attribute("src", img9, 0)} alt="" class="mx-auto"></div> <div class="my-3"><img${add_attribute("src", img10, 0)} alt="" class="mx-auto"></div></div></div>`;
});
export {
  Page as default
};
