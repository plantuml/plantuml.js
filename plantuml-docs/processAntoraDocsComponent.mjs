import fs from 'fs'

const outputDirectory = 'modules/ROOT/pages/'
const sourceDirectory = 'docs_from_alphadoc/'

// ensure the output directory exists
if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory, { recursive: true });
}

// clean up the pages before start
let existingFiles = []
try {
  existingFiles = fs.readdirSync(outputDirectory)
} catch (error) {
  console.info(error)
}
for (const filename of existingFiles) {
  fs.unlinkSync(`${outputDirectory}${filename}`)
}

// process each page
for (let filename of fs.readdirSync(sourceDirectory)){
    if (filename === '.gitkeep'){
        continue
    }

    let content = fs.readFileSync(`${sourceDirectory}${filename}`, 'utf8')

    // Step1: use source code blocks for plantuml parts
    content = content.replaceAll('<plantuml>', '[plantuml]\n----').replaceAll('</plantuml>', '----')

    fs.writeFileSync(`${outputDirectory}${filename}`, content)
    console.info(`Processed ${filename}`)
}
