import dva from 'dva';
import createLoading from 'dva-loading';
// import './index.html';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/users'));
app.model(require('./models/news'));
app.model(require('./models/details'));
app.model(require('./models/loginRegist'));
app.model(require('./models/collection'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
