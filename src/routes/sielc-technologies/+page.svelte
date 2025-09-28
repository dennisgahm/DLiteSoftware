<script>
  import img1 from "$lib/assets/sielc-technologies/1.webp";
  import img2 from "$lib/assets/sielc-technologies/2.webp";
  import img3 from "$lib/assets/sielc-technologies/3.webp";
  import img4 from "$lib/assets/sielc-technologies/4.webp";
  import img5 from "$lib/assets/sielc-technologies/5.webp";
  import img6 from "$lib/assets/sielc-technologies/6.webp";
  import img7 from "$lib/assets/sielc-technologies/7.webp";
  import img8 from "$lib/assets/sielc-technologies/8.gif";
  import img9 from "$lib/assets/sielc-technologies/9.webp";
  import img10 from "$lib/assets/sielc-technologies/10.webp";

  import ImageWithText from "$lib/components/ImageWithText.svelte";
</script>

<div
  class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    SIELC Technologies
  </h1>
  <div class="w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Primesep Columns From SIELC
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Primesep columns are highly versatile columns that separate a huge range
      of compounds, utilizing several separation modes by choosing a particular
      mobile phase. Where traditional stationary phase design was overly
      concerned about minimizing the effects of "unwanted" secondary
      interactions, SIELC's Switch Phase® Technology is designed to precisely
      control the type and strength of these interactions to offer unparalleled
      selectivity.
    </p>

    <div class="my-3 flex justify-evenly gap-4">
      <ImageWithText
        imgsrc={img1}
        header="Primesep 100 (4.6x150mm)"
        content="Flow: 1.0 mL/min
Detection: UV 250nm
Mobile Phase: MeCN 15%, H2SO4 0.15%"
      ></ImageWithText>

      <ImageWithText
        imgsrc={img2}
        header="Primesep C (4.6x50mm)"
        content="Flow: 1.0 mL/min
Detection: ELSD
Mobile Phase: MeOH/NH4/Acetate - 60/40/20 mM pH 5.0"
      ></ImageWithText>

      <ImageWithText
        imgsrc={img3}
        header="Primesep SB (3.0x50mm)"
        content="Flow: 0.5 mL/min
Detection: UV 270, 325 nm
Mobile Phase: MeCN gradient 50-80% in 5 min, 5 min hold, AcOH -0.1"
      ></ImageWithText>
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Mixed-Mode Stationary Phases
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      A stationary phase that provides more than one strong and controllable
      method of interaction can be said to be a mixed-mode stationary phase.
      Primesep Columns' great versatility arises from their mixed-mode
      stationary phases.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Typically, a good reverse-phase column has only one mode of selection -
      hydrophobic interaction. As a result, the reverse-phase columns are
      greatly limited in utility (difficult to retain polar compounds, hard to
      separate closely related compounds, unavoidably long analysis times for
      samples containing compounds of greatly different polarity).
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Primesep Columns, on the other hand, have a variety of modes of
      interaction based on the particular functional group attached to the
      stationary phase. Pictured below are four of the most common: negatively
      charged functional group for cation exchange, positively charged
      functional group for anion exchange, complex function group for complex
      interaction, and phenyl functional group for pi-pi interactions.
    </p>

    <div class="my-3 flex justify-evenly gap-4">
      <ImageWithText imgsrc={img4} header="Negative Functional Group" content=""
      ></ImageWithText>
      <ImageWithText imgsrc={img5} header="Positive Functional Group" content=""
      ></ImageWithText>
      <ImageWithText imgsrc={img6} header="Complex Functional Group" content=""
      ></ImageWithText>
      <ImageWithText imgsrc={img7} header="Phenyl Functional Group" content=""
      ></ImageWithText>
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      SWITCH Phase® Technology
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      Primesep Columns are further enhanced by SWITCH Phase® Technology, which
      provides even greater control over the columns' selectivity. As every
      functional group in the various Primesep Columns have a unique pKa value,
      the functional groups can be ionized or non-ionized depending on the pH of
      the mobile phase.
    </p>

    <ImageWithText imgsrc={img8} header="Switch Phase Technology" content=""
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      If the pH of the mobile phase is close to, or above, the transition value
      of the Primesep C functional group, the Primesep C column will function as
      a mixed-mode Ion-Exchange and Reverse-Phase Column. If the pH of the
      mobile phase is below the transition value of the Primesep C functional
      group, the Primesep C column will function as a reverse-phase column with
      a non-ionized functional group.
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">For Example:</p>

    <table class="my-4 table-auto">
      <thead>
        <tr>
          <th class=" bg-secondary"> Cation Exchange <br /> Column Type</th>
          <th class=" bg-secondary"
            >pKa Value of Embedded <br /> Carboxylic Acid</th
          >
          <th class="bg-secondary"
            >Basic Compounds
            <br />
            Separated</th
          >
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-primary p-4">Primesep 500</td>
          <td class="bg-primary p-4">pKa = 5.0 </td>
          <td class="bg-primary p-4">Strong Bases, Metals</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Primesep C</td>
          <td class="bg-primary p-4">pKa = 3.5</td>
          <td class="bg-primary p-4">Strong Bases, Dibases</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Primesep 200</td>
          <td class="bg-primary p-4">pKa = 2.0</td>
          <td class="bg-primary p-4">Strong Bases, Dibases </td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Primesep 100</td>
          <td class="bg-primary p-4"> pKa = 1.0 </td>
          <td class="bg-primary p-4">Weak, Medium Bases, AA, Metals</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Primesep A</td>
          <td class="bg-primary p-4"> pKa = 0 </td>
          <td class="bg-primary p-4">Weak Bases, AA, Metals</td>
        </tr>
      </tbody>
    </table>

    <div class="my-4 flex gap-4 justify-evenly">
      <ImageWithText
        imgsrc={img9}
        header="pH Above Primesep C Transition Point"
        content="Primesep C (4.6x150mm)
Flow: 1.0 mL/min
Detection: UV 210 nm

Mobile Phase: Water/MeCN - 60/40 Ammonium Acetate 20 mM pH 5.0"
      ></ImageWithText>
      <ImageWithText
        imgsrc={img10}
        header="pH Below Primesep C Transition Point"
        content="Primesep C (4.6x150mm)
Flow: 1.0 mL/min
Detection: UV 210 nm

Mobile Phase: Water/MeCN/TFA - 60/40/0.1 pH 2.0"
      ></ImageWithText>
    </div>
  </div>
</div>

<style>
  img {
    border-radius: 20px;
  }

  th:first-of-type {
    border-top-left-radius: 10px;
  }
  th:last-of-type {
    border-top-right-radius: 10px;
  }
  tr:last-of-type td:first-of-type {
    border-bottom-left-radius: 10px;
  }
  tr:last-of-type td:last-of-type {
    border-bottom-right-radius: 10px;
  }
</style>
