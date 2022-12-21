const members = [
    {   // 0
        fullName: "Paolo Borghi",
        role : "Founder & CEO",
        picture: "<img src='img/paolo.jpg'>"
    }
    ,
    {   // 1
        fullName: "Sara Pagos",
        role : "Programmatrice",
        picture: "<img src='img/sara.jpg'>"

    }
    ,
    {   //2
        fullName: "Arturo Ringhio",
        role : "Porta caffè",
        picture: "<img src='img/arturo.jpg'>"

    }
    ,
    {   // 3
        fullName: "Eleonora Stellina",
        role : "Segretaria bona",
        picture: "<img src='img/eleonora.jpg'>"

    }
    ,
    {   // 4
        fullName: "Gennaro Adriano",
        role : "Contadino Digitale",
        picture: "<img src='img/gennaro.jpg'>"

    }
    ,
    {   // 5
        fullName: "Tai Beer",
        role : "Traduttrice",
        picture: "<img src='img/tai.jpg'>"

    }
]
console.table(members)

const grid = document.getElementById("grid");
function createCell (target, completeName, assignment, profile){
    //elementi
    const col = document.createElement("div");
    const foto = document.createElement("div");
    const info = document.createElement("div");
    //classi
    col.classList.add("col" ,"alt-card");
    foto.classList.add("foto-wrapper");
    info.classList.add("member-info","text-center")

    foto.innerHTML = `${profile}`
    info.innerHTML = `<p>${assignment}</p>`
    info.innerHTML += `${completeName}`
    console.log(info)
    //appendo al col i figli 
    col.appendChild(foto);
    col.appendChild(info);
    //spedisco il tutto
    target.appendChild(col);
}


//meet the squad
for(let i = 0; i<= members.length; i++){
    createCell(grid, members[i].fullName,members[i].role,members[].picture);
}