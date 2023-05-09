import {PORT} from './config.js'
import app from './app.js'

app.listen(PORT || 3003)
console.log('server runnning on port '+ PORT)