const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cron = require('node-cron');
const axios = require('axios');
const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const pickem1Router = require('./routes/pickem1Routes');
const pickem2Router = require('./routes/pickem2Routes');
const pickem3Router = require('./routes/pickem3Routes');
const pickem4Router = require('./routes/pickem4Routes');
const pickem5Router = require('./routes/pickem5Routes');
const pickem6Router = require('./routes/pickem6Routes');
const pickem7Router = require('./routes/pickem7Routes');
const codeRouter = require('./routes/codeRoutes');
const contestRouter = require('./routes/contestRoutes');
const errController = require('./controllers/errController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '5mb' }));

app.use(cookieParser());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true,
  })
);

// Scheduled task
cron.schedule('0 6 * * *', async () => {
  try {
    console.log('Running Pickem 1...');

    // Replace with your actual request
    const response = await axios.patch(
      'https://sure-odds-be-482948f2bda5.herokuapp.com/api/v1/pickem1/getPicksForPredicter',
      {
        url: 'https://sure-odds-be-482948f2bda5.herokuapp.com',
      }
    );

    console.log('Request sent successfully:', response.data);
  } catch (error) {
    console.error('Error running scheduled task:', error.message);
  }
});

cron.schedule('0 6 * * *', async () => {
  try {
    console.log('Running Pickem 2...');

    // Replace with your actual request
    const response = await axios.patch(
      'https://sure-odds-be-482948f2bda5.herokuapp.com/api/v1/pickem2/getPicksForPredicter',
      {
        url: 'https://sure-odds-be-482948f2bda5.herokuapp.com',
      }
    );

    console.log('Request sent successfully:', response.data);
  } catch (error) {
    console.error('Error running scheduled task:', error.message);
  }
});

cron.schedule('0 6 * * *', async () => {
  try {
    console.log('Running Pickem 3...');

    // Replace with your actual request
    const response = await axios.patch(
      'https://sure-odds-be-482948f2bda5.herokuapp.com/api/v1/pickem3/getPicksForPredicter',
      {
        url: 'https://sure-odds-be-482948f2bda5.herokuapp.com',
      }
    );

    console.log('Request sent successfully:', response.data);
  } catch (error) {
    console.error('Error running scheduled task:', error.message);
  }
});

cron.schedule('0 6 * * *', async () => {
  try {
    console.log('Running Pickem 4...');

    // Replace with your actual request
    const response = await axios.patch(
      'https://sure-odds-be-482948f2bda5.herokuapp.com/api/v1/pickem4/getPicksForPredicter',
      {
        url: 'https://sure-odds-be-482948f2bda5.herokuapp.com',
      }
    );

    console.log('Request sent successfully:', response.data);
  } catch (error) {
    console.error('Error running scheduled task:', error.message);
  }
});

// Routes
app.use('/api/v1/admins', adminRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/pickem1', pickem1Router);
app.use('/api/v1/pickem2', pickem2Router);
app.use('/api/v1/pickem3', pickem3Router);
app.use('/api/v1/pickem4', pickem4Router);
app.use('/api/v1/pickem5', pickem5Router);
app.use('/api/v1/pickem6', pickem6Router);
app.use('/api/v1/pickem7', pickem7Router);
app.use('/api/v1/codes', codeRouter);
app.use('/api/v1/contests', contestRouter);

app.use(errController);

app.use('*', (req, res) => {
  res.status(404).send('route does not exist');
});

module.exports = app;
