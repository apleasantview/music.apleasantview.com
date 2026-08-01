import baseline, { config as baselineConfig } from '@apleasantview/eleventy-plugin-baseline';
import catalog from './utils/catalog.js';

const siteUrl = process.env.URL || 'http://localhost:8080/';

const settings = {
	title: 'music',
	url: siteUrl,
	defaultLanguage: 'en'
};

export default async function (eleventyConfig) {
	await eleventyConfig.addPlugin(
		baseline(settings, {
			head: {
				showGenerator: true
			}
		})
	);

	eleventyConfig.addGlobalData('settings', settings);
	eleventyConfig.addGlobalData('catalog', catalog);

	// Site-specific passthroughs, filters, shortcodes, and collections go here.
}

export const config = baselineConfig;
