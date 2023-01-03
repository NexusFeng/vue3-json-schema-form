import { FiledPropsDefine } from '../type'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberWidget',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      e.target.value = props.value
      props.onChange(e.target.value)
    }

    return () => {
      const { value } = props
      return <input value={value as any} type="number" onInput={handleChange} />
    }
  }
})
