

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/downloads/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.DImzBLcL.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = [];
export const fonts = [];
