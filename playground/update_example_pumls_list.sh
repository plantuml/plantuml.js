#!/bin/bash

PUMLS=`find example-pumls -type f -name *.puml`

echo "const examplePumls = [" > assets/examplePumls.js

for fileUrl in $PUMLS
do
   echo "  {url: 'playground/${fileUrl}', label: '${fileUrl/example-pumls\//}'}," >> assets/examplePumls.js
done

echo "]" >> assets/examplePumls.js
