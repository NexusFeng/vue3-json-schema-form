import { inject } from 'vue'
import { CommonFieldType } from './type'
export const SchemaFormContextKey = Symbol()

export function useVJSFContext(){
  const context: { SchemaItem: CommonFieldType } | undefined = inject(
    SchemaFormContextKey
  )
  if(!context) throw Error('SchemaForm needed')
  return context
}