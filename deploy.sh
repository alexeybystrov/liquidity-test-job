#!/usr/bin/env sh

set -e

npm run generate

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:alexeybystrov/liquidity-test-job.git master:gh-pages

cd -