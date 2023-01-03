import { defineComponent } from 'vue'
import { FiledPropsDefine, CommonWidgetNames } from '../type'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      props.onChange(v)
    }
    const TextWidgetRef = getWidget(CommonWidgetNames.TextWidget)
    return () => {
      const { schema, rootSchema, ...rest } = props
      const TextWidget = TextWidgetRef.value
      return <TextWidget {...rest} onChange={handleChange} />
      // return (
      // <input type="text" value={props.value as any} onInput={handleChange} />
      // )
    }
  }
})
