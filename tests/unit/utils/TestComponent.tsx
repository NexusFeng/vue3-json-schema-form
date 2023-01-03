import { defineComponent, PropType } from 'vue'
import JsonSchemaForm, { Schema, ThemeProvider } from '../../../lib'
import themeDefault from 'lib/theme-default'

export const ThemeDefaultProvider = defineComponent({
  setup(props, { slots }) {
    return () => (
      <ThemeProvider theme={themeDefault}>
        {slots.default && slots.default()}
      </ThemeProvider>
    )
  }
})

export default defineComponent({
  name: 'TestComponent',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    value: {
      required: true
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    }
  },
  setup(props, ctx) {
    return () => (
      <ThemeDefaultProvider>
        <JsonSchemaForm {...props} />
      </ThemeDefaultProvider>
    )
  }
})
