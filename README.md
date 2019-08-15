# amrHextoText
Simple converter text to hex and hex to text

## Installation

###  npm
```shell
npm i amrhextotext --save
```

###  git
```shell
git clone https://github.com/voltican/amrHextoText.git
```

##  Usage
```shell
const text = 'test text'
const hex = '54 65 78 74 6f 20 64 65 20 70 72 75 65 62 61'

const convert = require('amrhextotext')

//convert text to hex
let hexSample = convert.textToHex(text)
//Result: 54 65 78 74 6f 20 64 65 20 70 72 75 65 62 61

//Convert hex to text
let textSample = convert.hexToUtf8(hex)
//Result: test text
```

##License
This software is licensed under the MIT License.
