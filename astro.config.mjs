import { defineConfig } from 'astro/config';

import { presetUno, presetAttributify } from 'unocss';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
});
