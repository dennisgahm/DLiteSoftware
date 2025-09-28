<script>
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
  import { theme } from "$lib/components/store";
  import "tailwindcss/tailwind.css";

  let mytheme = "light";
  theme.subscribe((t) => {
    mytheme = t;
  });
</script>

<div data-theme={mytheme} class="flex flex-col min-h-screen">
  <Header></Header>
  <slot />
</div>
