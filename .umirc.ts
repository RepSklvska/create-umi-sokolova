import {defineConfig} from 'umi';

export default defineConfig({
	routes: [
		{path: '/', component: '@/pages/index'},
	],
	npmClient: 'npm',
	styles: [`body {margin: 0; overflow: hidden;}`],

});
