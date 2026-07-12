// Config used only to build the prebuilt dist/style.css.
// Scans sibling package sources so every utility class used by any
// fluffy component (recipes live in @fluffy/core) gets generated.
import { preset } from './dist/preset.js'

export default {
  presets: [preset],
  content: [
    '../core/src/**/*.ts',
    '../vue/src/**/*.{vue,ts}',
    '../react/src/**/*.{tsx,ts}',
  ],
}
