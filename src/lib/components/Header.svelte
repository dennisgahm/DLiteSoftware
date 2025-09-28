<script lang="ts">
  import { theme } from "./store";
  import { onMount } from "svelte";

  let menuBtn: HTMLElement | null;
  let mobileMenu: HTMLElement | null;

  onMount(() => {
    menuBtn = document.getElementById("menu-btn");
    mobileMenu = document.getElementById("mobile-menu");

    menuBtn?.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden");
    });
  });

  type SubItem = {
    name: string;
    page: string;
  };
  type MenuItem = {
    name: string;
    pages: SubItem[];
    page: string;
  };

  const menuItems: MenuItem[] = [
    {
      name: "Home",
      pages: [],
      page: "/",
    },
    {
      name: "Our Products",
      pages: [
        {
          name: "Textbook Extraction",
          page: "/textbook-Information-extraction",
        },
        {
          name: "MCCPS System",
          page: "/mccps-system",
        },
        {
          name: "MCCP Program",
          page: "/mccp-program",
        },
        {
          name: "MCS Program",
          page: "/mcs-program",
        },
        {
          name: "Chromatogram Stacking Program",
          page: "/chromatogram-stacking-program",
        },
        {
          name: "Sequence Builder",
          page: "/sequence-builder",
        },
        {
          name: "ACS Package",
          page: "/acs-package",
        },
      ],
      page: "/our-products",
    },
    {
      name: "Applications",
      pages: [],
      page: "/applications",
    },
    {
      name: "HPLC Products",
      pages: [],
      page: "/hplc-products",
    },
    {
      name: "Downloads",
      pages: [],
      page: "/downloads",
    },
    {
      name: "Contact Us",
      pages: [],
      page: "/contact-us",
    },
  ];
</script>

<div
  class="sticky top-0 navbar bg-base-100 justify-between shadow-xl px-4 md:px-12 lg:px-36 xl:px-48 z-[100]"
>
  <div class="flex-none w-50 bg-base-100">
    <a href="/">
      <div class="flex justify-center">
        <h1 class="text-xl p-1 px-3 tracking-tighter flex align-center">
          <div class="inline-block h-9 bg-secondary p-1 rounded-sm">
            <img class="h-full w-auto" src="/logo.svg" alt="logo" />
          </div>
          <p class="m-auto font-semibold opacity-50">-Lite Software</p>
        </h1>
      </div>
    </a>
  </div>
  <div class="flex-none hidden md:block">
    <ul class="menu menu-horizontal box gap-3 font-light [&_li>*]:rounded-none">
      {#each menuItems as mi}
        <li>
          <a
            href={mi.page}
            class="hover:underline underline-offset-2 decoration-2 opacity-80 no-bg-hover"
            >{mi.name}</a
          >
        </li>
      {/each}
      <li class="hover:underline underline-offset-2 decoration-2 opacity-80">
        <div class="dropdown dropdown-bottom no-bg-hover">
          <div tabIndex={0} role="button" class="no-bg-hover">Theme</div>
          <ul
            tabIndex={0}
            class="dropdown-content menu bg-base-100 p-2 shadow-md"
          >
            <li class="no-bg-hover">
              <a on:click={() => theme.set("light")}>Light</a>
            </li>
            <li class="no-bg-hover">
              <a on:click={() => theme.set("dark")}>Dark</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <div class="flex-none md:hidden flex justify-end">
    <button
      class="btn btn-square btn-ghost"
      id="menu-btn"
      on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</div>

<div class="md:hidden" id="mobile-menu">
  <ul class="menu menu-vertical gap-3 font-light">
    {#each menuItems as mi}
      <li>
        <a href={mi.page} class="hover:underline opacity-80">{mi.name}</a>
      </li>
    {/each}
    <li class="hover:underline opacity-80">
      <details>
        <summary>Theme</summary>
        <ul class="bg-base-100 rounded-t-none p-2">
          <li><a on:click={() => theme.set("light")}>Light</a></li>
          <li><a on:click={() => theme.set("dark")}>Dark</a></li>
        </ul>
      </details>
    </li>
  </ul>
</div>

<style>
  .no-bg-hover:hover {
    background-color: transparent !important;
  }
  .no-bg-hover:focus,
  .no-bg-hover:active {
    background-color: transparent !important;
  }
</style>
