import type {Gro_Project} from '$lib/project';

export const projects: Gro_Project[] = [
	{
		name: '@feltcoop/gro',
		repo: 'https://github.com/feltcoop/gro',
		official: true,
		adapters: ['node_library'],
		plugins: [],
	},
	{
		name: '@feltcoop/felt',
		repo: 'https://github.com/feltcoop/felt',
		official: true,
		adapters: ['node_library', 'sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/felt-server',
		repo: 'https://github.com/feltcoop/felt-server',
		official: true,
		adapters: ['generic_build', 'sveltekit_frontend'],
		plugins: ['api_server', 'sveltekit_frontend'],
	},
	{
		name: '@feltcoop/felt-template',
		repo: 'https://github.com/feltcoop/felt-template',
		official: true,
		adapters: ['node_library', 'sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@feltcoop/dealt',
		repo: 'https://github.com/feltcoop/dealt',
		official: true,
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@spiderspace/spiderspace',
		repo: 'https://github.com/spiderspace/spiderspace',
		official: false,
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@spiderspace/about',
		repo: 'https://github.com/spiderspace/about',
		official: false,
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@spiderspace/stylevar',
		repo: 'https://github.com/spiderspace/stylevar',
		official: false,
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	{
		name: '@ryanatkn/corpus-activity-streams',
		repo: 'https://github.com/ryanatkn/corpus-activity-streams',
		official: false,
		adapters: ['sveltekit_frontend'],
		plugins: [],
	},
	{
		name: '@ryanatkn/collisions',
		repo: 'https://github.com/ryanatkn/collisions',
		official: false,
		adapters: ['node_library'],
		plugins: [],
	},
	{
		name: '@feltcoop/grogarden.org',
		repo: 'https://github.com/feltcoop/grogarden.org',
		official: true,
		adapters: ['sveltekit_frontend'],
		plugins: ['sveltekit_frontend'],
	},
	// TODO add the remaining projects
];

export const official_projects = projects.filter((p) => p.official);

export const userland_projects = projects.filter((p) => !p.official);
