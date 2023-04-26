const path = require('path')

console.log("Скдейка", path.join('first', 'second', 'third'))
console.log("перемешение", path.join(__dirname, '..', '..'))
console.log('получение абсолютного пути', path.resolve('first', 'second', 'third'))

const fullpath = path.resolve('first', 'second', 'third.js')
console.log(fullpath)
console.log('Парсинг пути', path.parse(fullpath)) // последний аргумент это название файла
console.log('разделитель в ОС', path.set)
console.log('проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))




const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL)
console.log(url)