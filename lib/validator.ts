import Ajv from 'ajv'
const i18n = require('ajv-i18n') // eslint-disable-line
import toPath from 'lodash.topath'
import { Schema } from './type'

interface TransformErrorObject {
  name: string,
  property: string,
  message: string | undefined,
  params: Ajv.ErrorParameters,
  schemaPath: string
}

interface ErrorSchemaObject {
  [level: string]: ErrorSchema
}

export type ErrorSchema = ErrorSchemaObject & {
  __errors: string[]
}

function toErrorSchema(errors: TransformErrorObject[]){
  if(errors.length < 1) return {}
  
  return errors.reduce((errorSchema, error) => {
    const { property, message } = error
    const path = toPath(property)
    let parent = errorSchema

    if(path.length > 0 && path[0] === '') {
      path.splice(0, 1)
    }
    for(const segment of path.slice(0)) {
      if(!(segment in parent)) {
        ;(parent as any)[segment] = {}
      }
      parent = parent[segment]
    }

    if(Array.isArray(parent.__errors)) {
      parent.__errors = parent.__errors.concat(message || '')
    } else {
      if(message) {
        parent.__errors = [message]
      }
    }
    return errorSchema
  }, {} as ErrorSchema)
}

function transformError(errors: Ajv.ErrorObject[] | null | undefined): TransformErrorObject[] {
  if(errors === null || errors === undefined) return []

  return errors.map(({message, dataPath, keyword, params, schemaPath}) => {
    return {
      name: keyword,
      property: `${dataPath}`,
      message,
      params,
      schemaPath
    }
  })
}

export function validateFormData(
  validator: Ajv.Ajv,
  formData: any,
  schema: Schema,
  locale = 'zh'
){
  let validationError: any = null
  try {
    validator.validate(schema, formData)
  } catch (error) {
    validationError = error
  }
  i18n[locale](validator.errors)
  let errors = transformError(validator.errors)


  if(validationError) {
    errors = [
      ...errors,
      {
        message: validationError.message
      } as TransformErrorObject
    ]
  }

  const errorSchema = toErrorSchema(errors)

  return {
    errorSchema,
    errors,
    valid: errors.length === 0
  }
}