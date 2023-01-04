import { defineComponent, PropType, provide, Ref, watch } from 'vue'

import { Schema, SchemaTypes, Theme } from './type'
import SchemaItem from './SchemaItem'
import { SchemaFormContextKey } from './context'

interface ContextRef {
  doValidate: () => {
    errors: any[]
    valid: boolean
  }
}

export default defineComponent({
  name: 'SchemaForm',
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
    },
    contextRef: {
      type: Object as PropType<Ref<ContextRef | undefined>>
    }
    // theme: {
    //   type: Object as PropType<Theme>,
    //   required: true
    // }
  },
  setup(props, { slots }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    const context: any = {
      SchemaItem
      // them: props.theme
    }

    watch(
      () => props.contextRef,
      () => {
        if (props.contextRef) {
          props.contextRef.value = {
            doValidate() {
              return {
                valid: true,
                errors: []
              }
            }
          }
        }
      },
      {
        immediate: true
      }
    )

    provide(SchemaFormContextKey, context)

    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          schema={schema}
          value={value}
          onChange={handleChange}
          rootSchema={schema}
        />
      )
    }
  }
})
