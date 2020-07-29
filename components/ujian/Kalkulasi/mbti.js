export const mbtiCalc = (hasil, testEnd, testName, terjawab, resultObj) => {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;

    for(let i = 0; i < 55; i++){
        let indicator = terjawab[i].indikator;

        switch (indicator) {
            case 'A':
                A += terjawab[i].jawab;
                break;
            case 'B':
                B += terjawab[i].jawab;
                break;
            case 'C':
                C += terjawab[i].jawab;
                break;
            case 'D':
                D += terjawab[i].jawab;
                break;
            case 'E':
                E += terjawab[i].jawab;
                break;
            default:
                break;
        }

        function toPersen(indikatorVal){
            const jumlahSoal = 22
            const indicatorTotalValue = jumlahSoal * 2;
            let indicatorValue;
            let cap;
            let persen;

            if(indikatorVal > 0){
                // Introvert Check
                indicatorValue = indikatorVal + jumlahSoal;
                persen = (indicatorValue/indicatorTotalValue)*100;
            }else{
                //Extrovert check
                indicatorValue = Math.abs(indikatorVal - jumlahSoal);
                persen = -(indicatorValue/indicatorTotalValue)*100;
            }

            
            return persen;
        }

        resultObj = {
            indicatorA: toPersen(A),
            indicatorB: toPersen(B),
            indicatorC: toPersen(C),
            indicatorD: toPersen(D),
            indicatorE: toPersen(E),
        }

        return resultObj;
    
    }
}