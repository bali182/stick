import { Expression, factory, SyntaxKind } from 'typescript'

export function getLiteralAst(value: any): Expression {
  if (value === null) {
    return factory.createNull()
  } else if (value === undefined) {
    return factory.createIdentifier('undefined')
  } else if (typeof value === 'string') {
    return factory.createStringLiteral(value)
  } else if (typeof value === 'number') {
    const numLiteral = factory.createNumericLiteral(Math.abs(value))
    return value >= 0
      ? numLiteral
      : factory.createPrefixUnaryExpression(SyntaxKind.MinusToken, numLiteral)
  } else if (typeof value === 'boolean') {
    return value ? factory.createTrue() : factory.createFalse()
  } else if (Array.isArray(value)) {
    return factory.createArrayLiteralExpression(value.map(getLiteralAst), false)
  } else if (typeof value === 'object') {
    const entries = Object.entries(value)
    const properties = entries.map(([key, value]) =>
      factory.createPropertyAssignment(key, getLiteralAst(value)),
    )
    return factory.createObjectLiteralExpression(properties, false)
  }

  throw new TypeError(JSON.stringify(value))
}
