# How to use plantuml-core.jar.js

There are several way to generate diagrams with plantuml-core.jar.js.

Whatever the method you will be used, you have to first initialize cheerpjInit and the PlantUML library:

1. First, you call `cheerpjInit({ preloadResources: _runtimeResources() })` like for any CheerpJ project https://docs.leaningtech.com/cheerpj/Runtime-API

## PNG Generation

Using this method, plantuml-core.jar.js will create a blob containing PNG compressed data.
