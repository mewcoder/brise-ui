const fs = require('fs')
const path = require('path')
fs.readdir(process.cwd(), (err, files) => {
    files.forEach(item => {
        fs.rename(
            path.join(process.cwd(), item),
            path.join(process.cwd(), item+'x'),
            err => {
                if (err) throw err
                console.log(`${item} & prefix_${item}`)
            }
        )
    })
})