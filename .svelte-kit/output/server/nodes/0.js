import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CSrMUU3U.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/BYwV2QfJ.js","_app/immutable/chunks/CQ74AKd9.js"];
export const stylesheets = ["_app/immutable/assets/0.CJr8x0qx.css"];
export const fonts = [];
