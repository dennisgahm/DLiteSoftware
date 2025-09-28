
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/acs-package" | "/applications" | "/chiral-technologies" | "/chromatogram-stacking-program" | "/contact-us" | "/downloads" | "/hplc-products" | "/mccp-program" | "/mccps-system" | "/mcs-program" | "/our-products" | "/sequence-builder" | "/sielc-technologies" | "/textbook-Information-extraction";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/acs-package": Record<string, never>;
			"/applications": Record<string, never>;
			"/chiral-technologies": Record<string, never>;
			"/chromatogram-stacking-program": Record<string, never>;
			"/contact-us": Record<string, never>;
			"/downloads": Record<string, never>;
			"/hplc-products": Record<string, never>;
			"/mccp-program": Record<string, never>;
			"/mccps-system": Record<string, never>;
			"/mcs-program": Record<string, never>;
			"/our-products": Record<string, never>;
			"/sequence-builder": Record<string, never>;
			"/sielc-technologies": Record<string, never>;
			"/textbook-Information-extraction": Record<string, never>
		};
		Pathname(): "/" | "/acs-package" | "/acs-package/" | "/applications" | "/applications/" | "/chiral-technologies" | "/chiral-technologies/" | "/chromatogram-stacking-program" | "/chromatogram-stacking-program/" | "/contact-us" | "/contact-us/" | "/downloads" | "/downloads/" | "/hplc-products" | "/hplc-products/" | "/mccp-program" | "/mccp-program/" | "/mccps-system" | "/mccps-system/" | "/mcs-program" | "/mcs-program/" | "/our-products" | "/our-products/" | "/sequence-builder" | "/sequence-builder/" | "/sielc-technologies" | "/sielc-technologies/" | "/textbook-Information-extraction" | "/textbook-Information-extraction/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/logo.svg" | string & {};
	}
}