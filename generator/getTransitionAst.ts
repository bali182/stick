import { CharStream, CommonTokenStream } from 'antlr4'
import wbpLexer from '../generated/wbp/wbpLexer'
import wbpParser, { TransitionContext } from '../generated/wbp/wbpParser'

export function getTransitionAst(input: string): TransitionContext {
  const stream = new CharStream(input)
  const lexer = new wbpLexer(stream)
  const tokens = new CommonTokenStream(lexer)
  const parser = new wbpParser(tokens)
  return parser.transition()
}
