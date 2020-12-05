export const mbtiCalc = (hasil, testEnd, testName, terjawab, resultObj) => {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;

    for(let i = 0; i < 55; i++){
        let indicator = terjawab[i].indikator;
        
        if (indicator == 'A') {
            A += terjawab[i].jawab;
        } 
         else if (indicator == 'B') {
            B += terjawab[i].jawab;
        }
         else if (indicator == 'C') {
            C += terjawab[i].jawab;
        }
         else if (indicator == 'D') {
            D += terjawab[i].jawab;
        }
         else if (indicator == 'E') {
            E += terjawab[i].jawab;
        }
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