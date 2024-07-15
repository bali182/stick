import { Expression, factory, SyntaxKind, isExpression } from 'typescript'

export function getLiteralAst(value: any, skipUndefined: boolean): Expression {
  // null, undefined, or an expression anywhere in the tree taken care of
  if (value === null) {
    return factory.createNull()
  } else if (value === undefined) {
    return factory.createIdentifier('undefined')
  } else if (isExpression(value)) {
    return value
  }

  // Rest of the type tree
  if (typeof value === 'string') {
    return factory.createStringLiteral(value)
  } else if (typeof value === 'number') {
    const numLiteral = factory.createNumericLiteral(Math.abs(value))
    return value >= 0
      ? numLiteral
      : factory.createPrefixUnaryExpression(SyntaxKind.MinusToken, numLiteral)
  } else if (typeof value === 'boolean') {
    return value ? factory.createTrue() : factory.createFalse()
  } else if (Array.isArray(value)) {
    const values = value
      .filter((val) => (skipUndefined ? val !== undefined : true))
      .map((val) => getLiteralAst(val, skipUndefined))
    return factory.createArrayLiteralExpression(values, false)
  } else if (typeof value === 'object') {
    const entries = Object.entries(value)
    const properties = entries
      .filter(([, val]) => (skipUndefined ? val !== undefined : true))
      .map(([key, value]) =>
        factory.createPropertyAssignment(
          key,
          getLiteralAst(value, skipUndefined),
        ),
      )

    return factory.createObjectLiteralExpression(properties, false)
  }

  throw new TypeError(JSON.stringify(value))
}
