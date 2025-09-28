<script>
  import img1 from "$lib/assets/chiral-technologies/1.webp";

  import img1_1 from "$lib/assets/chiral-technologies/1.1.webp";
  import img1_2 from "$lib/assets/chiral-technologies/1.2.webp";
  import img1_3 from "$lib/assets/chiral-technologies/1.3.webp";
  import img1_4 from "$lib/assets/chiral-technologies/1.4.webp";

  import img2 from "$lib/assets/chiral-technologies/2.webp";

  import img2_1 from "$lib/assets/chiral-technologies/2.1.webp";
  import img2_2 from "$lib/assets/chiral-technologies/2.2.webp";

  import img3 from "$lib/assets/chiral-technologies/3.webp";
  import img4 from "$lib/assets/chiral-technologies/4.webp";
  import img5 from "$lib/assets/chiral-technologies/5.webp";
  import img6 from "$lib/assets/chiral-technologies/6.webp";
  import img7 from "$lib/assets/chiral-technologies/7.webp";
  import img8 from "$lib/assets/chiral-technologies/8.webp";
  import img9 from "$lib/assets/chiral-technologies/9.webp";
  import img10 from "$lib/assets/chiral-technologies/10.webp";

  import ImageWithText from "$lib/components/ImageWithText.svelte";
</script>

<div
  class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    Chiral Technologies
  </h1>
  <div class="w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Immobilized Polyssaccharide CSPs from Chiral Technologies
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      The advent of immobilized polysaccharide CSPs — CHIRALPAK® IA™, IB™,
      IC™, ID™, IE™ and IF™ — now allows chemists to choose from a large
      assortment of organic solvents as mobile phases and better control
      compound solubility, leading to the development of new separations with
      high levels of enantioselective recognition of chiral molecules.
    </p>

    <div class="my-4 flex justify-evenly">
      <div>
        <img src={img1} alt="" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img src={img1_1} alt="" />
        <img src={img1_2} alt="" />
        <img src={img1_3} alt="" />
        <img src={img1_4} alt="" />
      </div>
    </div>

    <div class="my-4 flex justify-evenly">
      <div>
        <img src={img2} alt="" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img src={img2_1} alt="" />
        <div>
          <img src={img2_2} alt="" />
          <p>* Unique Chiral Selectors</p>
        </div>
      </div>
    </div>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Immobilized Stationary Phases
    </p>

    <table class="my-4 table-auto">
      <thead>
        <tr>
          <th class=" bg-secondary"> Attributes</th>
          <th class=" bg-secondary">Immobilized Selectors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-primary p-4">Reliability</td>
          <td class="bg-primary p-4">Daicel Authentic Selectors</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Robustness</td>
          <td class="bg-primary p-4">Solvent Flexibility</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Reproducibility</td>
          <td class="bg-primary p-4">Easy Column Regeneration</td>
        </tr>
        <tr>
          <td class="bg-primary p-4">Loading Capacity</td>
          <td class="bg-primary p-4">
            High Loading Capacity Greatly <br />
            Improved due to Analyte Solubility
          </td>
        </tr>
      </tbody>
    </table>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Complementarity
    </p>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IA™ </strong>
    </p>

    <ImageWithText
      imgsrc={img3}
      header="CHIRALPAK® IA™"
      content="Meclizine Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IA™ </strong>
    </p>

    <ImageWithText
      imgsrc={img4}
      header="CHIRALPAK® IA™"
      content="y-Phenyl-y-butyrolactone Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IB™</strong>
    </p>

    <ImageWithText
      imgsrc={img5}
      header="CHIRALPAK® IB™"
      content="Indapamide Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IC™</strong>
    </p>

    <ImageWithText
      imgsrc={img6}
      header="CHIRALPAK® IC™"
      content="5-Benzylhydantoin Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® ID™ </strong>
    </p>

    <ImageWithText
      imgsrc={img7}
      header="CHIRALPAK® ID™"
      content="Amlodipine Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® ID™ </strong>
    </p>

    <ImageWithText
      imgsrc={img8}
      header="CHIRALPAK® ID™"
      content="Cisapride Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IE™ </strong>
    </p>

    <ImageWithText
      imgsrc={img9}
      header="CHIRALPAK® IE™"
      content="Cetirizine Separation"
    ></ImageWithText>

    <p class="my-4 text-sm sm:text-base md:text-lg">
      <strong> CHIRALPAK® IF™ </strong>
    </p>

    <ImageWithText
      imgsrc={img10}
      header="CHIRALPAK® IF™"
      content="Methyclothiazide Separation"
    ></ImageWithText>
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
