
let outputTable = document.getElementById("output");


let loadingRow = document.createElement("tr");
loadingRow.id = "loading"; 
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
outputTable.appendChild(loadingRow);


let p1 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3); 
    setTimeout(() => {
        resolve({ name: "Promise 1", timeTaken: random });
    }, random * 1000);
});

let p2 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3);
    setTimeout(() => {
        resolve({ name: "Promise 2", timeTaken: random });
    }, random * 1000);
});

let p3 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3);
    setTimeout(() => {
        resolve({ name: "Promise 3", timeTaken: random });
    }, random * 1000);
});


Promise.all([p1, p2, p3]).then((results) => {
   
	loadingRow.remove();
    
    
    let totalTime = Math.max(...results.map(p => parseFloat(p.timeTaken))).toFixed(3);
    results.forEach(result => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${result.name}</td><td>${result.timeTaken}</td>`;
        outputTable.appendChild(row);
    });

    
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
    outputTable.appendChild(totalRow);
});