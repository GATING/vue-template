#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # test  
  npm run lint
 
  # commit
  npm version "$VERSION" --message "chore(release): $VERSION"
  # publish
  git push origin refs/tags/v"$VERSION"


 # generate release note
  npm run release:note
  # commit
  git add -A
  git commit -m "chore(release): $VERSION"
  git push
fi
