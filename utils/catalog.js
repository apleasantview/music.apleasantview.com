/**
 * The music catalog API.
 *
 * Entries are authored in library/entries.js; this file normalises them into
 * a flat `albums` list, a few indexes, and lookup helpers.
 *
 * Each album gains two derived fields:
 *   name — the catalog key it lives under (may differ from `artist`)
 *   slug — `artist/title`, ready to use as a permalink
 */

import entries from '../library/entries.js';

const slugify = (value) =>
	String(value)
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

const albums = Object.entries(entries)
	.flatMap(([name, releases]) =>
		releases.map((release) => ({
			...release,
			name,
			slug: `${slugify(name)}/${slugify(release.title)}`
		}))
	)
	.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

const groupBy = (key) =>
	albums.reduce((index, album) => {
		(index[album[key]] ??= []).push(album);
		return index;
	}, {});

const byArtist = groupBy('name');
const byYear = groupBy('year');
const byGenre = groupBy('genre');

export default {
	albums,
	artists: Object.keys(byArtist).sort((a, b) => a.localeCompare(b)),
	genres: Object.keys(byGenre).sort((a, b) => a.localeCompare(b)),
	years: Object.keys(byYear)
		.map(Number)
		.sort((a, b) => b - a),

	byArtist,
	byYear,
	byGenre,

	/** Look up a single album by its `artist/title` slug. */
	find: (slug) => albums.find((album) => album.slug === slug) ?? null,

	/** Free-text search across title, artist, and genre. */
	search: (query) => {
		const term = String(query).trim().toLowerCase();
		if (!term) return [];

		return albums.filter((album) =>
			[album.title, album.artist, album.name, album.genre].some((field) =>
				field.toLowerCase().includes(term)
			)
		);
	}
};
