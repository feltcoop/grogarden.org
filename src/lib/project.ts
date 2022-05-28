// TODO add data structure for adapters and plugins with links

// TODO or name `Project`?
export interface Gro_Project {
	name: string;
	repo: string;
	official: boolean;
	// TODO maybe also include the configured options?
	adapters: Gro_Adapter_Name[];
	plugins: Gro_Plugin_Name[];
}

export type Gro_Adapter_Name = 'node-library' | 'generic-build' | 'sveltekit-frontend';

export type Gro_Plugin_Name = 'api-server' | 'sveltekit-frontend';

export const urls = {
	adapter: {
		'node-library':
			'https://github.com/feltcoop/gro/blob/main/src/adapt/gro-adapter-node-library.ts',
		'generic-build':
			'https://github.com/feltcoop/gro/blob/main/src/adapt/gro-adapter-generic-build.ts',
		'sveltekit-frontend':
			'https://github.com/feltcoop/gro/blob/main/src/adapt/gro-adapter-sveltekit-frontend.ts',
	},
	plugin: {
		'api-server': 'https://github.com/feltcoop/gro/blob/main/src/plugin/gro-plugin-api-server.ts',
		'sveltekit-frontend':
			'https://github.com/feltcoop/gro/blob/main/src/plugin/gro-plugin-sveltekit-frontend.ts',
	},
};
