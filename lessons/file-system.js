const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

// console.log('START')


//! для создания папки (синхронно/a)


// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return 
//     } 
//     console.log('Папка создана')

// }) // mkdirSync позволяет создать папку

// console.log('END')


//! для удаления папки (синхронно/a)


// fs.rmdir(path.resolve(__dirname, 'dir'), (err) =>  {
//     if(err) {
//         throw err
//     }
// })


//! для создания и записи чего-то в файл папки (синхронно/a)


// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5qwerty 900-1', (err) => { // данные будут перезатираться
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Добавление в конец', (err) => { // данные не будут перезатираться, а будут добавляться
//         if (err) {
//             throw err
//         }
//         console.log('Файл записан')
//     }) // мы добавляем одну функцию в другую, чтобы гарантировать, что одна выполнится раньше другой
// })


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendfileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

//! для чтения

const readfileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

//! для удаления

const removefileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
// .then(() => appendfileAsync(path.resolve(__dirname, 'test.txt'), '123'))
// .then(() => appendfileAsync(path.resolve(__dirname, 'test.txt'), '456'))
// .then(() => appendfileAsync(path.resolve(__dirname, 'test.txt'), '789'))
// .then(() => readfileAsync(path.resolve(__dirname, 'test.txt')))
// .then(data => console.log(data))
// .catch(err => console.log(err))

// removefileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file'))


//! решение задачи


//const text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname, 'text.txt'), process.env.TEXT)
    .then(() => readfileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
    .then(() => readfileAsync(path.resolve(__dirname, 'text.txt')))
    .then(() => removefileAsync(path.resolve(__dirname, 'text.txt')))
