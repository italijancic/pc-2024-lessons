import globals from "globals"
import pluginJs from "@eslint/js"


export default [
  {
    languageOptions: { globals: globals.node }
  },
  {
    rules: {
      'semi': ['error', 'never'] // Enforce no semicolons
    }
  },
  pluginJs.configs.recommended,
]
