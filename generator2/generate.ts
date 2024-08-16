import { getRawTransitionCategories } from './getRawTransitionCategories'
import { INPUT_FOLDER } from './constants'
import { getTransitionCategories } from './getTransitionCategories'
import { generateTransitionsFile } from './generateTransitionsFile'
import { generateIndexFile } from './generateIndexFile'
import { groupBy } from '../src/model/utils'

const rawCategories = getRawTransitionCategories(INPUT_FOLDER)
const categoryList = getTransitionCategories(rawCategories)
const categoriesByFiles = Object.entries(
  groupBy(categoryList, (cat) => cat.sourceFileName),
)
categoriesByFiles.forEach(([fileName, categories]) =>
  generateTransitionsFile(fileName, categories),
)
generateIndexFile(categoriesByFiles)
