#!/bin/bash

PUMLS=`find examples -type f -name *.puml`

echo "const examplePumls = [" > assets/js/examplePumls.js

for fileUrl in $PUMLS
do
   echo "  {url: '${fileUrl}', label: '${fileUrl/examples\//}'}," >> assets/js/examplePumls.js
done

echo "]" >> assets/js/examplePumls.js
