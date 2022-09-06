console.log("Martedì");

/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

const container = document.querySelector(".container");
const title = document.getElementById("title");

const team = [
  {
    nome: "Wayne",
    ruolo: "Founder & CEO",
    foto: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela",
    ruolo: "Chief Editor",
    foto: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter",
    ruolo: "Office Manager",
    foto: "./img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela",
    ruolo: "Social Media Manager",
    foto: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott",
    ruolo: "Developer",
    foto: "./img/scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara",
    ruolo: "Graphic Designer",
    foto: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

console.log(team);
console.log(team[0].nome);
console.log(team[4].ruolo);
console.log(team[2].foto);

///////////////////CICLO FOR ////////////////

for (let i = 0; i < team.length; i++) {
  console.log(team[i].ruolo);
  title.innerHTML = "<h1>Meet our team!!!</h1>";
  container.innerHTML += `<div class="card">
                    <h3>${team[i].nome}, ${team[i].ruolo}</h3> <img class="pictures" src="${team[i].foto}"> 
    </div>`;
}

/////////////// CICLO FOR IN /////////////////

for (let i in team[0]) {
  console.log(i);
}

/*
list.innerHTML += `<li>
                ${team[0].nome}
                ${team[0].ruolo}
                ${team[0].foto}
</li>`;
list.innerHTML += `<li>
                ${team[1].nome}
                ${team[1].ruolo}
                ${team[1].foto}
</li>`;
list.innerHTML += `<li>
                ${team[2].nome}
                ${team[2].ruolo}
                ${team[2].foto}
</li>`;
list.innerHTML += `<li>
                ${team[3].nome}
                ${team[3].ruolo}
                ${team[3].foto}
</li>`;
list.innerHTML += `<li>
                ${team[4].nome}
                ${team[4].ruolo}
                ${team[4].foto}
</li>`;
list.innerHTML += `<li>
                ${team[5].nome}
                ${team[5].ruolo}
                ${team[5].foto}
</li>`;
*/
