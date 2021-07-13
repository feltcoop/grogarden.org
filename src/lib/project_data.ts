import type {Gro_Project} from './project';

export const projects: Gro_Project[] = [
	{
		name: '@feltcoop/gro',
		repo: 'https://github.com/feltcoop/gro',
		adapters: ['node_library'],
		plugins: [],
	},
	{
		name: '@feltcoop/felt',
		repo: 'https://github.com/feltcoop/felt',
		adapters: ['node_library', 'sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/felt-server',
		repo: 'https://github.com/feltcoop/felt-server',
		adapters: ['generic_build', 'sveltekit_frontend'],
		plugins: ['api_server', 'sveltekit_frontend'],
	},
	{
		name: '@feltcoop/felt-template',
		repo: 'https://github.com/feltcoop/felt-template',
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/felt-template-library',
		repo: 'https://github.com/feltcoop/felt-template-library',
		adapters: ['node_library', 'sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/dealt',
		repo: 'https://github.com/feltcoop/dealt',
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@ryanatkn/mirror-twin-gro',
		repo: 'https://github.com/ryanatkn/mirror-twin-gro',
		adapters: ['gro_frontend'],
		plugins: [],
	},
	{
		name: '@ryanatkn/mirror-twin-sveltekit-vite',
		repo: 'https://github.com/ryanatkn/mirror-twin-sveltekit-vite',
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/grogarden.org',
		repo: 'https://github.com/feltcoop/grogarden.org',
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	// TODO add the remaining projects
];

// TODO how to indicate API server?
