<script>
  import { mcpProgramCards } from "$lib/components/mcpProgramCards";
  import MiniCarousel from "$lib/components/MiniCarousel.svelte";

  import img1 from "$lib/assets/mcp-program-img/1.webp";
  import img2 from "$lib/assets/mcp-program-img/2.webp";
  import img3 from "$lib/assets/mcp-program-img/3.webp";
  import img4 from "$lib/assets/mcp-program-img/4.webp";
  import img5 from "$lib/assets/mcp-program-img/5.webp";
</script>

<div
  class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    MCS Program <span
      class="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary mt-2"
      >(Multiple Column Screening)</span
    >
  </h1>

  <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <MiniCarousel CarouselCards={mcpProgramCards}></MiniCarousel>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      As described on the&nbsp;<a class="underline" href="/mccps-system"
        >MCCPS System page</a
      >, the MCS Program is designed to efficiently screen multiple columns to
      accelerate the method development process. &nbsp;As you make repeated
      injections of your sample with ChemStation (or equivalent Chromatographic
      Data System), the MCS Program will cycle through the columns installed on
      the Column Selector Unit. &nbsp;At the end of the run, you will have
      chromatographic data available for each column, greatly accelerating your
      method development.&nbsp;For a full list of features and functionality
      (like saving/loading configurations, etc.) please download the MCCPS
      System User's Manual from the&nbsp;<a class="underline" href="/downloads"
        >Downloads Page</a
      >.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The following will briefly walk you through how to use the MCS Program and
      illuminate how it works alongside your HPLC System and the MCCPS System
      Column Selector Unit.
    </p>

    <ol class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">Creating a Sequence Subdirectory within ChemStation</li>
      <li class="ml-6">
        Completing a Sequence Table for the Screening Process within ChemStation
      </li>
      <li class="ml-6">
        Defining the Folder Path of the Subdirectory within the MCS Program
      </li>
      <li class="ml-6">Coordinating Injections in the MCS Program</li>
      <li class="ml-6">
        Starting MCS Program and Beginning the Method/Sequence in ChemStation
      </li>
    </ol>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Creating a Sequence Subdirectory within ChemStation
    </p>

    <div class="flex my-4">
      <div class="w-3/5 px-3">
        <p class="my-4 text-sm sm:text-base md:text-lg">
          In the Sequence Parameters window in ChemStation, you are able to
          define the Subdirectory in which the chromatographic data files from
          this run will be saved.
        </p>

        <p class="my-4 text-sm sm:text-base md:text-lg">
          For the MCS Program to coordinate injections with columns, it needs to
          know when the HPLC System is making an injection. By creating a
          subdirectory for this particular run, we create a folder that the MCS
          Program can scan for new folders which ChemStation creates to contain
          information for each sequence line in this run.
        </p>

        <p class="my-4 text-sm sm:text-base md:text-lg">
          *Make a note of the file path and subdirectory as it is required to
          configure the MCS Program below. In the example to the right, the file
          <br />
          path would be C:\Chem32\1\DATA\OJ-TEST-NEW-3
        </p>
      </div>

      <div class="w-2/5">
        <img src={img1} alt="Setting Sequence Subdirectory" />
      </div>
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Completing a Sequence Table for the Screening Process within ChemStation
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Assuming a screening process involving ten injections into ten unique
      columns, you will need to complete a sequence table with one injection per
      sequence line. It is essential that each sequence line is set for 1
      Injection/Vial and has a unique Datafile name.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      When ChemStation initiates a sequence line, it creates a folder (within
      the previously defined Subdirectory) with the name defined in the Datafile
      parameter. This folder will contain all the chromatographic information
      related to this sequence line.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The MCS Program scans the Subdirectory for these new Datafile folders and
      uses the creation of these folders as triggers to coordinate injections
      with columns you wish to screen. As such, it is important to ensure that
      no sequence lines have the same Datafile name: This has a dual purpose of
      preventing data overwrite and ensuring the correct coordination of
      injections.
    </p>

    <div class="my-4">
      <img class="mx-auto" src={img2} alt="Completing a Sequence Table" />
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Defining the Folder Path of the Subdirectory within the MCS Program
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Now that ChemStation is set up accordingly, the MCS Program must be
      configured to watch ChemStation. From the MCS Program, click
      Preferences>>Set Folder Path. In the newly opened Browse for Folder
      window, find and select the Subdirectory you defined earlier.
    </p>

    <div class="my-4 text-sm sm:text-base md:text-lg">
      <img class="mx-auto" src={img3} alt="" />
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Coordinating Injections in the MCS Program
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The next step involves coordinating column selection with injections, and
      is easily completed by filling in the excel table in the MCS Program. The
      following explains what information you will need to input in this process
      (refer to the image below):
    </p>

    <ul class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">
        The left-most column represents the Injection # that you are
        coordinating.
      </li>
      <li class="ml-6">
        The COM-# column serves to define which Column Selector Unit you wish to
        send commands to. Users will usually have only one Column Selector Unit,
        and the COM-# associated with this unit becomes clear during
        installation.
      </li>
      <li class="ml-6">
        The Port-# column serves to define which Port on that Column Selector
        Unit you wish the flow from injections to pass through.
      </li>
    </ul>

    <p class="my-3">
      In the Example below, the First Injection (COM-1 Port-1) will flow through
      the Primesep A Column, the Second Injection (COM-1 Port-2) will flow
      through the Primesep 100 Column, the Seventh Injection (COM-1 Port-7) will
      flow through the Primesep SB Column, etc.
    </p>

    <div class="flex gap-6">
      <div>
        <img class="mx-auto" src={img4} alt="" />
      </div>
      <div>
        <img class="mx-auto" src={img5} alt="" />
      </div>
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Starting the MCS Program and Beginning the Method/Sequence in ChemStation
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      At this point, ChemStation's sequence table has been configured, the
      Subdirectory in which the injection data will be stored is defined, the
      MCS Program is set to monitor said Subdirectory, and the MCS Program is
      configured to coordinate injections through their appropriate columns.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To begin the screening process, simply Start the MCS Program and then
      begin the Sequence, defined above, in ChemStation. Please note that the
      MCS Program should be started first so that it can be on the lookout for
      any actions ChemStation takes and respond accordingly.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Now, as the HPLC System makes its injections, the MCS Program will
      coordinate injection flow. Upon completion, you will have ten
      chromatograms of your sample injected through ten different columns in the
      previously defined Subdirectory.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      We encourage users to utilize our&nbsp;<a
        href="/chromatogram-stacking-program">Chromatogram Stacking Program</a
      >&nbsp;to easily view all ten chromatograms at once to further accelerate
      your method development process.
    </p>
  </div>
</div>

<style>
  .indent-1 {
    text-indent: 2rem !important;
  }

  .indent-1::marker {
    text-indent: 2rem !important;
  }

  .indent-2 {
    text-indent: 4rem !important;
  }

  .indent-2::marker {
    text-indent: 4rem !important;
  }
</style>
