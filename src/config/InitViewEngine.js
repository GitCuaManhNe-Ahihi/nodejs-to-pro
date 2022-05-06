import expresss from 'express'
import path from 'path'

const InitViewengine = (app) => {
    expresss.static(path.join(__dirname, '../../public'))
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
}

export default InitViewengine;