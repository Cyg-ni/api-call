const apiKey = '0e5ad6693d134fb1a4f1b82ac1cdbb58aac45d90244847af9d9bf643e4bd9f7e';
const apiUrl = 'https://xivapi.com/';
async function getText() {
    let x = await fetch(apiUrl);
    let y = await x.json();
    console.log(x);
  }