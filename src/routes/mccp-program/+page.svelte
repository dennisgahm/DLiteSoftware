<script lang="ts">
  import ImageSlider from "$lib/components/ImageSlider.svelte";
  import MiniCarousel from "$lib/components/MiniCarousel.svelte";
  import { mccpProgramCards } from "$lib/components/mccpProgramCards";
  import { MCCPImageSet1 } from "$lib/components/mccpProgramImageSet1";
  import { MCCPImageSet2 } from "$lib/components/mccpProgramImageSet2";
</script>

<div
  class=" max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <!-- header section -->
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    MCCP Program
    <span
      class="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary mt-2"
    >
      (Multiple Column Cleaning & Pre-Conditioning)
    </span>
  </h1>

  <!-- carousel section -->
  <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <MiniCarousel CarouselCards={mccpProgramCards}></MiniCarousel>

    <!-- content section -->
    <p class="my-4 text-sm sm:text-base md:text-lg">
      As described on the <a class="underline" href="/mccps-system"
        >MCCPS System page</a
      >, the MCCP Program is designed to clean and pre-condition columns with
      minimal effort. As you run a cleaning and/or pre-conditioning method with
      ChemStation (or equivalent Chromatographic Data System), the MCCP Program
      will cycle through the appropriate columns for you, ensuring that each
      column is processed for the same duration. For a full list of features and
      functionality (like saving processes, loading processes, etc.), please
      download the MCCPS System User's Manual from the
      <a class="underline" href="/downloads">Downloads Page</a>.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The following will briefly walk you through how to use the MCCP Program
      and illuminate how it works alongside your HPLC System and the MCCPS
      System Column Selector Unit.
    </p>

    <!-- steps section -->
    <div class="my-6">
      <ol
        class="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg"
      >
        <li class="ml-6">
          Creating a Cleaning & Pre-Conditioning Run within MCCP Program
        </li>
        <li class="ml-6">
          Creating a Cleaning & Pre-Conditioning Method within ChemStation
        </li>
        <li class="ml-6">
          Starting the ChemStation Method and Cleaning & Pre-Conditioning (C&P)
          Run
        </li>
      </ol>
    </div>

    <!-- creating a cleaning & pre-conditioning run section -->
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Creating a Cleaning & Pre-Conditioning Run
    </p>

    <div class="flex flex-col md:flex-row py-4 gap-6">
      <div class="flex-1 text-sm sm:text-base md:text-lg space-y-3">
        <p>
          Assuming that ten columns are currently installed on the Column
          Selector Unit, you will have to choose which columns you want to
          process and for how long you want to process each.
        </p>
        <p>
          First, check the boxes associated with each column you want to
          process.
        </p>
        <p>
          Second, define how long you want to process each column. Either click
          the default 5min. or 10min. buttons, or enter your preferred duration
          (in minutes) in the textbox.
        </p>
      </div>
      <div class="w-full md:w-3/5 mt-4 md:mt-0">
        <ImageSlider imgSrc={MCCPImageSet1}></ImageSlider>
      </div>
    </div>

    <!-- creating a cleaning & pre-conditioning method in chemstation section -->
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Creating a Cleaning & Pre-Conditioning Method in ChemStation
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Now that the MCCP Program is configured, you just need to configure
      ChemStation and the HPLC System to pump the cleaning and/or
      pre-conditioning mobile phase for the total time required to process all
      checked columns.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      With five columns at 10 minutes each, for example, you may choose to run a
      static method for a total of 50 minutes. For gradient methods, you may run
      repeated gradients at intervals matching the length of time each column is
      processed.
    </p>

    <!-- starting the chemstation method and c&p run section -->
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Starting the ChemStation Method and C&P Run
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Lastly, with the ChemStation Method ready to go and the MCCP Program Run
      set up in sync with the method, all that is left is for you to start both
      in order.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      We recommend initiating the method in ChemStation first to wait for the
      system to reach your method parameters. When the HPLC System is ready,
      click Start in the MCCP Program and it will switch columns in accordance
      with your defined time duration to process each checked column.
    </p>

    <div class="mt-6">
      <ImageSlider imgSrc={MCCPImageSet2}></ImageSlider>
    </div>
  </div>
</div>
