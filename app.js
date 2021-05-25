const path = require('path');
const exphbs = require('express-handlebars');
const controller = require('./controller');
// const helpers = require('./utils/helpers');
const express = require('express');
const session = require('express-session');
// const compression = require('compression');

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(compression());
// app.use(session(sess));

// // set handlebars as the default template engine
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controller);

// sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false })//force false prevents added data from being overwritten
//     .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}!`);
        });
    // });
