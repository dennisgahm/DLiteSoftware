import { c as create_ssr_component, a as add_attribute, b as escape } from "./ssr.js";
const css = {
  code: ".card-container.svelte-1cbxf7v:hover .card-details.svelte-1cbxf7v{opacity:100}",
  map: '{"version":3,"file":"ImageWithText.svelte","sources":["ImageWithText.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let header;\\nexport let content;\\nexport let imgsrc;\\n<\/script>\\n\\n<div class=\\"w-full relative bg-secondary\\">\\n  <div\\n    class=\\"card-container flex justify-center items-center flex-1 p-4 md:p-6 cursor-pointer\\"\\n  >\\n    <img\\n      src={imgsrc}\\n      alt=\\"\\"\\n      class=\\" shadow-lg max-w-full h-full object-cover\\"\\n    />\\n    <div\\n      class=\\"card-details bg-white bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0\\"\\n    >\\n      <h3 class=\\"font-bold underline text-sm md:text-lg\\">\\n        {header}\\n      </h3>\\n      <p class=\\"text-xs md:text-sm whitespace-pre-line\\">{content}</p>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .card-container:hover .card-details {\\n    opacity: 100;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0BE,8BAAe,MAAM,CAAC,4BAAc,CAClC,OAAO,CAAE,GACX"}'
};
const ImageWithText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { content } = $$props;
  let { imgsrc } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0) $$bindings.header(header);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0) $$bindings.imgsrc(imgsrc);
  $$result.css.add(css);
  return `<div class="w-full relative bg-secondary"><div class="card-container flex justify-center items-center flex-1 p-4 md:p-6 cursor-pointer svelte-1cbxf7v"><img${add_attribute("src", imgsrc, 0)} alt="" class="shadow-lg max-w-full h-full object-cover"> <div class="card-details bg-white bg-opacity-70 backdrop-blur-lg p-4 shadow-md transition-opacity duration-300 opacity-0 absolute bottom-0 left-0 right-0 svelte-1cbxf7v"><h3 class="font-bold underline text-sm md:text-lg">${escape(header)}</h3> <p class="text-xs md:text-sm whitespace-pre-line">${escape(content)}</p></div></div> </div>`;
});
export {
  ImageWithText as I
};
