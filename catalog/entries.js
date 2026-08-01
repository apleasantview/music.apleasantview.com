/**
 * Catalog entries — the authored data, and nothing else.
 *
 * Keyed by artist, each holding that artist's albums.
 *
 * Album shape:
 *   title, artist, genre, year, description, meta { albumUrl, previewUrl }
 *
 * `TBD` is null so templates can test with `{% if album.description %}`.
 * Lookups and indexes live in catalog/api.js.
 */

const TBD = null;

export default {
	'1982': [
		{
			title: 'Dirty Shirts',
			artist: 'The 1982',
			genre: 'Disco Noise',
			year: 2020,
			description: TBD,
			meta: {
				albumUrl: 'https://the1982.bandcamp.com/album/dirty-shirts',
				previewUrl: TBD
			}
		}
	],
	'Cristovao Verstraeten': [
		{
			title: 'Dark Days, Bright Nights',
			artist: 'Cristovao Verstraeten',
			genre: 'Lo-Fi Blues Rock',
			year: 2012,
			description: TBD,
			meta: {
				albumUrl: 'https://crisvg.bandcamp.com/album/dark-days-bright-nights',
				previewUrl: TBD
			}
		},
		{
			title: "Levi's Vintage Clothing - KLVC Guest DJ",
			artist: 'Cristovao Verstraeten',
			genre: 'Various',
			year: 2013,
			description: TBD,
			meta: {
				albumUrl:
					'https://crisvg.bandcamp.com/album/levis-vintage-clothing-klvc-guest-dj',
				previewUrl: TBD
			}
		}
	],
	'Various Artists': [
		{
			title: 'Volume 1: 2009-2012',
			artist: 'Various Artists',
			genre: 'Various',
			year: 2013,
			description: TBD,
			meta: {
				albumUrl:
					'https://crisvg.bandcamp.com/album/apleasantview-com-volume-1-2009-2012',
				previewUrl: TBD
			}
		},
		{
			title: 'Volume 2',
			artist: 'Various Artists',
			genre: 'Various',
			year: 2013,
			description: TBD,
			meta: {
				albumUrl: 'https://crisvg.bandcamp.com/album/apleasantview-com-volume-2',
				previewUrl: TBD
			}
		}
	]
};
