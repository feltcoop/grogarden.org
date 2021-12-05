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

export type Gro_Adapter_Name = 'node_library' | 'generic_build' | 'sveltekit_frontend';

export type Gro_Plugin_Name = 'api_server' | 'sveltekit_frontend';
