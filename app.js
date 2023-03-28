const express = require('express'),
cors = require('cors');
const apiRoutes = require('./Server/routes/api.routes')

//setup env and db
require('dotenv').config();
require('./Server/config/db')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api' , apiRoutes);
const PORT = process.env.PORT || 3000;
  
app.listen(PORT, () => console.log(
`Example app listening at http://localhost:${PORT}`))

