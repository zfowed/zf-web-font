const fs = require('fs')
const path = require('path')
const glob = require('glob')
const lodash = require('lodash')
const rename = require('gulp-rename')
// const { Font } = require('fonteditor-core')
// const { Ttf, Woff, Eot } = require('modern-font')
// const opentype = require('opentype.js')
const Fontmin = require('fontmin')

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
}).map((file) => {
  return getPath(file)
})

const fontGroup = lodash.groupBy(fileList, file => {
  return path.basename(file, path.extname(file))
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
        let ttfFontFile = eotFontFile.replace(/\.eot$/, '.ttf')
        const fontmin = new Fontmin()
          .src(eotFontFile)
          .use(Fontmin.eot2ttf())
          .use(rename(path.basename(ttfFontFile)))
          .dest(path.dirname(ttfFontFile))
        await new Promise((resolve, reject) => {
          return fontmin.run(function (err, files) {
            if (err) return reject(err)
            return resolve(files)
          })
        })
      } else if (otfFontFile) {
        // otf to ttf
        let ttfFontFile = otfFontFile.replace(/\.otf$/, '.ttf')
        const fontmin = new Fontmin()
          .src(otfFontFile)
          .use(Fontmin.otf2ttf())
          .use(rename(path.basename(ttfFontFile)))
          .dest(path.dirname(ttfFontFile))
        await new Promise((resolve, reject) => {
          return fontmin.run(function (err, files) {
            if (err) return reject(err)
            return resolve(files)
          })
        })
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
