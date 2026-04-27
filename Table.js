  // 2-d array of problems to fill out our table
  let arrProblems = [
    ["Crowdstrike", 2024, "$5.4B", "Faulty update to security software"],
    ["Facebook", 2020, "$90M", "Misconfiguration which cause the downtime"],
    ["Citibank", 2020, "$900M", "Mistaken transfer"],
    ["Mars Climate Orbiter", 1999, "$327M", "Metric verus imperial measurment mismatch"]
];

// Loop through the data and display it in the table
for (let i=0; i<arrProblems.length; i++){
    // create a new table row - tr tag
    let tr = document.createElement("tr");

    // inner/nested loop - we usually use j as the counter for our nested loop
    for (let j=0; j <arrProblems[i].length; j++){
        // create a new table data - td tag
        let td = document.createElement("td");
        // set the data as the textContent value of the td
        td.textContent = arrProblems[i][j];
        // add the td to the tr
        tr.appendChild(td);
    }
    // add the table row to the table
    document.getElementById("tblData").appendChild(tr);
    }