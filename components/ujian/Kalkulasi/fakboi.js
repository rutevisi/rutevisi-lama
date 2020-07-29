export const fakboiCalc = (terjawab) => {
    const maksNilaiPerSoal = 3;
    const jumlahSoal = 3;
    const maksPoin = jumlahSoal*maksNilaiPerSoal;
    const totalNilai = terjawab.reduce((acc, curr) => parseInt(acc) + parseInt(curr.jawab), 0);
    
    const getPercentage = totalNilai/maksPoin*100

    return { 
        percentage: getPercentage
    };
}