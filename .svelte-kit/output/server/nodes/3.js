

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/acs-package/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CJGz4PwX.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = [];
export const fonts = [];
