const fs = require('fs')
const path = require('path')
const glob = require('glob')
const lodash = require('lodash')
// const { Font } = require('fonteditor-core')
// const { Ttf, Woff, Eot } = require('modern-font')
const opentype = require('opentype.js')

function posixPathJoin (...srcs) {
  if (path.sep !== path.posix.sep) {
    return path.posix.join(...srcs.map(src => {
      return path.posix.join(...src.split(path.sep))
    }))
  }
  return path.join(...srcs)
}

function getPath (...srcs) {
  if (path.sep !== path.posix.sep) {
    return path.posix.join(...srcs.map(src => {
      return path.posix.join(...src.split(path.sep))
    }))
  }
  return posixPathJoin(__dirname, ...srcs)
}

const fileList = glob.sync(getPath('fonts/*/*.@(ttf|eot|otf|woff|woff2)'), {
  ignore: [],
})

const fontGroup = lodash.groupBy(fileList, file => {
  return  path.basename(file, path.extname(file))
})


async function main () {
  for (const fileList of Object.values(fontGroup)) {
    const ttfFontFile = fileList.find(file => file.endsWith('.ttf'))
    const eotFontFile = fileList.find(file => file.endsWith('.eot'))
    const otfFontFile = fileList.find(file => file.endsWith('.otf'))
    const woffFontFile = fileList.find(file => file.endsWith('.woff'))
    const woff2FontFile = fileList.find(file => file.endsWith('.woff2'))

    if (!ttfFontFile) {
      if (eotFontFile) {
        // eot to ttf
      } else if (otfFontFile) {
        // otf to ttf
        console.log(otfFontFile);
        const font = await opentype.load(getPath(otfFontFile))
        const ttfBuffer = font.toArrayBuffer();
        fs.writeFileSync(getPath(otfFontFile).replace(/\.otf$/, '.ttf'), Buffer.from(ttfBuffer))
      } else if (woffFontFile) {
        // woff to ttf
      } else if (woff2FontFile) {
        // woff2 to ttf
      } 
    }

    if (!eotFontFile) {
      // ttf to eot
    }
    
    if (otfFontFile) {
      // ttf to otf
    }
    
    if (woffFontFile) {
      // ttf to woff
    }
    
    if (woff2FontFile) {
      // ttf to woff2
    } 
  }

}

main()

// console.log(group);
