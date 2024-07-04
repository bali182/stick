import { Expression, factory } from 'typescript'

export function getLiteralAst(value: any): Expression {
  if (value === null) {
    return factory.createNull()
  } else if (value === undefined) {
    return factory.createIdentifier('undefined')
  } else if (typeof value === 'string') {
    return factory.createStringLiteral(value)
  } else if (typeof value === 'number') {
    return factory.createNumericLiteral(value)
  } else if (typeof value === 'boolean') {
    return value ? factory.createTrue() : factory.createFalse()
  } else if (Array.isArray(value)) {
    return factory.createArrayLiteralExpression(
      value.map(getLiteralAst),
      value.length > 3,
    )
  } else if (typeof value === 'object') {
    const entries = Object.entries(value)
    const properties = entries.map(([key, value]) =>
      factory.createPropertyAssignment(key, getLiteralAst(value)),
    )
    return factory.createObjectLiteralExpression(properties, entries.length > 3)
  }

  throw new TypeError(JSON.stringify(value))
}
