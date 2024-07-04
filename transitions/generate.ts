import { chordTonesWithChromaticPassingNotes } from './chordTonesWithChromaticLeadingTone'
import { getTransitionAst } from './utils/getTransitionAst'
import { getTransitionModel } from './utils/getTransitionModel'

const models = chordTonesWithChromaticPassingNotes.transitions
  .map((t) => getTransitionAst(t))
  .map((ast) => getTransitionModel(ast))

console.log(JSON.stringify(models, null, 2))
