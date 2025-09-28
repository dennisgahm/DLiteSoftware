import { c as create_ssr_component, e as each, a as add_attribute, b as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as theme } from "../../chunks/store.js";
const css = {
  code: ".no-bg-hover.svelte-1z07uhz:hover{background-color:transparent !important}.no-bg-hover.svelte-1z07uhz:focus,.no-bg-hover.svelte-1z07uhz:active{background-color:transparent !important}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { theme } from \\"./store\\";\\nimport { onMount } from \\"svelte\\";\\nlet menuBtn;\\nlet mobileMenu;\\nonMount(() => {\\n    menuBtn = document.getElementById(\\"menu-btn\\");\\n    mobileMenu = document.getElementById(\\"mobile-menu\\");\\n    menuBtn?.addEventListener(\\"click\\", () => {\\n        mobileMenu?.classList.toggle(\\"hidden\\");\\n    });\\n});\\nconst menuItems = [\\n    {\\n        name: \\"Home\\",\\n        pages: [],\\n        page: \\"/\\",\\n    },\\n    {\\n        name: \\"Our Products\\",\\n        pages: [\\n            {\\n                name: \\"Textbook Extraction\\",\\n                page: \\"/textbook-Information-extraction\\",\\n            },\\n            {\\n                name: \\"MCCPS System\\",\\n                page: \\"/mccps-system\\",\\n            },\\n            {\\n                name: \\"MCCP Program\\",\\n                page: \\"/mccp-program\\",\\n            },\\n            {\\n                name: \\"MCS Program\\",\\n                page: \\"/mcs-program\\",\\n            },\\n            {\\n                name: \\"Chromatogram Stacking Program\\",\\n                page: \\"/chromatogram-stacking-program\\",\\n            },\\n            {\\n                name: \\"Sequence Builder\\",\\n                page: \\"/sequence-builder\\",\\n            },\\n            {\\n                name: \\"ACS Package\\",\\n                page: \\"/acs-package\\",\\n            },\\n        ],\\n        page: \\"/our-products\\",\\n    },\\n    {\\n        name: \\"Applications\\",\\n        pages: [],\\n        page: \\"/applications\\",\\n    },\\n    {\\n        name: \\"HPLC Products\\",\\n        pages: [],\\n        page: \\"/hplc-products\\",\\n    },\\n    {\\n        name: \\"Downloads\\",\\n        pages: [],\\n        page: \\"/downloads\\",\\n    },\\n    {\\n        name: \\"Contact Us\\",\\n        pages: [],\\n        page: \\"/contact-us\\",\\n    },\\n];\\n<\/script>\\n\\n<div\\n  class=\\"sticky top-0 navbar bg-base-100 justify-between shadow-xl px-4 md:px-12 lg:px-36 xl:px-48 z-[100]\\"\\n>\\n  <div class=\\"flex-none w-50 bg-base-100\\">\\n    <a href=\\"/\\">\\n      <div class=\\"flex justify-center\\">\\n        <h1 class=\\"text-xl p-1 px-3 tracking-tighter flex align-center\\">\\n          <div class=\\"inline-block h-9 bg-secondary p-1 rounded-sm\\">\\n            <img class=\\"h-full w-auto\\" src=\\"/logo.svg\\" alt=\\"logo\\" />\\n          </div>\\n          <p class=\\"m-auto font-semibold opacity-50\\">-Lite Software</p>\\n        </h1>\\n      </div>\\n    </a>\\n  </div>\\n  <div class=\\"flex-none hidden md:block\\">\\n    <ul class=\\"menu menu-horizontal box gap-3 font-light [&_li>*]:rounded-none\\">\\n      {#each menuItems as mi}\\n        <li>\\n          <a\\n            href={mi.page}\\n            class=\\"hover:underline underline-offset-2 decoration-2 opacity-80 no-bg-hover\\"\\n            >{mi.name}</a\\n          >\\n        </li>\\n      {/each}\\n      <li class=\\"hover:underline underline-offset-2 decoration-2 opacity-80\\">\\n        <div class=\\"dropdown dropdown-bottom no-bg-hover\\">\\n          <div tabIndex={0} role=\\"button\\" class=\\"no-bg-hover\\">Theme</div>\\n          <ul\\n            tabIndex={0}\\n            class=\\"dropdown-content menu bg-base-100 p-2 shadow-md\\"\\n          >\\n            <li class=\\"no-bg-hover\\">\\n              <a on:click={() => theme.set(\\"light\\")}>Light</a>\\n            </li>\\n            <li class=\\"no-bg-hover\\">\\n              <a on:click={() => theme.set(\\"dark\\")}>Dark</a>\\n            </li>\\n          </ul>\\n        </div>\\n      </li>\\n    </ul>\\n  </div>\\n  <div class=\\"flex-none md:hidden flex justify-end\\">\\n    <button\\n      class=\\"btn btn-square btn-ghost\\"\\n      id=\\"menu-btn\\"\\n      on:click={() => window.scrollTo({ top: 0, behavior: \\"smooth\\" })}\\n    >\\n      <svg\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n        class=\\"h-6 w-6\\"\\n        fill=\\"none\\"\\n        viewBox=\\"0 0 24 24\\"\\n        stroke=\\"currentColor\\"\\n      >\\n        <path\\n          stroke-linecap=\\"round\\"\\n          stroke-linejoin=\\"round\\"\\n          stroke-width=\\"2\\"\\n          d=\\"M4 6h16M4 12h16M4 18h16\\"\\n        />\\n      </svg>\\n    </button>\\n  </div>\\n</div>\\n\\n<div class=\\"md:hidden\\" id=\\"mobile-menu\\">\\n  <ul class=\\"menu menu-vertical gap-3 font-light\\">\\n    {#each menuItems as mi}\\n      <li>\\n        <a href={mi.page} class=\\"hover:underline opacity-80\\">{mi.name}</a>\\n      </li>\\n    {/each}\\n    <li class=\\"hover:underline opacity-80\\">\\n      <details>\\n        <summary>Theme</summary>\\n        <ul class=\\"bg-base-100 rounded-t-none p-2\\">\\n          <li><a on:click={() => theme.set(\\"light\\")}>Light</a></li>\\n          <li><a on:click={() => theme.set(\\"dark\\")}>Dark</a></li>\\n        </ul>\\n      </details>\\n    </li>\\n  </ul>\\n</div>\\n\\n<style>\\n  .no-bg-hover:hover {\\n    background-color: transparent !important;\\n  }\\n  .no-bg-hover:focus,\\n  .no-bg-hover:active {\\n    background-color: transparent !important;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkKE,2BAAY,MAAO,CACjB,gBAAgB,CAAE,WAAW,CAAC,UAChC,CACA,2BAAY,MAAM,CAClB,2BAAY,OAAQ,CAClB,gBAAgB,CAAE,WAAW,CAAC,UAChC"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menuItems = [
    { name: "Home", pages: [], page: "/" },
    {
      name: "Our Products",
      pages: [
        {
          name: "Textbook Extraction",
          page: "/textbook-Information-extraction"
        },
        {
          name: "MCCPS System",
          page: "/mccps-system"
        },
        {
          name: "MCCP Program",
          page: "/mccp-program"
        },
        {
          name: "MCS Program",
          page: "/mcs-program"
        },
        {
          name: "Chromatogram Stacking Program",
          page: "/chromatogram-stacking-program"
        },
        {
          name: "Sequence Builder",
          page: "/sequence-builder"
        },
        {
          name: "ACS Package",
          page: "/acs-package"
        }
      ],
      page: "/our-products"
    },
    {
      name: "Applications",
      pages: [],
      page: "/applications"
    },
    {
      name: "HPLC Products",
      pages: [],
      page: "/hplc-products"
    },
    {
      name: "Downloads",
      pages: [],
      page: "/downloads"
    },
    {
      name: "Contact Us",
      pages: [],
      page: "/contact-us"
    }
  ];
  $$result.css.add(css);
  return `<div class="sticky top-0 navbar bg-base-100 justify-between shadow-xl px-4 md:px-12 lg:px-36 xl:px-48 z-[100]"><div class="flex-none w-50 bg-base-100" data-svelte-h="svelte-1dzsncr"><a href="/"><div class="flex justify-center"><h1 class="text-xl p-1 px-3 tracking-tighter flex align-center"><div class="inline-block h-9 bg-secondary p-1 rounded-sm"><img class="h-full w-auto" src="/logo.svg" alt="logo"></div> <p class="m-auto font-semibold opacity-50">-Lite Software</p></h1></div></a></div> <div class="flex-none hidden md:block"><ul class="menu menu-horizontal box gap-3 font-light [&amp;_li>*]:rounded-none">${each(menuItems, (mi) => {
    return `<li><a${add_attribute("href", mi.page, 0)} class="hover:underline underline-offset-2 decoration-2 opacity-80 no-bg-hover svelte-1z07uhz">${escape(mi.name)}</a> </li>`;
  })} <li class="hover:underline underline-offset-2 decoration-2 opacity-80"><div class="dropdown dropdown-bottom no-bg-hover svelte-1z07uhz"><div${add_attribute("tabindex", 0, 0)} role="button" class="no-bg-hover svelte-1z07uhz" data-svelte-h="svelte-1s0amb5">Theme</div> <ul${add_attribute("tabindex", 0, 0)} class="dropdown-content menu bg-base-100 p-2 shadow-md"><li class="no-bg-hover svelte-1z07uhz"><a data-svelte-h="svelte-aid4lw">Light</a></li> <li class="no-bg-hover svelte-1z07uhz"><a data-svelte-h="svelte-5u4qz4">Dark</a></li></ul></div></li></ul></div> <div class="flex-none md:hidden flex justify-end"><button class="btn btn-square btn-ghost" id="menu-btn" data-svelte-h="svelte-1hm93p"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div> <div class="md:hidden" id="mobile-menu"><ul class="menu menu-vertical gap-3 font-light">${each(menuItems, (mi) => {
    return `<li><a${add_attribute("href", mi.page, 0)} class="hover:underline opacity-80">${escape(mi.name)}</a> </li>`;
  })} <li class="hover:underline opacity-80"><details><summary data-svelte-h="svelte-8mhhel">Theme</summary> <ul class="bg-base-100 rounded-t-none p-2"><li><a data-svelte-h="svelte-aid4lw">Light</a></li> <li><a data-svelte-h="svelte-5u4qz4">Dark</a></li></ul></details></li></ul> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mytheme = "light";
  theme.subscribe((t) => {
    mytheme = t;
  });
  return `<div${add_attribute("data-theme", mytheme, 0)} class="flex flex-col min-h-screen">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
