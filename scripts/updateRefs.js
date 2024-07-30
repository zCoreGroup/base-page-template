// scripts/updateRefs.js
const fs = require('fs')
const path = require('path')

const schemaPath = path.join(__dirname, '../src/schemas.json')
const schema = require(schemaPath)

function updateRefs(obj) {
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (key === '$ref' && typeof obj[key] === 'string') {
        obj[key] = obj[key].replace('#/definitions/', '#/components/schemas/')
      } else {
        updateRefs(obj[key])
      }
    }
  }
}

updateRefs(schema)

fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), 'utf-8')
