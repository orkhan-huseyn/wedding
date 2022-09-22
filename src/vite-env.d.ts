/// <reference types="vite/client" />

declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '*.ics' {
	const src: string;
	export default src;
}

declare module '*.ttf' {
	const src: string;
	export default src;
}

declare module '*.woff' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}
