const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const isProduction = environment === 'production';
const app = express();
const routes = require('./routes');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && 'Lax',
        httpOnly: true,
    },
})
);
app.use(routes);
if(!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false
}));


module.exports = app;
