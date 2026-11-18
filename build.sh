#!/bin/sh
# Kopiert nur die Website-Dateien nach dist/ (keine internen Dateien wie DESIGN.md, README.md, .claude).
set -e
rm -rf dist
mkdir dist
cp -r index.html impressum.html datenschutz.html danke.html 404.html robots.txt sitemap.xml _headers _redirects assets dist/
