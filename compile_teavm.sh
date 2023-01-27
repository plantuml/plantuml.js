#!/bin/bash

ROOT_DIR=`pwd`

# teavm compile
rm -r $ROOT_DIR/compiled-teavm/*

cd $ROOT_DIR/teavm/teavm-maven-webapp

mvn -e clean package

unzip target/teavm-maven-webapp-1.0-SNAPSHOT.war -d $ROOT_DIR/compiled-teavm/

cd $ROOT_DIR
