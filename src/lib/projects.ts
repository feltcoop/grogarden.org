import type {Gro_Project} from '$lib/project';

export const projects: Gro_Project[] = [
	{
		name: '@feltcoop/gro',
		repo: 'https://github.com/feltcoop/gro',
		official: true,
		adapters: ['node-library'],
		plugins: [],
	},
	{
		name: '@feltcoop/felt',
		repo: 'https://github.com/feltcoop/felt',
		official: true,
		adapters: ['node-library', 'sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@feltcoop/felt-server',
		repo: 'https://github.com/feltcoop/felt-server',
		official: true,
		adapters: ['generic-build', 'sveltekit-frontend'],
		plugins: ['api-server', 'sveltekit-frontend'],
	},
	{
		name: '@feltcoop/felt-template',
		repo: 'https://github.com/feltcoop/felt-template',
		official: true,
		adapters: ['node-library', 'sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@feltcoop/dealt',
		repo: 'https://github.com/feltcoop/dealt',
		official: true,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@cosmicplayground/cosmicplayground',
		repo: 'https://github.com/cosmicplayground/cosmicplayground',
		official: false,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@cosmicplayground/flat',
		repo: 'https://github.com/cosmicplayground/flat',
		official: false,
		adapters: ['node-library', 'sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@spiderspace/spiderspace',
		repo: 'https://github.com/spiderspace/spiderspace',
		official: false,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@spiderspace/about',
		repo: 'https://github.com/spiderspace/about',
		official: false,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@feltcoop/svelte-mutable-store',
		repo: 'https://github.com/feltcoop/svelte-mutable-store',
		official: true,
		adapters: ['node-library', 'sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@feltcoop/svelte-gettable-stores',
		repo: 'https://github.com/feltcoop/svelte-gettable-stores',
		official: true,
		adapters: ['node-library'],
		plugins: [],
	},
	{
		name: '@ryanatkn/corpus-activity-streams',
		repo: 'https://github.com/ryanatkn/corpus-activity-streams',
		official: false,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	{
		name: '@ryanatkn/collisions',
		repo: 'https://github.com/ryanatkn/collisions',
		official: false,
		adapters: ['node-library'],
		plugins: [],
	},
	{
		name: '@feltcoop/grogarden.org',
		repo: 'https://github.com/feltcoop/grogarden.org',
		official: true,
		adapters: ['sveltekit-frontend'],
		plugins: ['sveltekit-frontend'],
	},
	// TODO add the remaining projects
];

export const official_projects = projects.filter((p) => p.official);

export const userland_projects = projects.filter((p) => !p.official);
