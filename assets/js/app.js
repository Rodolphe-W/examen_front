const btnRandom = document.getElementById('btnRandom');
const blague = document.getElementById('blague');
const reponse = document.getElementById('reponse');

const config = {
    urlApi: "https://examen-api.onrender.com/api/v1",
    //urlApi: "http://localhost:3000/api/v1",
};

btnRandom.addEventListener('click', async () => {
    reponse.classList.remove('fade-in-text');
    const req = await fetch(`${config.urlApi}/blague/random`);
    const randomRes = await req.json();
    const blagueRandom = randomRes.result;
    
    blague.innerText = `${blagueRandom.question}`;
    reponse.innerText = `Réponse : ${blagueRandom.answer}`;
    reponse.classList.add('fade-in-text');
});