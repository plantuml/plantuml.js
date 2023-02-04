# How to use plantuml-core.jar.js

There are several way to generate diagrams with plantuml-core.jar.js.

Whatever the method you will be used, you have to first initialize cheerpjInit and the PlantUML library:

1. First, you call `cheerpjInit({ preloadResources: _runtimeResources() })` like for any [CheerpJ project](https://docs.leaningtech.com/cheerpj/Runtime-API)
2. Then you load the PlantUML library await `cheerpjRunMain("com.plantuml.wasm.RunInit", ${cheerpjPath}/plantuml-core.jar, ${cheerpjPath}/...)`

You can choose your prefered way.

## PNG Generation

Using this method, plantuml-core.jar.js will create a blob containing PNG compressed data.

You just have to call `com.plantuml.wasm.Utils.convertPng` method with two argument:


```
package com.plantuml.wasm;

public class Utils {
   
	public static int convertPng(String pathOut, String text) throws IOException {
  ...
```

- `pathOut` is the file path when PlantUML should write the PNG data (for example `/files/result.png`)
-  `text` is simply the text of the diagram, starting by @startsomething.


## Canvas usage

TO BE DONE


## SVG Generation

TO BE DONE


## Applet

TO BE DONE



