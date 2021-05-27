const express = require('express');
const { ContextConsumer } = require('react-is');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);


//default for any other request(not found)
app.use((req, res) => {
    res.status(404).end();
})


db.connect(err => {
    if (err) throw error;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});