import { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import Layout from '../../../components/layouts/Layout'
import personalityType from '../../../data/personalityType.json'

function ResultPage({result}){

    let testa = Math.round(result.indicatorA);
    let testb = Math.round(result.indicatorB);
    let testc = Math.round(result.indicatorC);
    let testd = Math.round(result.indicatorD);
    let teste = Math.round(result.indicatorE);

    let radRight = '0rem 2rem 2rem 0rem';
    let radLeft = '2rem 0rem 0rem 2rem'
    let posRight = 'margin-left: auto;';
    let posLeft = 'margin-right: auto;';

    let introvert, extrovert, sensing, intutition, thinking, feeling, judging, perceiving, turbulent, assertive;
    let posa, posb, posc, posd, pose;
    let rada, radb, radc, radd, rade;
    let persA, persB, persC, persD, persE;
    let a, b, c, d, e;
    let [ zero, setZero ] = useState(true)

    let personality, fifthIndikator;

    //coba2 erbin
    personality = 
    getHuruf("A", testa) +
    getHuruf("B", testb) +
    getHuruf("C", testc) +
    getHuruf("D", testd);

    fifthIndikator = getHuruf("E", teste);

    function getHuruf( indikator, result){
        if(result>0){
            switch (indikator) {
                case "A":
                    return "I";
                case "B":
                    return "N";
                case "C":
                    return "F";
                case "D":
                    return "P";
                case "E":
                    return "A";
                default:
                    break;
            }
        }else{
            switch (indikator) {
                case "A":
                    return "E";
                case "B":
                    return "S";
                case "C":
                    return "T";
                case "D":
                    return "J";
                case "E":
                    return "T";
                default:
                    break;
            }
        }
    }
    

    // Extrovert vs Introvert Check
    if(testa > 0){
        a = testa;
        introvert = a;
        extrovert = 100 - a;
        persA = 'introvert'
        posa = posRight;
        if(introvert === 100 || extrovert === 100){
            rada = '2rem';
        }else{
            rada = radRight;
        }
    }
    else if(testa < 0){
        a = 100 - (testa + 100)
        introvert = 100 - a;
        extrovert = a;
        persA = 'extrovert'
        posa = posLeft;
        if(introvert === 100 || extrovert === 100){
            rada = '2rem';
        }else{
            rada = radLeft;
        }
    }

    // Sensing vs Intutition Check
    if(testb > 0){
        b = testb;
        intutition = b;
        sensing = 100 - b;
        persB = 'intutition'
        posb = posRight;
        if(intutition === 100 || sensing === 100){
            radb = '2rem';
        }else{
            radb = radRight;
        }

    }
    else if(testb < 0){
        b = 100 - (testb + 100);
        intutition = 100 - b;
        sensing = b;
        persB = 'sensing'
        posb = posLeft;
        if(intutition === 100 || sensing === 100){
            radb = '2rem';
        }else{
            radb = radLeft;
        }
    }

    // Thinking vs Feeling Check
    if(testc > 0){
        c = testc;
        feeling = c;
        thinking = 100 - c;
        persC = 'feeling'
        posc = posRight;
        if(feeling === 100 || thinking === 100){
            radc = '2rem';
        }else{
            radc = radRight;
        }
    }
    else if(testc < 0){
        c = 100 - (testc + 100);
        feeling = 100 - c;
        thinking = c;
        persC = 'thinking'
        posc = posLeft;
        if(feeling === 100 || thinking === 100){
            radc = '2rem';
        }else{
            radc = radLeft;
        }
    }

    // Judging vs Perveiving Check
    if(testd > 0){
        d = testd;
        perceiving = d;
        judging = 100 - d;
        persD = 'perceiving'
        posd = posRight;
        if(perceiving === 100 || judging === 100){
            radd = '2rem';
        }else{
            radd = radRight;
        }
    }
    else if(testd < 0){
        d = 100 - (testd + 100);
        perceiving = 100 - d;
        judging = d;
        persD = 'judging'
        posd = posLeft;
        if(perceiving === 100 || judging === 100){
            radd = '2rem';
        }else{
            radd = radLeft;
        }
    }

    // Turbulent vs Assertive Check
    if(teste > 0){
        e = teste;
        assertive = e;
        turbulent = 100 - e;
        persE = 'assertive'
        pose = posRight;
        if(assertive === 100 || turbulent === 100){
            rade = '2rem';
        }else{
            rade = radRight;
        }
    }
    else if(teste < 0){
        e = 100 - (teste + 100);
        assertive = 100 - e;
        turbulent = e;
        persE = 'turbulent'
        pose = posLeft;
        if(assertive === 100 || turbulent === 100){
            rade = '2rem';
        }else{
            rade = radLeft;
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setZero(false)
        }, 200);
    })

    // Finding Personality Data
    let typeData = personalityType.find((data) => data.personality_type === personality)

    return(
        <Layout>
        <ResultPageStyled>
            <div className="page-header">
                <h1>{typeData.personality_name.split(":")[0] + "-" + fifthIndikator + " :" + typeData.personality_name.split(":")[1]}</h1>
                <p>{typeData.personality_desc}</p>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Ekstrovert</span>
                    <h2>Pemikiran</h2>
                    <span>Introvert</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{extrovert}%</div>
                    <InnerChart bgColor={'#ffcb11'} percent={a} setRadius={rada} pos={posa} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <div className="percentage perc-right">{introvert}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Sensorik</span>
                    <h2>Energi</h2>
                    <span>Intuitif</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{sensing}%</div>
                    <InnerChart bgColor={'#ffcb11'} percent={b} setRadius={radb} pos={posb} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <div className="percentage perc-right">{intutition}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Pemikir</span>
                    <h2>Sifat</h2>
                    <span>Perasa</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{thinking}%</div>
                    <InnerChart bgColor={'#ffcb11'} percent={c} setRadius={radc} pos={posc} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <div className="percentage perc-right">{feeling}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Penilai</span>
                    <h2>Tindakan</h2>
                    <span>Mempresepsikan</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{judging}%</div>
                    <InnerChart bgColor={'#ffcb11'} percent={d} setRadius={radd} pos={posd} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <div className="percentage perc-right">{perceiving}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Labil</span>
                    <h2>Kepribadian</h2>
                    <span>Tegas</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{turbulent}%</div>
                    <InnerChart bgColor={'#ffcb11'} percent={e} setRadius={rade} pos={pose} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <div className="percentage perc-right">{assertive}%</div>
                </div>
            </div>
        </ResultPageStyled>
        </Layout>
    )
}

