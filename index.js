// servidor e rotas
const express = require('express');
const petshop = require('./petshop');

const app = express();

app.use(express.json());

app.get('/pets', (req,res) =>{
    return res.send(petshop.listarPets());
})

app.post('/pets', (req, res) => {
    const {nome, tipo, idade, raca, peso, tutor, contato} = req.body;

        const pet = {
            nome, 
            tipo, 
            idade, 
            raca, 
            peso, 
            tutor, 
            contato, 
            vacinado: false,
            servicos: []
        };

        petshop.adicionarPet(pet);
        return res.json(pet);
});

app.get('/pets/:nome', (request, response) => {
    const { nome } = request.params;
    const findPet = petshop.buscarPet(nome);

    return response.json(findPet);
});
        
app.listen(3000, () => {
    console.log('Servidor rodando!');
});



// console.log(petshop.listarPets());
module.exports = app;