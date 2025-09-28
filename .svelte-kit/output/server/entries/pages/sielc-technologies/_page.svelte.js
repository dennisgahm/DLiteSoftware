import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as ImageWithText } from "../../../chunks/ImageWithText.js";
const img1 = "/_app/immutable/assets/1.BcNnXGVI.webp";
const img2 = "/_app/immutable/assets/2.Br4Pt1lj.webp";
const img3 = "/_app/immutable/assets/3.fTzptImt.webp";
const img4 = "/_app/immutable/assets/4.DEeZ6Gg0.webp";
const img5 = "/_app/immutable/assets/5.Cg3YIOUJ.webp";
const img6 = "/_app/immutable/assets/6.2txo7a4w.webp";
const img7 = "/_app/immutable/assets/7.C7opg3fd.webp";
const img8 = "/_app/immutable/assets/8.Clx6FCw3.gif";
const img9 = "/_app/immutable/assets/9.DTxMZC0a.webp";
const img10 = "/_app/immutable/assets/10.Bpa21lnX.webp";
const css = {
  code: "th.svelte-znjs76.svelte-znjs76:first-of-type{border-top-left-radius:10px}th.svelte-znjs76.svelte-znjs76:last-of-type{border-top-right-radius:10px}tr.svelte-znjs76:last-of-type td.svelte-znjs76:first-of-type{border-bottom-left-radius:10px}tr.svelte-znjs76:last-of-type td.svelte-znjs76:last-of-type{border-bottom-right-radius:10px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import img1 from \\"$lib/assets/sielc-technologies/1.webp\\";\\n  import img2 from \\"$lib/assets/sielc-technologies/2.webp\\";\\n  import img3 from \\"$lib/assets/sielc-technologies/3.webp\\";\\n  import img4 from \\"$lib/assets/sielc-technologies/4.webp\\";\\n  import img5 from \\"$lib/assets/sielc-technologies/5.webp\\";\\n  import img6 from \\"$lib/assets/sielc-technologies/6.webp\\";\\n  import img7 from \\"$lib/assets/sielc-technologies/7.webp\\";\\n  import img8 from \\"$lib/assets/sielc-technologies/8.gif\\";\\n  import img9 from \\"$lib/assets/sielc-technologies/9.webp\\";\\n  import img10 from \\"$lib/assets/sielc-technologies/10.webp\\";\\n\\n  import ImageWithText from \\"$lib/components/ImageWithText.svelte\\";\\n<\/script>\\n\\n<div\\n  class=\\"max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto\\"\\n>\\n  <h1\\n    class=\\"font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6\\"\\n  >\\n    SIELC Technologies\\n  </h1>\\n  <div class=\\"w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6\\">\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      Primesep Columns From SIELC\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      Primesep columns are highly versatile columns that separate a huge range\\n      of compounds, utilizing several separation modes by choosing a particular\\n      mobile phase. Where traditional stationary phase design was overly\\n      concerned about minimizing the effects of \\"unwanted\\" secondary\\n      interactions, SIELC's Switch Phase® Technology is designed to precisely\\n      control the type and strength of these interactions to offer unparalleled\\n      selectivity.\\n    </p>\\n\\n    <div class=\\"my-3 flex justify-evenly gap-4\\">\\n      <ImageWithText\\n        imgsrc={img1}\\n        header=\\"Primesep 100 (4.6x150mm)\\"\\n        content=\\"Flow: 1.0 mL/min\\nDetection: UV 250nm\\nMobile Phase: MeCN 15%, H2SO4 0.15%\\"\\n      ></ImageWithText>\\n\\n      <ImageWithText\\n        imgsrc={img2}\\n        header=\\"Primesep C (4.6x50mm)\\"\\n        content=\\"Flow: 1.0 mL/min\\nDetection: ELSD\\nMobile Phase: MeOH/NH4/Acetate - 60/40/20 mM pH 5.0\\"\\n      ></ImageWithText>\\n\\n      <ImageWithText\\n        imgsrc={img3}\\n        header=\\"Primesep SB (3.0x50mm)\\"\\n        content=\\"Flow: 0.5 mL/min\\nDetection: UV 270, 325 nm\\nMobile Phase: MeCN gradient 50-80% in 5 min, 5 min hold, AcOH -0.1\\"\\n      ></ImageWithText>\\n    </div>\\n\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      Mixed-Mode Stationary Phases\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      A stationary phase that provides more than one strong and controllable\\n      method of interaction can be said to be a mixed-mode stationary phase.\\n      Primesep Columns' great versatility arises from their mixed-mode\\n      stationary phases.\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      Typically, a good reverse-phase column has only one mode of selection -\\n      hydrophobic interaction. As a result, the reverse-phase columns are\\n      greatly limited in utility (difficult to retain polar compounds, hard to\\n      separate closely related compounds, unavoidably long analysis times for\\n      samples containing compounds of greatly different polarity).\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      Primesep Columns, on the other hand, have a variety of modes of\\n      interaction based on the particular functional group attached to the\\n      stationary phase. Pictured below are four of the most common: negatively\\n      charged functional group for cation exchange, positively charged\\n      functional group for anion exchange, complex function group for complex\\n      interaction, and phenyl functional group for pi-pi interactions.\\n    </p>\\n\\n    <div class=\\"my-3 flex justify-evenly gap-4\\">\\n      <ImageWithText imgsrc={img4} header=\\"Negative Functional Group\\" content=\\"\\"\\n      ></ImageWithText>\\n      <ImageWithText imgsrc={img5} header=\\"Positive Functional Group\\" content=\\"\\"\\n      ></ImageWithText>\\n      <ImageWithText imgsrc={img6} header=\\"Complex Functional Group\\" content=\\"\\"\\n      ></ImageWithText>\\n      <ImageWithText imgsrc={img7} header=\\"Phenyl Functional Group\\" content=\\"\\"\\n      ></ImageWithText>\\n    </div>\\n\\n    <p\\n      class=\\"text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4\\"\\n    >\\n      SWITCH Phase® Technology\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      Primesep Columns are further enhanced by SWITCH Phase® Technology, which\\n      provides even greater control over the columns' selectivity. As every\\n      functional group in the various Primesep Columns have a unique pKa value,\\n      the functional groups can be ionized or non-ionized depending on the pH of\\n      the mobile phase.\\n    </p>\\n\\n    <ImageWithText imgsrc={img8} header=\\"Switch Phase Technology\\" content=\\"\\"\\n    ></ImageWithText>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">\\n      If the pH of the mobile phase is close to, or above, the transition value\\n      of the Primesep C functional group, the Primesep C column will function as\\n      a mixed-mode Ion-Exchange and Reverse-Phase Column. If the pH of the\\n      mobile phase is below the transition value of the Primesep C functional\\n      group, the Primesep C column will function as a reverse-phase column with\\n      a non-ionized functional group.\\n    </p>\\n\\n    <p class=\\"my-4 text-sm sm:text-base md:text-lg\\">For Example:</p>\\n\\n    <table class=\\"my-4 table-auto\\">\\n      <thead>\\n        <tr>\\n          <th class=\\" bg-secondary\\"> Cation Exchange <br /> Column Type</th>\\n          <th class=\\" bg-secondary\\"\\n            >pKa Value of Embedded <br /> Carboxylic Acid</th\\n          >\\n          <th class=\\"bg-secondary\\"\\n            >Basic Compounds\\n            <br />\\n            Separated</th\\n          >\\n        </tr>\\n      </thead>\\n      <tbody>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Primesep 500</td>\\n          <td class=\\"bg-primary p-4\\">pKa = 5.0 </td>\\n          <td class=\\"bg-primary p-4\\">Strong Bases, Metals</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Primesep C</td>\\n          <td class=\\"bg-primary p-4\\">pKa = 3.5</td>\\n          <td class=\\"bg-primary p-4\\">Strong Bases, Dibases</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Primesep 200</td>\\n          <td class=\\"bg-primary p-4\\">pKa = 2.0</td>\\n          <td class=\\"bg-primary p-4\\">Strong Bases, Dibases </td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Primesep 100</td>\\n          <td class=\\"bg-primary p-4\\"> pKa = 1.0 </td>\\n          <td class=\\"bg-primary p-4\\">Weak, Medium Bases, AA, Metals</td>\\n        </tr>\\n        <tr>\\n          <td class=\\"bg-primary p-4\\">Primesep A</td>\\n          <td class=\\"bg-primary p-4\\"> pKa = 0 </td>\\n          <td class=\\"bg-primary p-4\\">Weak Bases, AA, Metals</td>\\n        </tr>\\n      </tbody>\\n    </table>\\n\\n    <div class=\\"my-4 flex gap-4 justify-evenly\\">\\n      <ImageWithText\\n        imgsrc={img9}\\n        header=\\"pH Above Primesep C Transition Point\\"\\n        content=\\"Primesep C (4.6x150mm)\\nFlow: 1.0 mL/min\\nDetection: UV 210 nm\\n\\nMobile Phase: Water/MeCN - 60/40 Ammonium Acetate 20 mM pH 5.0\\"\\n      ></ImageWithText>\\n      <ImageWithText\\n        imgsrc={img10}\\n        header=\\"pH Below Primesep C Transition Point\\"\\n        content=\\"Primesep C (4.6x150mm)\\nFlow: 1.0 mL/min\\nDetection: UV 210 nm\\n\\nMobile Phase: Water/MeCN/TFA - 60/40/0.1 pH 2.0\\"\\n      ></ImageWithText>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  img {\\n    border-radius: 20px;\\n  }\\n\\n  th:first-of-type {\\n    border-top-left-radius: 10px;\\n  }\\n  th:last-of-type {\\n    border-top-right-radius: 10px;\\n  }\\n  tr:last-of-type td:first-of-type {\\n    border-bottom-left-radius: 10px;\\n  }\\n  tr:last-of-type td:last-of-type {\\n    border-bottom-right-radius: 10px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8ME,8BAAE,cAAe,CACf,sBAAsB,CAAE,IAC1B,CACA,8BAAE,aAAc,CACd,uBAAuB,CAAE,IAC3B,CACA,gBAAE,aAAa,CAAC,gBAAE,cAAe,CAC/B,yBAAyB,CAAE,IAC7B,CACA,gBAAE,aAAa,CAAC,gBAAE,aAAc,CAC9B,0BAA0B,CAAE,IAC9B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"><h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6" data-svelte-h="svelte-by7pu0">SIELC Technologies</h1> <div class="w-shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6"><p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-ktzzem">Primesep Columns From SIELC</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-dc7007">Primesep columns are highly versatile columns that separate a huge range
      of compounds, utilizing several separation modes by choosing a particular
      mobile phase. Where traditional stationary phase design was overly
      concerned about minimizing the effects of &quot;unwanted&quot; secondary
      interactions, SIELC&#39;s Switch Phase® Technology is designed to precisely
      control the type and strength of these interactions to offer unparalleled
      selectivity.</p> <div class="my-3 flex justify-evenly gap-4">${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img1,
      header: "Primesep 100 (4.6x150mm)",
      content: "Flow: 1.0 mL/min\nDetection: UV 250nm\nMobile Phase: MeCN 15%, H2SO4 0.15%"
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img2,
      header: "Primesep C (4.6x50mm)",
      content: "Flow: 1.0 mL/min\nDetection: ELSD\nMobile Phase: MeOH/NH4/Acetate - 60/40/20 mM pH 5.0"
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img3,
      header: "Primesep SB (3.0x50mm)",
      content: "Flow: 0.5 mL/min\nDetection: UV 270, 325 nm\nMobile Phase: MeCN gradient 50-80% in 5 min, 5 min hold, AcOH -0.1"
    },
    {},
    {}
  )}</div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-7ex6px">Mixed-Mode Stationary Phases</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-foykty">A stationary phase that provides more than one strong and controllable
      method of interaction can be said to be a mixed-mode stationary phase.
      Primesep Columns&#39; great versatility arises from their mixed-mode
      stationary phases.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1sps8b9">Typically, a good reverse-phase column has only one mode of selection -
      hydrophobic interaction. As a result, the reverse-phase columns are
      greatly limited in utility (difficult to retain polar compounds, hard to
      separate closely related compounds, unavoidably long analysis times for
      samples containing compounds of greatly different polarity).</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1k6e3yg">Primesep Columns, on the other hand, have a variety of modes of
      interaction based on the particular functional group attached to the
      stationary phase. Pictured below are four of the most common: negatively
      charged functional group for cation exchange, positively charged
      functional group for anion exchange, complex function group for complex
      interaction, and phenyl functional group for pi-pi interactions.</p> <div class="my-3 flex justify-evenly gap-4">${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img4,
      header: "Negative Functional Group",
      content: ""
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img5,
      header: "Positive Functional Group",
      content: ""
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img6,
      header: "Complex Functional Group",
      content: ""
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img7,
      header: "Phenyl Functional Group",
      content: ""
    },
    {},
    {}
  )}</div> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4" data-svelte-h="svelte-oa1hgl">SWITCH Phase® Technology</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1yuegfh">Primesep Columns are further enhanced by SWITCH Phase® Technology, which
      provides even greater control over the columns&#39; selectivity. As every
      functional group in the various Primesep Columns have a unique pKa value,
      the functional groups can be ionized or non-ionized depending on the pH of
      the mobile phase.</p> ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img8,
      header: "Switch Phase Technology",
      content: ""
    },
    {},
    {}
  )} <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1vbtglk">If the pH of the mobile phase is close to, or above, the transition value
      of the Primesep C functional group, the Primesep C column will function as
      a mixed-mode Ion-Exchange and Reverse-Phase Column. If the pH of the
      mobile phase is below the transition value of the Primesep C functional
      group, the Primesep C column will function as a reverse-phase column with
      a non-ionized functional group.</p> <p class="my-4 text-sm sm:text-base md:text-lg" data-svelte-h="svelte-1ilggme">For Example:</p> <table class="my-4 table-auto" data-svelte-h="svelte-1wmrviz"><thead><tr><th class="bg-secondary svelte-znjs76">Cation Exchange <br> Column Type</th> <th class="bg-secondary svelte-znjs76">pKa Value of Embedded <br> Carboxylic Acid</th> <th class="bg-secondary svelte-znjs76">Basic Compounds
            <br>
            Separated</th></tr></thead> <tbody><tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Primesep 500</td> <td class="bg-primary p-4 svelte-znjs76">pKa = 5.0</td> <td class="bg-primary p-4 svelte-znjs76">Strong Bases, Metals</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Primesep C</td> <td class="bg-primary p-4 svelte-znjs76">pKa = 3.5</td> <td class="bg-primary p-4 svelte-znjs76">Strong Bases, Dibases</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Primesep 200</td> <td class="bg-primary p-4 svelte-znjs76">pKa = 2.0</td> <td class="bg-primary p-4 svelte-znjs76">Strong Bases, Dibases</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Primesep 100</td> <td class="bg-primary p-4 svelte-znjs76">pKa = 1.0</td> <td class="bg-primary p-4 svelte-znjs76">Weak, Medium Bases, AA, Metals</td></tr> <tr class="svelte-znjs76"><td class="bg-primary p-4 svelte-znjs76">Primesep A</td> <td class="bg-primary p-4 svelte-znjs76">pKa = 0</td> <td class="bg-primary p-4 svelte-znjs76">Weak Bases, AA, Metals</td></tr></tbody></table> <div class="my-4 flex gap-4 justify-evenly">${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img9,
      header: "pH Above Primesep C Transition Point",
      content: "Primesep C (4.6x150mm)\nFlow: 1.0 mL/min\nDetection: UV 210 nm\n\nMobile Phase: Water/MeCN - 60/40 Ammonium Acetate 20 mM pH 5.0"
    },
    {},
    {}
  )} ${validate_component(ImageWithText, "ImageWithText").$$render(
    $$result,
    {
      imgsrc: img10,
      header: "pH Below Primesep C Transition Point",
      content: "Primesep C (4.6x150mm)\nFlow: 1.0 mL/min\nDetection: UV 210 nm\n\nMobile Phase: Water/MeCN/TFA - 60/40/0.1 pH 2.0"
    },
    {},
    {}
  )}</div></div> </div>`;
});
export {
  Page as default
};
