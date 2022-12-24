import SelectionWidget from './Selection'
import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../type'
import { defineComponent } from 'vue'

const CommonWidget: CommonWidgetDefine = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props, ctx) {
    return () => null
  }
})

export default {
  widgets: {
    SelectionWidget,
    TextWidget: CommonWidget,
    NumberWidget: CommonWidget
  }
}
