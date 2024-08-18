const app = require('./src/app')

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Le serveur a demarré et écoute sur le port ${PORT}`); 
});