import { FiledPropsDefine, CommonWidgetNames } from '../type'
import { defineComponent } from 'vue'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      // const value = e.target.value

      const num = Number(v)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }
    const NumberWidgetRef = getWidget(CommonWidgetNames.NumberWidget)
    const { schema, rootSchema, ...rest } = props
    const NumberWidget = NumberWidgetRef.value
    return <NumberWidget {...rest} onChange={handleChange} />
    // return () => {
    //   const { value } = props
    //   return <input value={value as any} type="number" onInput={handleChange} />
    // }
  }
})
