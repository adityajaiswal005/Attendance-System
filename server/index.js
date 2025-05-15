const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/attendance_system';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});