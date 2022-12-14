const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv)
var localize = require('ajv-i18n')
// ajv.addFormat('test', (data) => {
//   console.log(data)
// })

ajv.addKeyword({
  keyword: 'test',
  macro: () => {
    return {
      minLength: 10,
    }
  },
})
const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'integer',
      // format: ''
    },
    bar: {
      type: 'string',
      errorMessage: {
        type: '错误',
        minLength: '长度不小于10',
      },
      minLength: 10,
    },
  },
  required: ['foo'],
  // additionalProperties: false,
}

const data = { foo: 1, bar: '1' }
const valid = ajv.validate(schema, data)
if (!valid) {
  localize.zh(valid.errors)
  console.log(ajv.errors)
}
