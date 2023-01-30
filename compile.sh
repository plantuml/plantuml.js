#!/bin/bash

ROOT_DIR=`pwd`

wget https://d3415aa6bfa4.leaningtech.com/cheerpj_linux_2.3.tar.gz -O - | tar -xz

# compile
rm $ROOT_DIR/compiled-jars/*

cp $ROOT_DIR/source-jars/plantuml-wasm.jar $ROOT_DIR/compiled-jars

cd $ROOT_DIR/compiled-jars

$ROOT_DIR/cheerpj_2.3/cheerpjfy.py plantuml-wasm.jar

cd $ROOT_DIR
