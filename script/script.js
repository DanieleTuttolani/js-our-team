const members = [
    {   // 0
        fullName: "Paolo Borghi",
        role : "Founder & CEO",
        picture: "img/paolo.jpg>"
    }
    ,
    {   // 1
        fullName: "Sara Pagos",
        role : "Programmatrice",
        picture: "img/sara.jpg>"

    }
    ,
    {   //2
        fullName: "Arturo Ringhio",
        role : "Porta caffè",
        picture: "img/arturo.jpg>"

    }
    ,
    {   // 3
        fullName: "Eleonora Stellina",
        role : "Segretaria bona",
        picture: "img/eleonora.jpg>"

    }
    ,
    {   // 4
        fullName: "Gennaro Adriano",
        role : "Contadino Digitale",
        picture: "img/gennaro.jpg>"

    }
    ,
    {   // 5
        fullName: "Tai Beer",
        role : "Traduttrice",
        picture: "img/tai.jpg>"

    }
]
console.table(members)


const grid = document.getElementById("grid");

const createCell = (target, list , num,profile,fullName, asignment ) => {

    let prova = ""
//compongo l'html
    prova +=`
    <div class="col alt-card">
        <div id="fotoWrapper" class="foto-wrapper">
            <img src="${list[num][profile]}" alt="${list[num][fullName]}">
        </div>
        <div class="member-info text-center">
            <h4 id="memberName">${list[num][fullName]}</h4>
            <p id="memberRole">${list[num][asignment]}</p>
        </div>
    </div>`
    target.innerHTML=prova;

}



//meet the squad
for(let i = 0; i<= members.length; i++){
    createCell(grid, members[i],members[i].picture, members[i].fullName, members[i].role)
}