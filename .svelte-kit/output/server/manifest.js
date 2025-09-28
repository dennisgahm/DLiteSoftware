export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.D83xzFFp.js",app:"_app/immutable/entry/app.COnE0uK4.js",imports:["_app/immutable/entry/start.D83xzFFp.js","_app/immutable/chunks/C7WpuxPJ.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/B17Q6ahh.js","_app/immutable/chunks/CQ74AKd9.js","_app/immutable/entry/app.COnE0uK4.js","_app/immutable/chunks/Dp6q8ILM.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/acs-package","/applications","/chiral-technologies","/chromatogram-stacking-program","/contact-us","/downloads","/hplc-products","/mccp-program","/mccps-system","/mcs-program","/our-products","/sequence-builder","/sielc-technologies","/textbook-Information-extraction"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
