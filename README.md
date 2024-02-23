# karaoke

## Tutorial
0. clone
1. npm init - y
2. open package.json
3. delete the main:... line from package.json
4. npm i parcel
5. npm i rimraf

6. 
'''
"build": "rimraf dist && parcel build './src/**/*.html' --no-cache"
"start": "rimraf dist && parcel serve './src/**/*.html' --no-cache --open",
"deploy": "gh-pages -d dist"
'''

7. add .gitignore with node_modules and dist folder as a content 