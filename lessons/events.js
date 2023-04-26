const Emitter = require('events')
const dotenv = require('dotenv')
dotenv.config()

const emitter = new Emitter()

const callback = (data, second, third) => { // здесь мы подписываемся на событие
    console.log('Вы прислали сообщение' + data)
    console.log('Ыторой аргумент' + second)
}

emitter.on('message', callback)

const MESSAGE = process.env.message || '' 

if(MESSAGE) { 
    emitter.emit('message', MESSAGE, 123) // это генерация события, а до этого описывалась его модель

    emitter.removeAllListeners()
    emitter.removeListener('message', callback)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}