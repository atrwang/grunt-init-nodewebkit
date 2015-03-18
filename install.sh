#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd ../
grunt-init  $DIR
cd libs
npm install
bower install

