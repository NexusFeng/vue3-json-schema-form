import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../type'

import SchemaItem from '../SchemaItem'
import { isObject } from '../utils'
import { SchemaFormContextKey, useVJSFContext } from '../context'

export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,
  setup(props, ctx) {
    const context = useVJSFContext()
    return () => {
      const SchemaItem = context.SchemaItem
    }
  }
})
