import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { I as ImageWithText } from "../../../chunks/ImageWithText.js";
const img1 = "/DLiteSoftware/_app/immutable/assets/1.BYRTjA3k.webp";
const img1_1 = "/DLiteSoftware/_app/immutable/assets/1.1.CYm84BLm.webp";
const img1_2 = "/DLiteSoftware/_app/immutable/assets/1.2.NaQT8ASb.webp";
const img1_3 = "/DLiteSoftware/_app/immutable/assets/1.3.rcy_Zsz0.webp";
const img1_4 = "/DLiteSoftware/_app/immutable/assets/1.4.D1VDtZLk.webp";
const img2 = "/DLiteSoftware/_app/immutable/assets/2.D2bKy6-S.webp";
const img2_1 = "/DLiteSoftware/_app/immutable/assets/2.1.DOCaWuEy.webp";
const img2_2 = "/DLiteSoftware/_app/immutable/assets/2.2.JkpotLdY.webp";
const img3 = "/DLiteSoftware/_app/immutable/assets/3.B-O1APGC.webp";
const img4 = "/DLiteSoftware/_app/immutable/assets/4.METMTYoo.webp";
const img5 = "/DLiteSoftware/_app/immutable/assets/5.DmFOJAtQ.webp";
const img6 = "/DLiteSoftware/_app/immutable/assets/6.CE3dJ6Lh.webp";
const img7 = "/DLiteSoftware/_app/immutable/assets/7.jjXAKD5E.webp";
const img8 = "/DLiteSoftware/_app/immutable/assets/8.C7WeLJrV.webp";
const img9 = "/DLiteSoftware/_app/immutable/assets/9.B4dfCR_J.webp";
const img10 = "/DLiteSoftware/_app/immutable/assets/10.C5ImHZSC.webp";
const css = {
  code: "img.svelte-znjs76.svelte-znjs76{border-radius:20px}th.svelte-znjs76.svelte-znjs76:first-of-type{border-top-left-radius:10px}th.svelte-znjs76.svelte-znjs76:last-of-type{border-top-right-radius:10px}tr.svelte-znjs76:last-of-type td.svelte-znjs76:first-of-type{border-bottom-left-radius:10px}tr.svelte-znjs76:last-of-type td.svelte-znjs76:last-of-type{border-bottom-right-radius:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import img1 from \\"$lib/assets/chiral-technologies/1.webp\\";\\n\\n  import img1_1 from \\"$lib/assets/chiral-technologies/1.1.webp\\";\\n  import img1_2 from \\"$lib/assets/chiral-technologies/1.2.webp\\";\\n  import img1_3 from \\"$lib/assets/chiral-technologies/1.3.webp\\";\\n  import img1_4 from \\"$lib/assets/chiral-technologies/1.4.webp\\";\\n\\n  import img2 from \\"$lib/assets/chiral-technologies/2.webp\\";\\n\\n  import img2_1 from \\"$lib/assets/chiral-technologies/2.1.webp\\";\\n  import img2_2 from \\"$lib/assets/chiral-technologies/2.2.webp\\";\\n\\n  import img3 from \\"$lib/assets/chiral-technologies/3.webp\\";\\n  import img4 from \\"$lib/assets/chiral-technologies/4.webp\\";\\n  import img5 from \\"$lib/assets/chiral-technologies/5.webp\\";\\n  import img6 from \\"$lib/assets/chiral-technologies/6.webp\\";\\n  import img7 from \\"$lib/assets/chiral-technologies/7.webp\\";\\n  import img8 from \\"$lib/assets/chiral-technologies/8.webp\\";\\n  import img9 from \\"$lib/assets/chiral-technologies/9.webp\\";\\n  import img10 from \\"$lib/assets/chiral-technologies/10.webp\\";\\n\\n  import ImageWithText from \\"$lib/components/ImageWithText.svelte\\";\\n<\/script>\\n\\n<div\\n  class=\\"max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto\\"\\n>\\n  <h1\\n    class=\\"font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6\\"\\n  >\\n    Chiral Technologies\\n  </h1>\\n  <div class=\\"w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6\\">\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      Immobilized Polyssaccharide CSPs from Chiral Technologies\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      The advent of immobilized polysaccharide CSPs — CHIRALPAK® IA™, IB™,\\n      IC™, ID™, IE™ and IF™ — now allows chemists to choose from a large\\n      assortment of organic solvents as mobile phases and better control\\n      compound solubility, leading to the development of new separations with\\n      high levels of enantioselective recognition of chiral molecules.\\n    </p>\\n\\n    <div class=\\"my-4 flex justify-evenly\\">\\n      <div>\\n        <img src={img1} alt=\\"\\" />\\n      </div>\\n      <div class=\\"grid grid-cols-2 gap-4\\">\\n        <img src={img1_1} alt=\\"\\" />\\n        <img src={img1_2} alt=\\"\\" />\\n        <img src={img1_3} alt=\\"\\" />\\n        <img src={img1_4} alt=\\"\\" />\\n      </div>\\n    </div>\\n\\n    <div class=\\"my-4 flex justify-evenly\\">\\n      <div>\\n        <img src={img2} alt=\\"\\" />\\n      </div>\\n      <div class=\\"grid grid-cols-2 gap-4\\">\\n        <img src={img2_1} alt=\\"\\" />\\n        <div>\\n          <img src={img2_2} alt=\\"\\" />\\n          <p>* Unique Chiral Selectors</p>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      Immobilized Stationary Phases\\n    </p>\\n\\n    <table class=\\"my-4 table-auto\\">\\n      <thead>\\n        <tr>\\n          <th class=\\" bg-secondary\\"> Attributes</th>\\n          <th class=\\" bg-secondary\\">Immobilized Selectors</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Reliability</td>\\n          <td class=\\"bg-primary p-4\\">Daicel Authentic Selectors</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Robustness</td>\\n          <td class=\\"bg-primary p-4\\">Solvent Flexibility</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Reproducibility</td>\\n          <td class=\\"bg-primary p-4\\">Easy Column Regeneration</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Loading Capacity</td>\\n          <td class=\\"bg-primary p-4\\">\\n            High Loading Capacity Greatly <br />\\n            Improved due to Analyte Solubility\\n          </td>\\n        </tr>\\n      </tbody>\\n    </table>\\n\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      Complementarity\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IA™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img3}\\n      header=\\"CHIRALPAK® IA™\\"\\n      content=\\"Meclizine Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IA™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img4}\\n      header=\\"CHIRALPAK® IA™\\"\\n      content=\\"y-Phenyl-y-butyrolactone Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IB™</strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img5}\\n      header=\\"CHIRALPAK® IB™\\"\\n      content=\\"Indapamide Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IC™</strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img6}\\n      header=\\"CHIRALPAK® IC™\\"\\n      content=\\"5-Benzylhydantoin Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® ID™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img7}\\n      header=\\"CHIRALPAK® ID™\\"\\n      content=\\"Amlodipine Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® ID™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img8}\\n      header=\\"CHIRALPAK® ID™\\"\\n      content=\\"Cisapride Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IE™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img9}\\n      header=\\"CHIRALPAK® IE™\\"\\n      content=\\"Cetirizine Separation\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      <strong> CHIRALPAK® IF™ </strong>\\n    </p>\\n\\n    <ImageWithText\\n      imgsrc={img10}\\n      header=\\"CHIRALPAK® IF™\\"\\n      content=\\"Methyclothiazide Separation\\"\\n    ></ImageWithText>\\n  </div>\\n</div>\\n\\n<style>\\n  img {\\n    border-radius: 20px;\\n  }\\n\\n  th:first-of-type {\\n    border-top-left-radius: 10px;\\n  }\\n  th:last-of-type {\\n    border-top-right-radius: 10px;\\n  }\\n  tr:last-of-type td:first-of-type {\\n    border-bottom-left-radius: 10px;\\n  }\\n  tr:last-of-type td:last-of-type {\\n    border-bottom-right-radius: 10px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsME,+BAAI,CACF,aAAa,CAAE,IACjB,CAEA,8BAAE,cAAe,CACf,sBAAsB,CAAE,IAC1B,CACA,8BAAE,aAAc,CACd,uBAAuB,CAAE,IAC3B,CACA,gBAAE,aAAa,CAAC,gBAAE,cAAe,CAC/B,yBAAyB,CAAE,IAC7B,CACA,gBAAE,aAAa,CAAC,gBAAE,aAAc,CAC9B,0BAA0B,CAAE,IAC9B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"><h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6" data-svelte-h="svelte-1xccsmx">Chiral Technologies</h1> <div class="w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6"><p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-1dfbw1z">Immobilized Polyssaccharide CSPs from Chiral Technologies</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-18hsdhv">The advent of immobilized polysaccharide CSPs — CHIRALPAK® IA™, IB™,
      IC™, ID™, IE™ and IF™ — now allows chemists to choose from a large
      assortment of organic solvents as mobile phases and better control
      compound solubility, leading to the development of new separations with
      high levels of enantioselective recognition of chiral molecules.</p> <div class="my-4 flex justify-evenly" data-svelte-h="svelte-11daxdx"><div><img${add_attribute("src", img1, 0)} alt="" class="svelte-znjs76"></div> <div class="grid grid-cols-2 gap-4"><img${add_attribute("src", img1_1, 0)} alt="" class="svelte-znjs76"> <img${add_attribute("src", img1_2, 0)} alt="" class="svelte-znjs76"> <img${add_attribute("src", img1_3, 0)} alt="" class="svelte-znjs76"> <img${add_attribute("src", img1_4, 0)} alt="" class="svelte-znjs76"></div></div> <div class="my-4 flex justify-evenly" data-svelte-h="svelte-1b6w3a5"><div><img${add_attribute("src", img2, 0)} alt="" class="svelte-znjs76"></div> <div class="grid grid-cols-2 gap-4"><img${add_attribute("src", img2_1, 0)} alt="" class="svelte-znjs76"> <div><img${add_attribute("src", img2_2, 0)} alt="" class="svelte-znjs76"> <p>* Unique Chiral Selectors</p></div></div></div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-9clhgx">Immobilized Stationary Phases</p> <table class="my-4 table-auto" data-svelte-h="svelte-21n599"><thead><tr><th class="bg-secondary svelte-znjs76">Attributes</th> <th class="bg-secondary svelte-znjs76">Immobilized Selectors</th></tr></thead> <tbody><tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Reliability</td> <td class="bg-primary p-4 svelte-znjs76">Daicel Authentic Selectors</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Robustness</td> <td class="bg-primary p-4 svelte-znjs76">Solvent Flexibility</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Reproducibility</td> <td class="bg-primary p-4 svelte-znjs76">Easy Column Regeneration</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Loading Capacity</td> <td class="bg-primary p-4 svelte-znjs76">High Loading Capacity Greatly <br>
            Improved due to Analyte Solubility</td></tr></tbody></table> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-1e60tox">Complementarity</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1kk8i2h"><strong>CHIRALPAK® IA™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img3,
      header: "CHIRALPAK® IA™",
      content: "Meclizine Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1kk8i2h"><strong>CHIRALPAK® IA™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img4,
      header: "CHIRALPAK® IA™",
      content: "y-Phenyl-y-butyrolactone Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1j1788m"><strong>CHIRALPAK® IB™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img5,
      header: "CHIRALPAK® IB™",
      content: "Indapamide Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1bt0njb"><strong>CHIRALPAK® IC™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img6,
      header: "CHIRALPAK® IC™",
      content: "5-Benzylhydantoin Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-131pwck"><strong>CHIRALPAK® ID™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img7,
      header: "CHIRALPAK® ID™",
      content: "Amlodipine Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-131pwck"><strong>CHIRALPAK® ID™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img8,
      header: "CHIRALPAK® ID™",
      content: "Cisapride Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-qeh01x"><strong>CHIRALPAK® IE™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img9,
      header: "CHIRALPAK® IE™",
      content: "Cetirizine Separation"
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-70p3j6"><strong>CHIRALPAK® IF™</strong></p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img10,
      header: "CHIRALPAK® IF™",
      content: "Methyclothiazide Separation"
    },
    {},
    {}
  )}</div> </div>`;
});
export {
  Page as default
};
