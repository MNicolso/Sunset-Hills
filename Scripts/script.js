document.getElementById("button").addEventListener('click', () => {
    let buildingOneInput = parseInt(document.getElementById("buildingOneInput").value);
    let buildingTwoInput = parseInt(document.getElementById("buildingTwoInput").value);
    let buildingThreeInput = parseInt(document.getElementById("buildingThreeInput").value);
    let buildingFourInput = parseInt(document.getElementById("buildingFourInput").value);
    let buildingFiveInput = parseInt(document.getElementById("buildingFiveInput").value);
    let buildingSixInput = parseInt(document.getElementById("buildingSixInput").value);
    let buildingArray = [buildingOneInput, buildingTwoInput, buildingThreeInput, buildingFourInput, buildingFiveInput, buildingSixInput];


   
    let buildingCount = 1;
    let sunBuildingArray = [];

    let preIndex = buildingArray[0];
    sunBuildingArray.push(preIndex);

//   for (let i = buildingArray.Length; i > buildingArray[0]; i--){
//       if (buildingArray[i] > buildingArray[6] && buildingArray[i] > buildingArray[5])
//}

    for (let i = 1; i < buildingArray.length; i++) {
        if (buildingArray[i]> preIndex) {
            buildingCount++;
            sunBuildingArray.push(buildingArray[i]);
            preIndex = buildingArray[i];
        }

    }


    document.getElementById('printBox').innerHTML = `Levels of buildings in sun:${sunBuildingArray}`;
    document.getElementById('statusBox').innerHTML = `Total buildings in sun:${ buildingCount}`;

})