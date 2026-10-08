import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://www.braveforgood.org',

  // Preserves inbound links and running ad destinations from the old Wix site,
  // plus the internal move of the library program page to its own short URL.
  redirects: {
    '/see-you-at-the-library-2026': '/seeyouatthelibrary',
    '/see-you-at-the-library':      '/seeyouatthelibrary',
    '/syatl-lander':                '/seeyouatthelibrary',
    '/programs/library':            '/seeyouatthelibrary',
    '/programs/library/2025':       '/seeyouatthelibrary',
    '/iggy-and-kirk-lander':        '/programs/iggy-and-mr-kirk',
    '/bible-revival-lander':            '/programs/bible-revival',
    '/programs/bible-of-the-revolution': '/programs/bible-revival',
    '/our-mission':                 '/mission',
    '/privacy-policy':              '/privacy',
    '/blank-5':                     '/support',
    '/blank-6':                     '/privacy',
    '/blank-7':                     '/terms',
    '/donate':                      '/support',
    '/event-list':                  '/seeyouatthelibrary',
    '/event':                       'https://secure.anedot.com/brave-for-good/90049538-0b7f-4bef-8b5f-4de4da87978c',
  },
});