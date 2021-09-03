import app from './app';
import { startDatabase } from './services/database';

const port = process.env.PORT || 5000;

/* Start database and load models */
startDatabase().catch((err) => console.error(err));
import('./models/User');
/* End section of database */

/* Start passport service */
import('./services/passport');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
