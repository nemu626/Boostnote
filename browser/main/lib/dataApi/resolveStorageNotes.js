const sander = require('sander')
const path = require('path')
const CSON = require('season')

function resolveStorageNotes (storage) {
  const notesDirPath = path.join(storage.path, 'notes')
  let notePathList
  try {
    notePathList = sander.readdirSync(notesDirPath)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(notesDirPath, ' doesn\'t exist.')
      sander.mkdirSync(notesDirPath)
    } else {
      console.warn('Failed to find note dir', notesDirPath, err)
    }
    notePathList = []
  }
  let notes = notePathList
    .map(function parseCSONFile (notePath) {
      let data = CSON.readFileSync(path.join(notesDirPath, notePath))
      data.key = path.basename(notePath, '.cson')
      data.storage = storage.key
      return data
    })

  return Promise.resolve(notes)
}

module.exports = resolveStorageNotes
