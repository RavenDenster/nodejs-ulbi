const os = require('os')
const cluster = require('cluster')

//console.log(os.platform()) // platform помогает получить текущую опереационную систему
//console.log(os.arch()) // архетектура процессора
//console.log(os.cpus().length) // описание ядра процессора

if(cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 1; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`)
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid = ${process.pid} запущен`)
    setInterval(() => {
        console.log(`Воркер с pid = ${process.pid} запущен`)
    }, 5000)
}

// const cpus = os.cpus()

// console.log(process.pid)

// while(true) {

// }
