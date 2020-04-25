const Jumbotron = ()=>{
    return(
        <div className="jumbotron bg-light flex">
        <div className="container hero-container">
            <h2 className="title">Pahami Karakteristikmu<br/>Lebih Dalam</h2>
            <img src={require('../../img/hero-image.svg')} alt="some recruiter reviewing some applicant profile"/>
        </div>
        <style>{`
        .container{
            display:flex !important;
        }
        .hero-container{
            min-height:400px;
            align-items:center;
        }
        .hero-container img{
            margin-left:auto;
        }
        .title{
            font-size:3rem;
            font-weight:700;
            font-family: 'Montserrat';
            margin-bottom: 5.5rem;
        }
        
        `}</style>
    </div>
    )
}

export default Jumbotron;