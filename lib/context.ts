import { inject } from 'vue'
import { CommonFieldType, Theme } from './type'
export const SchemaFormContextKey = Symbol()

export function useVJSFContext(){
  const context: { SchemaItem: CommonFieldType,
    //  theme: Theme
   } | undefined = inject(
    SchemaFormContextKey
  )
  if(!context) throw Error('SchemaForm needed')
  return context
}