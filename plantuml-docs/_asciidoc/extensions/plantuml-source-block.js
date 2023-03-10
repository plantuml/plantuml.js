const plantumlEncoder = require('plantuml-encoder')

module.exports = function (registry) {
    registry.block(function () {
        const self = this
        self.named('plantuml')
        self.onContext('listing')
        self.process(function (parent, reader) {
            const lines = reader.getLines()

            const codeBlock = `<div class="listingblock"><div class="content"><pre class="highlightjs highlight"><code class="language-plantuml hljs" data-lang="plantuml">${lines.join("\n")}</code></pre></div></div>`

            const imagePath = plantumlEncoder.encode(lines.join("\n"))
            const imageBlock = `<a href="https://plantuml.github.io/plantuml.js/#encodedString=${imagePath}" target="_blank"><img loading="lazy" src="https://plantuml.com/plantuml/pmg/${imagePath}"/></a>`

            const html = `<div class="paragraph plantuml-diagram">${codeBlock} ${imageBlock}</div>`
            return self.createBlock(parent, 'pass', html, {}, {})
        })
    })
}
