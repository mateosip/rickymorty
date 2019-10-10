# RickyMorty

This program is useful to get information from the serie "RickyMorty"

## Install all packages:
```
npm install
```
#### Packages to install:
```
request: "^2.88.0",
yargs: "^14.0.0"
```

## Functions:
These are the instructions a user can do in this program:
- Look for all the characters(1st page of Api):
```
npm start -- list
```
- Look for all the characters(a number of page is needed to look in it):
```
npm start -- list --pag=x
```
- Look for all the alive characters(1st of Api):
```
npm start -- listAlives
```
- Look for all the alive characters(a number of page is needed to look in it):
```
npm start -- listAlives --pag=x
```
- Look for all the dead characters(1st of Api):
```
npm start -- listDead
```
- Look for all the dead characters(a number of page is needed to look in it):
```
npm start -- listDead --pag=x
```
- Consult data from a determinated character:
```
npm start -- searchID --id=x 
```
- Search characters by name:
```
npm start -- getURL --name="x"
```
