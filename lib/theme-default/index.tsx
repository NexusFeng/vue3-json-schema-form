import SelectionWidget from './SelectionWidget'
import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../type'
import { defineComponent } from 'vue'
import TextWidget from './TextWidget'
import NumberWidget from './NumberWidget'

const CommonWidget: any = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props, ctx) {
    return () => null
  }
})

export default {
  widgets: {
    SelectionWidget,
    TextWidget,
    NumberWidget
  }
}
