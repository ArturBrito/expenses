//import 'module-alias/register'

import env from './config/env';
import { setupApp } from './config/app'

setupApp()
    .then(app => {
        app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
    })
    .catch(err => {
        console.log(err)
    })