const InnerChart = Styled.div`
    height:100%;
    ${(props) => props.pos}
    width:0%;
    width:${(props) => props.percent}%;
    border-radius: ${(props) => props.setRadius};
    background-color:${(props) => props.bgColor};
    display:flex;
    align-items:center;
    transition: all 1s ease-in-out;
`
const ResultPageStyled = Styled.div`
    padding-top:2.5rem;
    font-family:'Montserrat', sans-serif;
    padding-bottom:3rem;

    .zero-width{
        width:0% !important;
    }
    .page-header{
        padding: 0 48px;
        text-align: justify;
        line-height: 26px;
        margin-bottom: 3rem;

        h1{
            text-align:center;
        }
    }

    .percentage{
        background: #fff;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-size: .7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        position:absolute;
    }
    .perc-left{
        top: 4px;
        left: 5px;
    }
    .perc-right{
        top: 4px;
        right: 5px;
    }

    .chart{
        width: 50%;
        margin: 0 auto 2rem auto;

        .chart-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            position:relative;
            margin-bottom:1rem;

            h2{
                font-size:1.2rem;
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
            }
            span{
                font-size:.9rem;
            }
        }
        .percentage-body{
            height: 40px;
            width: 100%;
            background-color: #eee;
            border-radius: 20px;
            position:relative;
        }
    }
`

const mapStateToProps = (state) => ({
    result: state.test.result,
})

export default connect(mapStateToProps, null)(ResultPage)