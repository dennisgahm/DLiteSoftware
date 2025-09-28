import { c as create_ssr_component, d as subscribe, o as onDestroy, a as add_attribute, e as each, b as escape, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { i as img1$2, a as img2$2, b as img3$2, c as img4$2, d as img5$2, e as img6$2, f as img7$2, g as img8$2, h as img9$2, j as img10$2, k as img11$1, l as img12, m as img13, n as img14, M as MiniCarousel } from "../../../chunks/14.js";
const css = {
  code: ".carousel-container.svelte-12pcmx9{display:flex;transition:transform 0.5s ease-in-out}",
  map: `{"version":3,"file":"ImageSlider.svelte","sources":["ImageSlider.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nimport { writable } from \\"svelte/store\\";\\nimport { tick } from \\"svelte\\";\\nexport let imgSrc;\\n// Local state for the current slide\\nlet currentSlide = writable(0);\\nlet intervalId = null;\\nlet carouselContainer = null;\\nfunction navigateToNextSlide() {\\n    currentSlide.update((index) => (index + 1) % imgSrc.length);\\n    scrollToSlide();\\n}\\nfunction navigateToPreviousSlide() {\\n    currentSlide.update((index) => (index - 1 + imgSrc.length) % imgSrc.length);\\n    scrollToSlide();\\n}\\nfunction scrollToSlide() {\\n    const slideIndex = $currentSlide;\\n    if (carouselContainer) {\\n        const slideWidth = carouselContainer.offsetWidth;\\n        carouselContainer.scrollTo({\\n            left: slideWidth * slideIndex,\\n            behavior: \\"smooth\\",\\n        });\\n    }\\n}\\nfunction setSlide(index) {\\n    currentSlide.set(index);\\n    scrollToSlide();\\n}\\nonMount(async () => {\\n    await tick();\\n    intervalId = setInterval(navigateToNextSlide, 5000);\\n});\\nonDestroy(() => {\\n    if (intervalId)\\n        clearInterval(intervalId);\\n});\\nconst n = imgSrc.length;\\n<\/script>\\n\\n<!-- <div class=\\"carousel-wrapper mx-9\\">\\n  <div\\n    class=\\"carousel-container\\"\\n    style:transform=\\"translateX(calc(-{100 * $currentSlide}%))\\"\\n  >\\n    {#each imgSrc as src}\\n      <div class=\\"carousel-item\\">\\n        <div class=\\"w-full h-full bg-secondary\\">\\n          <div\\n            class=\\"card-container flex justify-center items-center h-full p-6\\"\\n          >\\n            <img {src} alt={src} />\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n  <div class=\\"control-buttons\\">\\n    <button class=\\"btn btn-circle\\" on:click={navigateToPreviousSlide}>❮</button>\\n    <button class=\\"btn btn-circle\\" on:click={navigateToNextSlide}>❯</button>\\n  </div>\\n</div>\\n\\n<div class=\\"grid grid-flow-col gap-1 mx-9 m-2\\">\\n  {#each imgSrc as _, index}\\n    <div\\n      class=\\"dot {index == $currentSlide\\n        ? 'bg-accent scale-100'\\n        : 'bg-primary scale-90'}\\"\\n      on:click={() => setSlide(index)}\\n    >\\n      &nbsp;\\n    </div>\\n  {/each}\\n</div>\\n\\n<style>\\n  .carousel-container {\\n    display: flex;\\n    transition: transform 0.5s ease;\\n  }\\n\\n  .carousel-wrapper {\\n    overflow: hidden;\\n    position: relative;\\n    z-index: 1; /* Lower than the header */\\n  }\\n\\n  .control-buttons {\\n    z-index: 5;\\n    position: absolute;\\n    left: 5%;\\n    right: 5%;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  .carousel-item {\\n    flex: 0 0 100%;\\n  }\\n\\n  .dot {\\n    width: 10px;\\n    height: 10px;\\n    border-radius: 50%;\\n    cursor: pointer;\\n  }\\n\\n  .header-wrapper {\\n    z-index: 10;\\n    position: relative;\\n  }\\n</style> -->\\n\\n<div\\n  class=\\"flex relative flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden\\"\\n>\\n  <div\\n    bind:this={carouselContainer}\\n    class=\\"carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory\\"\\n  >\\n    {#each imgSrc as src}\\n      <div class=\\"snap-center min-w-full flex justify-center\\">\\n        <div class=\\"w-full h-full bg-secondary\\">\\n          <div\\n            class=\\"card-container flex justify-center items-center h-full p-6\\"\\n          >\\n            <img {src} alt={src} />\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n  <div class=\\"control-buttons absolute inset-y-0 left-0 flex items-center\\">\\n    <button\\n      class=\\"text-2xl md:text-3xl p-2 m-2 md:m-3 focus:outline-none\\"\\n      on:click={navigateToPreviousSlide}>❮</button\\n    >\\n  </div>\\n  <div class=\\"control-buttons absolute inset-y-0 right-0 flex items-center\\">\\n    <button\\n      class=\\"text-2xl md:text-3xl l p-2 m-2 md:m-3 focus:outline-none\\"\\n      on:click={navigateToNextSlide}>❯</button\\n    >\\n  </div>\\n</div>\\n\\n<div class=\\"flex justify-evenly gap-2 mt-4\\">\\n  {#each imgSrc as _, index}\\n    <span\\n      class=\\"w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 {index ==\\n      $currentSlide\\n        ? 'bg-primary scale-125'\\n        : 'border-secondary border-2'}\\"\\n      on:click={() => setSlide(index)}\\n    />\\n  {/each}\\n</div>\\n\\n<style>\\n  .carousel-wrapper {\\n    overflow: hidden;\\n    position: relative;\\n    z-index: 1;\\n  }\\n\\n  .carousel-container {\\n    display: flex;\\n    transition: transform 0.5s ease-in-out;\\n  }\\n\\n  .dot {\\n    transition:\\n      background-color 0.3s ease,\\n      transform 0.3s ease;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyKE,kCAAoB,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,WAC7B"}`
};
const ImageSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let { imgSrc } = $$props;
  let currentSlide = writable(0);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let carouselContainer = null;
  onDestroy(() => {
  });
  imgSrc.length;
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0) $$bindings.imgSrc(imgSrc);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  return ` <div class="flex relative flex-col md:flex-row mx-2 md:mx-4 lg:mx-9 mt-2 md:mt-6 gap-4 overflow-hidden"><div class="carousel-container shadow-lg h-full flex w-full overflow-hidden scroll-smooth snap-x snap-mandatory svelte-12pcmx9"${add_attribute("this", carouselContainer, 0)}>${each(imgSrc, (src) => {
    return `<div class="snap-center min-w-full flex justify-center"><div class="w-full h-full bg-secondary"><div class="card-container flex justify-center items-center h-full p-6"><img${add_attribute("src", src, 0)}${add_attribute("alt", src, 0)}> </div></div> </div>`;
  })}</div> <div class="control-buttons absolute inset-y-0 left-0 flex items-center"><button class="text-2xl md:text-3xl p-2 m-2 md:m-3 focus:outline-none" data-svelte-h="svelte-1t4gxij">❮</button></div> <div class="control-buttons absolute inset-y-0 right-0 flex items-center"><button class="text-2xl md:text-3xl l p-2 m-2 md:m-3 focus:outline-none" data-svelte-h="svelte-1kfj7u">❯</button></div></div> <div class="flex justify-evenly gap-2 mt-4">${each(imgSrc, (_, index) => {
    return `<span class="${"w-3 h-3 rounded-full cursor-pointer transition-all transform duration-300 " + escape(
      index == $currentSlide ? "bg-primary scale-125" : "border-secondary border-2",
      true
    )}"></span>`;
  })} </div>`;
});
const img15 = "/DLiteSoftware/_app/immutable/assets/15.Cho1kXOW.webp";
const img16 = "/DLiteSoftware/_app/immutable/assets/16.DLeoweV_.webp";
const img17 = "/DLiteSoftware/_app/immutable/assets/17.C1o0EWlA.webp";
const mccpProgramCards = [
  {
    imgsrc: img1$2,
    header: "C&P Run Setup",
    content: [
      "Choose Desired Columns (1/3/6/7/8  --  5 Columns Total)",
      "Define C&P Duration for Each Column(10min. Each)",
      "Check Communication via Current Port Display(Click Port 4 and Observe Column Selector Unit Move to Port 4)"
    ]
  },
  {
    imgsrc: img2$2,
    header: "C&P Run Start",
    content: [
      "Program:",
      "*Selects First Column (1)",
      "*Starts Timers",
      "--- Current Column Processed Time",
      "--- Total C&P Run Time",
      "*Disables Screen Options",
      "*Enables Stop Button"
    ]
  },
  {
    imgsrc: img3$2,
    header: "Column 1 Processing",
    content: [
      "Column 1 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "(First of five columns selected)"
    ]
  },
  {
    imgsrc: img4$2,
    header: "Column 1 Processing",
    content: [
      "Column 1 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "Program will select next column (3) at 10min (600sec) mark."
    ]
  },
  {
    imgsrc: img5$2,
    header: "Switch to Column 3",
    content: [
      "At the 10min (600sec) mark, Port 3 = Column 3 is selected (see also the Current Port Display).",
      "Column Timer is reset; Total Timer continues."
    ]
  },
  {
    imgsrc: img6$2,
    header: "Column 3 Processing",
    content: [
      "Column 3 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "(Second of five columns selected)"
    ]
  },
  {
    imgsrc: img7$2,
    header: "Column 3 Processing",
    content: [
      "Column 3 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "Program will select next column (6) at 20min (1200sec) mark."
    ]
  },
  {
    imgsrc: img8$2,
    header: "Switch to Column 6",
    content: [
      "At the 20min (1200sec) mark, Port 6 = Column 6 is selected (see also the Current Port Display).",
      "Column Timer is reset; Total Timer continues."
    ]
  },
  {
    imgsrc: img9$2,
    header: "Column 6 Processing",
    content: [
      "Column 6 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "(Third of five columns selected)"
    ]
  },
  {
    imgsrc: img10$2,
    header: "Column 6 Processing",
    content: [
      "Column 6 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "Program will select next column (7) at 30min (1800sec) mark."
    ]
  },
  {
    imgsrc: img11$1,
    header: "Switch to Column 7",
    content: [
      "At the 30min (1800sec) mark, Port 7 = Column 7 is selected (see also the Current Port Display).",
      "Column Timer is reset; Total Timer continues."
    ]
  },
  {
    imgsrc: img12,
    header: "Column 7 Processing",
    content: [
      "Column 7 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "(Fourth of five columns selected)"
    ]
  },
  {
    imgsrc: img13,
    header: "Column 7 Processing",
    content: [
      "Column 7 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "Program will select next column (8) at 40min (2400sec) mark."
    ]
  },
  {
    imgsrc: img14,
    header: "Switch to Column 8",
    content: [
      "At the 40min (2400sec) mark, Port 8 = Column 8 is selected (see also the Current Port Display).",
      "Column Timer is reset; Total Timer continues."
    ]
  },
  {
    imgsrc: img15,
    header: "Column 8 Processing",
    content: [
      "Column 8 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "(Last of five columns selected)"
    ]
  },
  {
    imgsrc: img16,
    header: "Column 8 Processing",
    content: [
      "Column 8 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
      "Program will finish the C&P Run at the 50min (3000sec) mark."
    ]
  },
  {
    imgsrc: img17,
    header: "End of C&P Run",
    content: [
      "At the 50min (3000sec) mark, all columns (1/3/6/7/8) have been processed for 10min each.",
      "Timers are reset, Options are re-enabled, Current Port remains on last selected column (8)."
    ]
  }
];
const img1$1 = "/DLiteSoftware/_app/immutable/assets/1.DMf9NMHB.webp";
const img2$1 = "/DLiteSoftware/_app/immutable/assets/2.BmhLcLzR.webp";
const img3$1 = "/DLiteSoftware/_app/immutable/assets/3.nk52x0cj.webp";
const img4$1 = "/DLiteSoftware/_app/immutable/assets/4.8IskPVVI.webp";
const img5$1 = "/DLiteSoftware/_app/immutable/assets/5.94j7bE-j.webp";
const img6$1 = "/DLiteSoftware/_app/immutable/assets/6.DXEXA18Z.webp";
const img7$1 = "/DLiteSoftware/_app/immutable/assets/7.BHWgXN3t.webp";
const img8$1 = "/DLiteSoftware/_app/immutable/assets/8.KOONl39Y.webp";
const img9$1 = "/DLiteSoftware/_app/immutable/assets/9.6BAfll0e.webp";
const img10$1 = "/DLiteSoftware/_app/immutable/assets/10.CPZCH3M7.webp";
const MCCPImageSet1 = [img1$1, img2$1, img3$1, img4$1, img5$1, img6$1, img7$1, img8$1, img9$1, img10$1];
const img1 = "/DLiteSoftware/_app/immutable/assets/1.DCWoOiHL.webp";
const img2 = "/DLiteSoftware/_app/immutable/assets/2.DF1RtknB.webp";
const img3 = "/DLiteSoftware/_app/immutable/assets/3.Heufn6hu.webp";
const img4 = "/DLiteSoftware/_app/immutable/assets/4.ClVbWmQr.webp";
const img5 = "/DLiteSoftware/_app/immutable/assets/5.BSEmyMvT.webp";
const img6 = "/DLiteSoftware/_app/immutable/assets/6.BNQK7dVB.webp";
const img7 = "/DLiteSoftware/_app/immutable/assets/7.BCYlwA9c.webp";
const img8 = "/DLiteSoftware/_app/immutable/assets/8.CAEy_MeK.webp";
const img9 = "/DLiteSoftware/_app/immutable/assets/9.uSX4iz7e.webp";
const img10 = "/DLiteSoftware/_app/immutable/assets/10.BFkzjy6k.webp";
const img11 = "/DLiteSoftware/_app/immutable/assets/11.Ceqwnh1L.webp";
const MCCPImageSet2 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"> <h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6" data-svelte-h="svelte-17jwdz">MCCP Program
    <span class="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary mt-2">(Multiple Column Cleaning &amp; Pre-Conditioning)</span></h1>  <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">${validate_component(MiniCarousel, "MiniCarousel").$$render($$result, { CarouselCards: mccpProgramCards }, {}, {})}  <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1myyft8">As described on the <a class="underline" href="/mccps-system">MCCPS System page</a>, the MCCP Program is designed to clean and pre-condition columns with
      minimal effort. As you run a cleaning and/or pre-conditioning method with
      ChemStation (or equivalent Chromatographic Data System), the MCCP Program
      will cycle through the appropriate columns for you, ensuring that each
      column is processed for the same duration. For a full list of features and
      functionality (like saving processes, loading processes, etc.), please
      download the MCCPS System User&#39;s Manual from the
      <a class="underline" href="/downloads">Downloads Page</a>.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-ncdn40">The following will briefly walk you through how to use the MCCP Program
      and illuminate how it works alongside your HPLC System and the MCCPS
      System Column Selector Unit.</p>  <div class="my-6" data-svelte-h="svelte-jt16ti"><ol class="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg"><li class="ml-6">Creating a Cleaning &amp; Pre-Conditioning Run within MCCP Program</li> <li class="ml-6">Creating a Cleaning &amp; Pre-Conditioning Method within ChemStation</li> <li class="ml-6">Starting the ChemStation Method and Cleaning &amp; Pre-Conditioning (C&amp;P)
          Run</li></ol></div>  <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-4lozhv">Creating a Cleaning &amp; Pre-Conditioning Run</p> <div class="flex flex-col md:flex-row py-4 gap-6"><div class="flex-1 text-sm sm:text-base md:text-lg space-y-3" data-svelte-h="svelte-1nbpa4b"><p>Assuming that ten columns are currently installed on the Column
          Selector Unit, you will have to choose which columns you want to
          process and for how long you want to process each.</p> <p>First, check the boxes associated with each column you want to
          process.</p> <p>Second, define how long you want to process each column. Either click
          the default 5min. or 10min. buttons, or enter your preferred duration
          (in minutes) in the textbox.</p></div> <div class="w-full md:w-3/5 mt-4 md:mt-0">${validate_component(ImageSlider, "ImageSlider").$$render($$result, { imgSrc: MCCPImageSet1 }, {}, {})}</div></div>  <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-fms6wp">Creating a Cleaning &amp; Pre-Conditioning Method in ChemStation</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1uts9tw">Now that the MCCP Program is configured, you just need to configure
      ChemStation and the HPLC System to pump the cleaning and/or
      pre-conditioning mobile phase for the total time required to process all
      checked columns.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-nj3s8k">With five columns at 10 minutes each, for example, you may choose to run a
      static method for a total of 50 minutes. For gradient methods, you may run
      repeated gradients at intervals matching the length of time each column is
      processed.</p>  <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-1io2n70">Starting the ChemStation Method and C&amp;P Run</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1ol4kee">Lastly, with the ChemStation Method ready to go and the MCCP Program Run
      set up in sync with the method, all that is left is for you to start both
      in order.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-hrq9l7">We recommend initiating the method in ChemStation first to wait for the
      system to reach your method parameters. When the HPLC System is ready,
      click Start in the MCCP Program and it will switch columns in accordance
      with your defined time duration to process each checked column.</p> <div class="mt-6">${validate_component(ImageSlider, "ImageSlider").$$render($$result, { imgSrc: MCCPImageSet2 }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
