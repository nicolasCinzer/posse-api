import fs from 'node:fs/promises'

const updateFile = async (path, data) => {
  try {
    await fs.writeFile(path, JSON.stringify(data))
  } catch (err) {
    throw new Error(`Error updating database!`)
  }
}

export default updateFile
