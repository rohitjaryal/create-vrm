#!/usr/bin/env node
#echo "First arg: $1"
PROJECT_NAME=$1
mkdir $PROJECT_NAME
cd $PROJECT_NAME

git clone https://github.com/rohitjaryal/desejo.git

cp desejo ..
cp -r ./desejo/. ../$PROJECT_NAME/
rm -rf .git
rm -rf desejo

echo "Finished $PROJECT_NAME"