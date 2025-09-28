<script>
  import img1 from "$lib/assets/chromatogram-stacking-program-img/1.webp";
  import img2 from "$lib/assets/chromatogram-stacking-program-img/2.webp";
  import img3 from "$lib/assets/chromatogram-stacking-program-img/3.webp";
  import img4 from "$lib/assets/chromatogram-stacking-program-img/4.webp";
  import img5 from "$lib/assets/chromatogram-stacking-program-img/5.webp";
  import img6 from "$lib/assets/chromatogram-stacking-program-img/6.webp";
  import img7 from "$lib/assets/chromatogram-stacking-program-img/7.webp";
  import img8 from "$lib/assets/chromatogram-stacking-program-img/8.webp";
  import img9 from "$lib/assets/chromatogram-stacking-program-img/9.webp";
  import img10 from "$lib/assets/chromatogram-stacking-program-img/10.webp";
  import img11 from "$lib/assets/chromatogram-stacking-program-img/11.webp";
  import img12 from "$lib/assets/chromatogram-stacking-program-img/12.webp";
  import img13 from "$lib/assets/chromatogram-stacking-program-img/13.webp";
  import img14 from "$lib/assets/chromatogram-stacking-program-img/14.webp";
</script>

<div
  class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    Chromatogram Stacking Program
  </h1>
  <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <div class="relative">
      <img class="pb-20" src={img1} alt="" />
      <img class="absolute top-1/3 left-1/2" src={img2} alt="" />
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Description
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The Chromatogram Stacking Program is designed to provide an easy way to
      quickly view, compare, and share chromatograms in the method development
      process. &nbsp;Though great as a standalone product, the Chromatogram
      Stacking Program gives an even greater boost to productivity when used
      alongside the <span
        ><a class="underline" href="/mccps-system">MCCPS System</a></span
      >. &nbsp;For a full list of features and detailed explanations of
      functionality, please download the Chromatogram Stacking Program User's
      Manual from the
      <span><a class="underline" href="/downloads">Downloads Page</a></span>.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The following will briefly walk you through how to use the Chromatogram
      Stacking Program to accelerate your method development process:
    </p>

    <ol
      class="list-decimal list-inside space-y-2 text-sm sm:text-base md:text-lg"
    >
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Loading Chromatograms
        </a>
      </li>
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Managing Chromatograms
        </a>
      </li>
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Printing Chromatograms
        </a>
      </li>
    </ol>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Loading Chromatograms
    </p>

    <div class="flex flex-wrap justify-between mb-3">
      <div class="w-full md:w-3/5 mb-3 md:mb-0">
        <p class="my-4 text-sm sm:text-base md:text-lg">
          In this example, we will assume the user has completed a screening
          process involving 20 Chiral Columns and that the user now wishes to
          stack these chromatograms to compare them and determine the best
          separation.
        </p>

        <p class="my-4 text-sm sm:text-base md:text-lg">
          When opening the Chromatogram Stacking Program, the Display Window
          will be empty as shown below. To populate the Display Window with the
          chromatograms from the screening run, we must browse for the folder
          containing the injection data for that screening run. In the CS
          Program, click Sequence>>Browse to open the Browse For Folder window
          (seen at the right) to select the subdirectory with injection
          information.
        </p>
        <img class="mx-auto" src={img3} alt="" />
      </div>
      <div class="w-full md:w-2/5">
        <img class="h-full" src={img4} alt="" />
      </div>
    </div>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      After the correct folder is selected, the Chromatogram Stacking Program
      will order the injection folders alphanumerically, and display the
      chromatograms in that order. After loading the chromatograms, resizing the
      Display Window is recommended, as you are able to view up to three
      chromatograms per row (if your screen resolution allows for it); the
      chromatograms will then order from left to right. In the image below, 20
      chromatograms have been loaded, and the Display Window has been resized to
      allow for two chromatograms per row (click the image to enlarge).
    </p>

    <div class="my-">
      <img class="mx-auto" src={img5} alt="" />
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Managing Chromatograms
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To further aid in the chromatogram comparison process, the Chromatogram
      Stacking Program gives the user options to better manage the chromatograms
      in the Display Window.
    </p>

    <ul class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Hiding Chromatograms
        </a>
      </li>
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Removing Chromatograms
        </a>
      </li>
      <li class="ml-6">
        <a class="underline" href="/chromatogram-stacking-program">
          Expanding Chromatograms
        </a>
      </li>
    </ul>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To better explain these features, we will focus on one Chromatogram
      Window, as displayed below. Notice, to the left of the chromatogram's file
      path, are two boxes. For extra clarity, the boxes are zoomed in on the
      picture to the right. We shall refer to these as the CheckBox and the
      SolidBox from now on, and these will be used in hiding and removing
      chromatograms as described in further detail below.
    </p>

    <div class="flex flex-wrap justify-evenly my-4">
      <img src={img6} alt="" />
      <img src={img7} alt="" />
    </div>

    <p class="my-4 text-sm sm:text-base md:text-lg font-semibold underline">
      Hiding Chromatograms
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      In the process of comparing chromatograms, it may be beneficial to hide
      the chromatograms that have failed to meet certain standards. By clicking
      the CheckBox in that particular chromatogram's window, you will hide the
      chromatogram. The chromatogram's order will still be preserved; to reopen
      the chromatogram for reviewing, simply recheck the CheckBox of the
      chromatogram you wish to review. The figure below displays how the CS
      Program manages hidden chromatograms.
    </p>

    <div class="mb-3">
      <img class="mx-auto" src={img8} alt="" />
    </div>

    <p class="my-4 text-sm sm:text-base md:text-lg font-semibold underline">
      Removing Chromatograms
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      In the process of comparing chromatograms, it may be beneficial to
      entirely remove the chromatograms that have failed to meet certain
      standards. By clicking the SolidBox in that particular chromatogram's
      window, you will remove the chromatogram from the Display Window. In this
      case, the chromatogram's order will not be preserved. To reopen the
      chromatogram for reviewing, you must reload the files from the
      subdirectory by clicking Settings>>Reload. The figure below shows how the
      CS Program manages removed chromatograms (note: only 5 of the original 20
      chromatograms are displayed).
    </p>

    <div class="mb-3">
      <img class="mx-auto" src={img9} alt="" />
    </div>

    <p class="my-4 text-sm sm:text-base md:text-lg font-semibold underline">
      Expanding Chromatograms
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      In the process of comparing chromatograms, it may be beneficial to zoom in
      on the chromatograms that have met certain standards. By double-clicking
      the chromatogram, you will open a Pop-Out Window with a full resolution
      image of that chromatogram. This Pop-Out Window can be stretched to
      enlarge the image further if desired.
    </p>

    <div class="mb-3">
      <img class="mx-auto" src={img10} alt="" />
    </div>

    <p class="text-2xl"><strong>Printing Chromatograms</strong></p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To aid in the chromatogram sharing process, the Chromatogram Stacking
      Program gives the user options to print the chromatograms in the Display
      Window. Some users may wish to skip the paper printout and make a digital
      copy from the start; the Chromatogram Stacking Program also makes digital
      copies via printing to Microsoft OneNote or Microsoft XPS Document Writer.
      The following will detail various print options available and explain how
      to print from the Display Window and the Pop-Out Window.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg font-semibold underline">
      Printing from the Display Window
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      With the Display Window populated with chromatograms, you will need to
      select which chromatograms you want to print. Selecting Print from the
      menu will instruct the CS Program to print every chromatogram present in
      the Display Window (even those that are hidden via CheckBox). To print
      only the chromatograms you want, remove all other unwanted chromatograms
      from the Display Window by clicking each respective SolidBox.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      After chromatograms have been selected, you will need to determine how you
      wish the chromatograms to be distributed on your paper and where you want
      them to be printed.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The CS Program has two settings for chromatogram distribution under the
      Print menu:
    </p>

    <ol class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">
        "1 per page" -- prints 1 chromatogram per page (larger image, greater
        detail)
      </li>
      <li class="ml-6">
        "10 per page" -- prints 10 chromatograms per page (smaller images,
        straightforward juxtaposition)
      </li>
    </ol>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To select where you wish the chromatograms to be printed, select Print
      Chromatograms from the Print menu to open the Print Window. In this window
      there will be an area where you define the printer; the following are a
      few possibilities:
    </p>

    <ul class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">
        Your Installed Physical Printer -- prints out a hardcopy
      </li>
      <li class="ml-6">
        Microsoft OneNote -- creates a page in your desired notebook containing
        all chromatogram pages
      </li>
      <li class="ml-6">
        Microsoft XPS Document Writer -- creates an XPS file (Microsoft's .pdf)
        of all chromatogram pages
      </li>
    </ul>

    <div class="flex flex-wrap justify-evenly my-4 gap-6">
      <img src={img14} alt="Printout: 1 per page" />
      <img src={img11} alt="Printout: 10 per page" />
    </div>

    <p class="my-4 text-sm sm:text-base md:text-lg font-semibold underline">
      Printing from the Display Window
    </p>
    <p class="my-4 text-sm sm:text-base md:text-lg">
      After you have expanded a chromatogram into a Pop-Out Window, you will
      need to determine how you wish the chromatograms to be distributed on your
      paper and where you want them to be printed.
    </p>
    <p class="my-4 text-sm sm:text-base md:text-lg">
      The CS Program has two settings for printing the chromatogram currently
      expanded in the Pop-Out Window:
    </p>

    <ol
      class="list-delist-disc list-inside space-y-2 text-sm sm:text-base md:text-lg"
    >
      <li class="ml-6">
        "Original Aspect Ratio" -- maximizes chromatogram for greatest detail
        while maintaining height-to-width ratio
      </li>
      <li class="ml-6">
        "Stretch to Fill Page" -- maximizes chromatogram to fill the entire page
      </li>
    </ol>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      To select where you wish the chromatograms to be printed, select Print
      from the File menu to open the Print Window. In this window there will be
      an area where you define the printer; the following are a few
      possibilities:
    </p>

    <ul class="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
      <li class="ml-6">
        Your Installed Physical Printer -- prints out a hardcopy
      </li>
      <li class="ml-6">
        Microsoft OneNote -- creates a page in your desired notebook containing
        all chromatogram pages
      </li>
      <li class="ml-6">
        Microsoft XPS Document Writer -- creates an XPS file (Microsoft's .pdf)
        of all chromatogram pages
      </li>
    </ul>
    <div class="flex flex-wrap justify-evenly mb-3">
      <img src={img12} alt="Printout: Original Aspect Ratio" />
      <img src={img13} alt="Printout: Stretch to Fill Page" />
    </div>
  </div>
</div>
