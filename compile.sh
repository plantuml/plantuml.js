#!/bin/bash

ROOT_DIR=`pwd`

wget https://d3415aa6bfa4.leaningtech.com/cheerpj_linux_2.3.tar.gz -O - | tar -xz

# full compile
rm $ROOT_DIR/compiled-jars/*

cp $ROOT_DIR/source-jars/* $ROOT_DIR/compiled-jars

cd $ROOT_DIR/compiled-jars

$ROOT_DIR/cheerpj_2.3/cheerpjfy.py plantuml-1.2023.0.jar --deps ditaa0_9.jar:j2v8_win32_x86_64-3.1.6.jar:j2v8_macosx_x86_64-3.1.6.jar:elk-full.jar:xmlgraphics-commons-1.4.jar:avalon-framework-4.2.0.jar:plantuml-1.2023.0.jar:fop.jar:j2v8_linux_x86_64-3.1.6.jar:batik-all-1.7.jar:jlm_greek.jar:jlatexmath-minimal-1.0.3.jar:xml-apis-ext-1.3.04.jar:vizjs.jar:commons-io-1.3.1.jar:jlm_cyrillic.jar:commons-logging-1.0.4.jar

# lite compile
rm $ROOT_DIR/compiled-lite-jars/*

cp $ROOT_DIR/source-jars/plantuml-1.2023.0.jar $ROOT_DIR/compiled-lite-jars

cd $ROOT_DIR/compiled-lite-jars

$ROOT_DIR/cheerpj_2.3/cheerpjfy.py plantuml-1.2023.0.jar

# beta compile
rm $ROOT_DIR/compiled-beta-jars/*

cp $ROOT_DIR/source-beta-jars/plantuml-wasm.jar $ROOT_DIR/compiled-beta-jars

cd $ROOT_DIR/compiled-beta-jars

$ROOT_DIR/cheerpj_2.3/cheerpjfy.py plantuml-wasm.jar

cd $ROOT_DIR
