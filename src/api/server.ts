//import 'module-alias/register'

import ModuleAlias from 'module-alias';
ModuleAlias.addAliases({
  '@': __dirname + '/../',
});

import env from './config/env';
import { setupApp } from './config/app';

const PORT = process.env.PORT || env.port
setupApp()
  .then((app) => {
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
