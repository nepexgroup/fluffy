# Fluffy

A reusable component library for **Vue 3** and **React**, styled after
[frappe-ui](https://github.com/frappe/frappe-ui): gray-first palette, compact
type scale (base 14px), `solid / subtle / outline / ghost` variants, and full
dark-mode support via CSS-variable design tokens.

Every component exists in **both frameworks with identical visuals** — the
Tailwind class recipes live in one shared package, so Vue and React can't
drift apart.

## Packages

| Package | What it is |
|---------|-----------|
| `@fluffy/theme` | Design tokens (`tokens.css`), base styles, Tailwind preset, prebuilt `style.css` |
| `@fluffy/core` | Framework-agnostic variant recipes (cva), shared types, date/format utils |
| `@fluffy/vue` | Vue 3 components (built on `@headlessui/vue`) |
| `@fluffy/react` | React components (built on `@headlessui/react`) |

## Components (~30, simple → advanced)

- **Foundation** — Button, Badge, Avatar, Spinner, Progress, Divider, Alert, ErrorMessage, Tooltip
- **Forms** — Input, Textarea, Select, Checkbox, Switch, FormControl
- **Navigation & overlays** — Tabs (underline + pill), Breadcrumbs, Dropdown, Dialog, Popover, Toast (imperative `toast()` API)
- **Advanced** — Autocomplete, Combobox (multi-select), Calendar, DatePicker, FileUploader, ListView, Tree, CommandPalette, Rating

## Storybook

Every component has stories (controls playground + variant galleries) in both
frameworks, with a light/dark toolbar toggle.

```sh
pnpm install
pnpm storybook
```

- Vue Storybook → http://localhost:6006
- React Storybook → http://localhost:6007 — this one is the **composition
  host**: its sidebar also embeds the Vue Storybook under "Fluffy Vue", so one
  URL shows both libraries.

## Usage

### Vue

```ts
// main.ts
import '@fluffy/theme/tokens.css'
import '@fluffy/theme/base.css'
```

```vue
<script setup>
import { Button, Dialog, toast, Toasts } from '@fluffy/vue'
</script>

<template>
  <Toasts />
  <Button theme="blue" variant="solid" label="Save" @click="toast.success('Saved')" />
</template>
```

### React

```tsx
import '@fluffy/theme/tokens.css'
import '@fluffy/theme/base.css'
import { Button, Toasts, toast } from '@fluffy/react'

export function App() {
  return (
    <>
      <Toasts />
      <Button theme="blue" variant="solid" label="Save" onClick={() => toast.success('Saved')} />
    </>
  )
}
```

### Styling — two options

1. **You already use Tailwind** (recommended): add the preset and let Tailwind
   scan fluffy's dist so the component classes are generated:

   ```js
   // tailwind.config.js
   import { preset } from '@fluffy/theme'

   export default {
     presets: [preset],
     content: [
       './src/**/*.{vue,tsx,ts}',
       './node_modules/@fluffy/{vue,react,core}/dist/**/*.js',
     ],
   }
   ```

2. **No Tailwind**: import the prebuilt sheet — it contains the tokens, base
   styles and every utility the components use:

   ```ts
   import '@fluffy/theme/style.css'
   ```

### Dark mode

Set `data-theme="dark"` on `<html>`; every semantic token flips.

```js
document.documentElement.dataset.theme = 'dark'
```

## Development

```sh
pnpm install        # install workspace deps
pnpm build          # build theme, core, vue, react (dist + .d.ts)
pnpm typecheck      # typecheck all packages
pnpm storybook      # run both Storybooks (6006 + 6007)
pnpm build-storybook
```

Repo layout:

```
packages/theme    tokens, Tailwind preset, prebuilt css
packages/core     cva recipes + shared types/utils (single source of truth for looks)
packages/vue      Vue 3 components
packages/react    React components
apps/storybook-vue     Storybook (vue3-vite), port 6006
apps/storybook-react   Storybook (react-vite), port 6007, composition host
```

To add a component: write its recipe in `packages/core/src/recipes/`, consume
it from a thin component in both `packages/vue` and `packages/react`, and add
a story to each Storybook app.
