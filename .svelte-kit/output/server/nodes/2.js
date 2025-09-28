import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Bh-tpPIr.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/B17Q6ahh.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/Cb8wWI3B.js"];
export const stylesheets = ["_app/immutable/assets/ImageWithText.DvDs69je.css"];
export const fonts = [];
