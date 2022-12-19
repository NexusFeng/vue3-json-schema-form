import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../type'

import SchemaItem from 'lib/SchemaItem'

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props, ctx) {
    return () => {
      return
    }
  }
})
