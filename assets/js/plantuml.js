const plantuml = (() => {
    const initialize = async (cheerpjPath = "/app") => {
        await Promise.all([
            cheerpjInit({ preloadResources: _runtimeResources() }),
            _preloadPlantumlFiles(cheerpjPath.replace("/app", ""))
        ])

        // to make cjcall work, first we load the java package like this
        await cheerpjRunMain("net.sourceforge.plantuml.wasm.RunEmpty", `${cheerpjPath}/plantuml-wasm.jar`)        
    }

    const renderPng = (pumlContent) => {
        return new Promise((resolve, reject) => {
            const renderingStartedAt = new Date()  
            cjCall("net.sourceforge.plantuml.wasm.Utils", "convertPng", "/files/result.png", pumlContent).then((exitCode) => {
                if (exitCode === undefined || exitCode.value0 !== 0){
                    reject(`convertPng returned non-0: ${exitCode} ${exitCode.value0}`)
                }
                cjFileBlob("result.png").then((blob) => {
                    console.log('Rendering finished in', (new Date()).getTime() - renderingStartedAt.getTime(), 'ms');
                    resolve(blob)        
                })
            })
        })
    }

    const _runtimeResources = () => {
        return ["/lt/runtime/rt.jar.jdk.js","/lt/runtime/rt.jar.java.util.function.js","/lts/rt.jar","/lts/rt.jar.c0.txt","/lts/rt.jar.c1.txt","/lts/rt.jar.c100.txt","/lts/rt.jar.c99.txt","/lts/rt.jar.c84.txt","/lts/rt.jar.c85.txt","/lts/rt.jar.c86.txt","/lts/rt.jar.c87.txt","/lts/rt.jar.c88.txt","/lts/rt.jar.c89.txt","/lts/rt.jar.c90.txt","/lts/rt.jar.c91.txt","/lts/rt.jar.c92.txt","/lts/rt.jar.c93.txt","/lts/rt.jar.c94.txt","/lts/rt.jar.c95.txt","/lts/rt.jar.c96.txt","/lts/rt.jar.c97.txt","/lts/rt.jar.c98.txt","/lts/rt.jar.c83.txt","/lt/runtime/rt.jar.sun.reflect.js","/lt/runtime/rt.jar.java.lang.js","/lt/runtime/rt.jar.java.nio.file.js","/lt/runtime/rt.jar.java.util.concurrent.js","/lt/runtime/rt.jar.sun.net.js","/lt/runtime/rt.jar.java.util.zip.js","/lt/runtime/rt.jar.sun.nio.js","/lts/meta-index","/lts/meta-index.c0.txt","/lts/rt.jar.c76.txt","/lts/rt.jar.c77.txt","/lts/rt.jar.c75.txt","/lt/runtime/rt.jar.java.util.regex.js","/lt/runtime/rt.jar.java.js","/lt/runtime/rt.jar.java.util.js","/lt/runtime/rt.jar.java.util.concurrent.atomic.js","/lt/runtime/rt.jar.sun.awt.util.js","/lt/runtime/rt.jar.java.io.js","/lt/runtime/rt.jar.sun.awt.resources.js","/lt/runtime/rt.jar.java.awt.image.js","/lt/runtime/rt.jar.sun.awt.image.js","/lt/runtime/rt.jar.java.awt.js","/lt/runtime/rt.jar.sun.java2d.loops.js","/lts/rt.jar.c2.txt","/lt/runtime/rt.jar.java.awt.color.js","/lt/runtime/rt.jar.sun.java2d.js","/lt/runtime/rt.jar.java.util.concurrent.locks.js","/lt/runtime/rt.jar.java.awt.geom.js","/lt/runtime/rt.jar.sun.font.js","/lt/runtime/rt.jar.sun.awt.js","/lt/runtime/rt.jar.sun.util.js","/lt/runtime/rt.jar.java.util.spi.js","/lt/runtime/rt.jar.sun.misc.js","/lt/runtime/rt.jar.java.net.js","/lt/cheerpj/lib/accessibility.properties","/lt/runtime/rt.jar.java.lang.invoke.js","/lt/runtime/rt.jar.sun.js","/lt/runtime/rt.jar.jdk.internal.org.js","/lts/rt.jar.c27.txt","/lts/rt.jar.c28.txt","/lts/rt.jar.c26.txt","/lt/runtime/rt.jar.java.security.js","/lt/runtime/rt.jar.com.js","/lt/runtime/rt.jar.java.util.logging.js","/lt/runtime/rt.jar.java.awt.font.js","/lt/runtime/rt.jar.java.text.js","/lt/runtime/rt.jar.sun.nio.ch.js","/lt/runtime/rt.jar.sun.java2d.pipe.js","/lt/runtime/rt.jar.java.awt.event.js","/lt/runtime/rt.jar.sun.java2d.marlin.js","/lts/rt.jar.c14.txt","/lts/rt.jar.c15.txt","/lts/rt.jar.c13.txt","/lts/rt.jar.c12.txt","/lt/cheerpj/lib/fonts/LucidaSansRegular.ttf","/lts/rt.jar.c16.txt","/lts/rt.jar.c17.txt","/lts/rt.jar.c29.txt","/lts/rt.jar.c30.txt","/lts/rt.jar.c9.txt","/lts/rt.jar.c10.txt","/lts/rt.jar.c8.txt","/lt/cheerpj/lib/fonts/badfonts.txt","/lt/cheerpj/lib/fonts/index.list","/lt/cheerpj/lib/fonts/fallback","/lt/cheerpj/fontconfig.properties","/lt/cheerpj/DejaVuSans.ttf","/lt/runtime/rt.jar.java.nio.js","/lt/runtime/rt.jar.sun.nio.cs.js","/lts/rt.jar.c20.txt","/lts/rt.jar.c21.txt","/lts/rt.jar.c19.txt","/lt/runtime/rt.jar.javax.imageio.js","/lt/runtime/rt.jar.com.sun.imageio.js","/lt/runtime/rt.jar.com.sun.imageio.plugins.jpeg.js","/lt/runtime/rt.jar.sun.nio.fs.js","/lts/rt.jar.c65.txt","/lts/rt.jar.c66.txt","/lts/rt.jar.c64.txt","/lt/cheerpj/lib/security/java.security","/lt/runtime/rt.jar.sun.security.provider.js"]
    }

    const _preloadPlantumlFiles = async (urlBasePathForFiles) => {
        // just do explicit fetch here for further cache hits
        // this code may evolve into bundling all resource files and pass it to cheerpj
        return await Promise.all([
            fetch(`${urlBasePathForFiles}/plantuml-wasm.jar.js`),
            fetch(`${urlBasePathForFiles}/plantuml-wasm.jar`)
        ])
    }

    return { initialize, renderPng }
})()
