import { format } from 'date-fns'
import path from 'path'
const rfs = require('rotating-file-stream')

const nameFile = format(new Date(), 'yyyy-MM-dd')+'Morgan.log'

export const LogMorgan = rfs.createStream(nameFile, {
    interval: '1d', // rotate daily
    path: path.join(__dirname, '../logs')
})

const nameError = format(new Date(), 'yyyy-MM-dd')+'Error.log'
const LogError = rfs.createStream(nameError, {
    interval: '1d', // rotate daily
    path: path.join(__dirname, '../logs')
})
export const  LogEvent = (status,message,method) => {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')} ${status} ${message} ${method}`)
    const content = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')} - ${status} - ${message} - ${method}`
    LogError.write(content)
}
