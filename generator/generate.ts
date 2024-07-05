import { getRawTransitionCategories } from './getRawTransitionCategories'
import { INPUT_FOLDER } from './constants'
import { getTransitionCategories } from './getTransitionCategories'
import { generateTransitionsFile } from './generateTransitionsFile'
import { generateIndexFile } from './generateIndexFile'

const rawCategories = getRawTransitionCategories(INPUT_FOLDER)
const categories = getTransitionCategories(rawCategories)

categories.forEach(generateTransitionsFile)
generateIndexFile(categories)
