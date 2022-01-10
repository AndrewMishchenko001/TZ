const refs = {
    tableTh: document.querySelector(".table-th"),
    tbodyTr: document.querySelector(".tbody-tr"),
}

const tableHead = async ()=> {
    try {
        await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            
            .then(data=> Object.keys(data[0]).map(item=>refs.tableTh.insertAdjacentHTML('beforeend',`<th scope="col">${item}</th>`)
            ))
            ;
           ;
        
    } catch (error) {
        console.log(error)
    }
}
// const tableBody = async() => {
//     const page = 5;
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(response => response.json())
//             .then(data=> {
//                 for (let i = 0; i < 5; i++) {
//                     Object.values(data[i]).map(item=>refs.tbodyTr.insertAdjacentHTML('beforeend',`<td>${item}</td>`))
//                 }
//             })
        
//     } catch (error) {
//         console.log(error)
//     }
// }
tableHead()
