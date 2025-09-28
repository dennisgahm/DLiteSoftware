import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { i as img1$1, a as img2$1, b as img3$1, c as img4$1, d as img5$1, e as img6, f as img7, g as img8, h as img9, j as img10, k as img11, l as img12, m as img13, n as img14, M as MiniCarousel } from "../../../chunks/14.js";
const mcpProgramCards = [
  {
    imgsrc: img1$1,
    header: "Screening Run Setup",
    content: [
      "Coordinate Injections with Columns by Completing the Excel Table:",
      "-Line # indicates which Injection # the MCS Program will coordinate",
      "--- i.e. Line 1 corresponds with Injection 1",
      "--- more lines are added as you complete the table",
      "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
      "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"
    ]
  },
  {
    imgsrc: img2$1,
    header: "Screening Run Setup",
    content: [
      "Coordinate Injections with Columns by Completing the Excel Table:",
      "-Line # indicates which Injection # the MCS Program will coordinate",
      "--- i.e. Line 1 corresponds with Injection 1",
      "--- more lines are added as you complete the table",
      "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
      "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"
    ]
  },
  {
    imgsrc: img3$1,
    header: "Screening Run Setup",
    content: [
      "Coordinate Injections with Columns by Completing the Excel Table:",
      "-Line # indicates which Injection # the MCS Program will coordinate",
      "--- i.e. Line 1 corresponds with Injection 1",
      "--- more lines are added as you complete the table",
      "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
      "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"
    ]
  },
  {
    imgsrc: img4$1,
    header: "Screening Run Setup",
    content: [
      "Coordinate Injections with Columns by Completing the Excel Table:",
      "-Line # indicates which Injection # the MCS Program will coordinate",
      "--- i.e. Line 1 corresponds with Injection 1",
      "--- more lines are added as you complete the table",
      "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
      "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"
    ]
  },
  {
    imgsrc: img5$1,
    header: "Screening Run Start",
    content: [
      "Program:",
      "-Starts Timers",
      "--- Current Injection Time",
      "--- Screening Run Time",
      "-Waits for ChemStation to make the 1st Injection",
      "--- May take some time as the HPLC System reaches method parameters",
      "Assume a 10min (600sec) method for each injection (10 injections total) in this example."
    ]
  },
  {
    imgsrc: img6,
    header: "1st Injection Coordination",
    content: [
      "ChemStation begins to make the 1st Injection with the HPLC System.",
      "The MCS Program senses the 1st Injection and commands the Column Selector Unit associated with COM-1 to select Port-1 (Column-01).",
      "The right-facing triangle and blue highlight moves to Line 1 to indicate the currently selected Port=Column.",
      "Current Injection Timer is reset; Screening Run Timer continues."
    ]
  },
  {
    imgsrc: img7,
    header: "1st Injection Coordination",
    content: [
      "Assuming a 10min (600sec) method for each injection, the 1st Injection is at its halfway point.",
      "The Current Injection Timer and Screening Run Timer accrues 300 seconds."
    ]
  },
  {
    imgsrc: img8,
    header: "2nd Injection Coordination",
    content: [
      "The 10min (600sec) method for the 1st Injection is completed and ChemStation begins to make the 2nd Injection with the HPLC System.",
      "The MCS Program senses the 2nd Injection and commands the Column Selector Unit associated with COM-1 to select Port-2 (Column-02).",
      "The right-facing triangle and blue highlight moves to Line 2 to indicate the currently selected Port=Column.",
      "Current Injection Timer is reset; Screening Run Timer continues."
    ]
  },
  {
    imgsrc: img9,
    header: "2nd Injection Coordination",
    content: [
      "Assuming a 10min (600sec) method for each injection, the 2nd Injection is at its halfway point.",
      "The Current Injection Timer and Screening Run Timer accrues 300 seconds."
    ]
  },
  {
    imgsrc: img10,
    header: "3rd Injection Coordination",
    content: [
      "The 10min (600sec) method for the 2nd Injection is completed and ChemStation begins to make the 3rd Injection with the HPLC System.",
      "The MCS Program senses the 3rd Injection and commands the Column Selector Unit associated with COM-1 to select Port-3 (Column-03).",
      "The right-facing triangle and blue highlight moves to Line 3 to indicate the currently selected Port=Column.",
      "Current Injection Timer is reset; Screening Run Timer continues."
    ]
  },
  {
    imgsrc: img11,
    header: "6th Injection Coordination",
    content: [
      "Skipping forward, the 10min (600sec) method for the 5th Injection is completed and ChemStation begins to make the 6th Injection with the HPLC System.",
      "The MCS Program senses the 6th Injection and commands the Column Selector Unit associated with COM-1 to select Port-6 (Column-06).",
      "The right-facing triangle and blue highlight moves to Line 6 to indicate the currently selected Port=Column.",
      "Current Injection Timer is reset; Screening Run Timer continues."
    ]
  },
  {
    imgsrc: img12,
    header: "9th Injection Coordination",
    content: [
      "Skipping forward, the 10min (600sec) method for the 8th Injection is completed and ChemStation begins to make the 9th Injection with the HPLC System.",
      "The MCS Program senses the 9th Injection and commands the Column Selector Unit associated with COM-1 to select Port-9 (Column-09).",
      "The right-facing triangle and blue highlight moves to Line 9 to indicate the currently selected Port=Column.",
      "Current Injection Timer is reset; Screening Run Timer continues. "
    ]
  },
  {
    imgsrc: img13,
    header: "9th Injection Coordination",
    content: [
      "Assuming a 10min (600sec) method for each injection, the 9th Injection is at its halfway point.",
      "The Current Injection Timer and Screening Run Timer accrues 300 seconds."
    ]
  },
  {
    imgsrc: img14,
    header: "10th Injection Coordination",
    content: [
      "The 10min (600sec) method for the 9th Injection is completed and ChemStation begins to make the 10th (and last) Injection with the HPLC System.",
      "The MCS Program senses the 10th Injection and commands the Column Selector Unit associated with COM-1 to select Port-10 (Column-10).",
      "As no injections remain, the blue highlight is removed, the Timers are reset, and the MCS Program is stopped.",
      "Meanwhile, ChemStation continues, and completes, the 10min (600sec) method for the 10th Injection."
    ]
  }
];
const img1 = "/DLiteSoftware/_app/immutable/assets/1.C37UbnTg.webp";
const img2 = "/DLiteSoftware/_app/immutable/assets/2.Cxl87oMg.webp";
const img3 = "/DLiteSoftware/_app/immutable/assets/3.BZSuGD6V.webp";
const img4 = "/DLiteSoftware/_app/immutable/assets/4.D3dct8zZ.webp";
const img5 = "/DLiteSoftware/_app/immutable/assets/5.BLWcmbUd.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"><h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6" data-svelte-h="svelte-v3sz71">MCS Program <span class="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary mt-2">(Multiple Column Screening)</span></h1> <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">${validate_component(MiniCarousel, "MiniCarousel").$$render($$result, { CarouselCards: mcpProgramCards }, {}, {})} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1o1l4gv">As described on the <a class="underline" href="/mccps-system">MCCPS System page</a>, the MCS Program is designed to efficiently screen multiple columns to
      accelerate the method development process.  As you make repeated
      injections of your sample with ChemStation (or equivalent Chromatographic
      Data System), the MCS Program will cycle through the columns installed on
      the Column Selector Unit.  At the end of the run, you will have
      chromatographic data available for each column, greatly accelerating your
      method development. For a full list of features and functionality
      (like saving/loading configurations, etc.) please download the MCCPS
      System User&#39;s Manual from the <a class="underline" href="/downloads">Downloads Page</a>.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-133og8i">The following will briefly walk you through how to use the MCS Program and
      illuminate how it works alongside your HPLC System and the MCCPS System
      Column Selector Unit.</p> <ol class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-17h4i2w"><li class="ml-6">Creating a Sequence Subdirectory within ChemStation</li> <li class="ml-6">Completing a Sequence Table for the Screening Process within ChemStation</li> <li class="ml-6">Defining the Folder Path of the Subdirectory within the MCS Program</li> <li class="ml-6">Coordinating Injections in the MCS Program</li> <li class="ml-6">Starting MCS Program and Beginning the Method/Sequence in ChemStation</li></ol> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-1g1jeiw">Creating a Sequence Subdirectory within ChemStation</p> <div class="flex my-4" data-svelte-h="svelte-1hablul"><div class="w-3/5 px-3"><p class="my-4 text-sm sm:text-base md:text-lg">In the Sequence Parameters window in ChemStation, you are able to
          define the Subdirectory in which the chromatographic data files from
          this run will be saved.</p> <p class="my-4 text-sm sm:text-base md:text-lg">For the MCS Program to coordinate injections with columns, it needs to
          know when the HPLC System is making an injection. By creating a
          subdirectory for this particular run, we create a folder that the MCS
          Program can scan for new folders which ChemStation creates to contain
          information for each sequence line in this run.</p> <p class="my-4 text-sm sm:text-base md:text-lg">*Make a note of the file path and subdirectory as it is required to
          configure the MCS Program below. In the example to the right, the file
          <br>
          path would be C:\\Chem32\\1\\DATA\\OJ-TEST-NEW-3</p></div> <div class="w-2/5"><img${add_attribute("src", img1, 0)} alt="Setting Sequence Subdirectory"></div></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-15s62jh">Completing a Sequence Table for the Screening Process within ChemStation</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-ibeg14">Assuming a screening process involving ten injections into ten unique
      columns, you will need to complete a sequence table with one injection per
      sequence line. It is essential that each sequence line is set for 1
      Injection/Vial and has a unique Datafile name.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1gx4d96">When ChemStation initiates a sequence line, it creates a folder (within
      the previously defined Subdirectory) with the name defined in the Datafile
      parameter. This folder will contain all the chromatographic information
      related to this sequence line.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1hch239">The MCS Program scans the Subdirectory for these new Datafile folders and
      uses the creation of these folders as triggers to coordinate injections
      with columns you wish to screen. As such, it is important to ensure that
      no sequence lines have the same Datafile name: This has a dual purpose of
      preventing data overwrite and ensuring the correct coordination of
      injections.</p> <div class="my-4" data-svelte-h="svelte-lgoi6k"><img class="mx-auto"${add_attribute("src", img2, 0)} alt="Completing a Sequence Table"></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-mnh9dq">Defining the Folder Path of the Subdirectory within the MCS Program</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-il1if6">Now that ChemStation is set up accordingly, the MCS Program must be
      configured to watch ChemStation. From the MCS Program, click
      Preferences&gt;&gt;Set Folder Path. In the newly opened Browse for Folder
      window, find and select the Subdirectory you defined earlier.</p> <div class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-3yygps"><img class="mx-auto"${add_attribute("src", img3, 0)} alt=""></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-k3nxug">Coordinating Injections in the MCS Program</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-vqwcvy">The next step involves coordinating column selection with injections, and
      is easily completed by filling in the excel table in the MCS Program. The
      following explains what information you will need to input in this process
      (refer to the image below):</p> <ul class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1sgc6ab"><li class="ml-6">The left-most column represents the Injection # that you are
        coordinating.</li> <li class="ml-6">The COM-# column serves to define which Column Selector Unit you wish to
        send commands to. Users will usually have only one Column Selector Unit,
        and the COM-# associated with this unit becomes clear during
        installation.</li> <li class="ml-6">The Port-# column serves to define which Port on that Column Selector
        Unit you wish the flow from injections to pass through.</li></ul> <p class="my-3" data-svelte-h="svelte-3n25p7">In the Example below, the First Injection (COM-1 Port-1) will flow through
      the Primesep A Column, the Second Injection (COM-1 Port-2) will flow
      through the Primesep 100 Column, the Seventh Injection (COM-1 Port-7) will
      flow through the Primesep SB Column, etc.</p> <div class="flex gap-6" data-svelte-h="svelte-1rntlu2"><div><img class="mx-auto"${add_attribute("src", img4, 0)} alt=""></div> <div><img class="mx-auto"${add_attribute("src", img5, 0)} alt=""></div></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-1xplzjy">Starting the MCS Program and Beginning the Method/Sequence in ChemStation</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-txm365">At this point, ChemStation&#39;s sequence table has been configured, the
      Subdirectory in which the injection data will be stored is defined, the
      MCS Program is set to monitor said Subdirectory, and the MCS Program is
      configured to coordinate injections through their appropriate columns.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1dkc734">To begin the screening process, simply Start the MCS Program and then
      begin the Sequence, defined above, in ChemStation. Please note that the
      MCS Program should be started first so that it can be on the lookout for
      any actions ChemStation takes and respond accordingly.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1jksl1r">Now, as the HPLC System makes its injections, the MCS Program will
      coordinate injection flow. Upon completion, you will have ten
      chromatograms of your sample injected through ten different columns in the
      previously defined Subdirectory.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1ka02tp">We encourage users to utilize our <a href="/chromatogram-stacking-program">Chromatogram Stacking Program</a> to easily view all ten chromatograms at once to further accelerate
      your method development process.</p></div> </div>`;
});
export {
  Page as default
};
