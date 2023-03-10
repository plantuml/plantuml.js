import fs from 'fs'
import * as cheerio from 'cheerio'

// Get all the links from table of contents
const response = await fetch("http://alphadoc.plantuml.com/toc/asciidoc/en")
const tocHtml = await response.text()
const $ = cheerio.load(tocHtml)
const docLinks = []
$('#cont .conta .ctop').each((i, element) => {
    docLinks.push($(element).find('a:first').attr('href'))
})

// Fetch content from each link and store them
for (let path of docLinks){
    const rawDocUrl = `http://alphadoc.plantuml.com/raw/${path.replace('/doc/', '/raw/')}`
    const filename = `${path.split('/').at(-1)}.adoc`
    const rawDoc = await (await fetch(rawDocUrl)).text()
    fs.writeFileSync(`./docs_from_alphadoc/${filename}`, rawDoc)
    console.info(`Saved ${filename}`)
}
