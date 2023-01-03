import { CommonWidgetPropsDefine } from '../type'
import { defineComponent } from 'vue'

const TextWidget: any = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props, ctx) {
    const handleChange = (e: any) => {
      console.log(e)
      e.target.value = props.value
      props.onChange(e.target.value)
    }
    return () => {
      return (
        <input type="text" value={props.value as any} onInput={handleChange} />
      )
    }
  }
})

export default TextWidget
