console.log("Martedì");

/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

const list = document.getElementById("list");

const team = [
  (player1 = {
    nome: "Wayne",
    ruolo: "Founder & CEO",
    foto: "./img/wayne-barnett-founder-ceo.jpg",
  }),
  (player2 = {
    nome: "Angela",
    ruolo: "Chief Editor",
    foto: "./img/angela-caroll-chief-editor.jpg",
  }),
  (player3 = {
    nome: "Walter",
    ruolo: "Office Manager",
    foto: "./img/walter-gordon-office-manager.jpg",
  }),
  (player4 = {
    nome: "Angela",
    ruolo: "Social Media Manager",
    foto: "./img/angela-lopez-social-media-manager.jpg",
  }),
  (player5 = {
    nome: "Scott",
    ruolo: "Developer",
    foto: "./img/scott-estrada-developer.jpg",
  }),
  (player6 = {
    nome: "Barbare",
    ruolo: "Graphic Designer",
    foto: "./img/barbara-ramos-graphic-designer.jpg",
  }),
];

console.log(team);
console.log(team[0].nome);
console.log(team[4].ruolo);
console.log(team[2].foto);

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
