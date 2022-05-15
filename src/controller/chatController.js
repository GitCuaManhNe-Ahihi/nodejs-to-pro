import path from 'path'

let homechat = (req,res) =>{
    return res.status(200).sendFile(basedir+'/src/views/chat.html')
}

module.exports = {
    homechat
}