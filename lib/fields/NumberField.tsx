import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../type'

export default defineComponent({
  name: 'StringField',
  props: FiledPropsDefine,
  setup(props, ctx) {
    return () => <div> Number </div>
  }
})
