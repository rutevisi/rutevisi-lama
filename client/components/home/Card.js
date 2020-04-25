import React, { Component } from 'react'
import cardBackground from '../../img/card-background.svg'

class Card extends Component{
    constructor(props){
        super();

        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            color: props.cardColor
        }
    }

    render(){
        const { color, title, subtitle } = this.state;

        return(
            <div>
                <div className={`card-body card-${color}`}>
                    <div className="card-items">
                        <h3 className="card-title">{title}</h3>
                        <p className="subtitle">{subtitle}</p>
                        <p></p>
                    </div>
                </div>

                <style jsx>
                    {`
                    .card-light-blue{
                        background-color:#56CCF2;
                    }
                    .card-purple{
                        background-color:#9B51E0;
                    }
                    .card-orange{
                        background-color:#FFCB11;
                    }
                    .card-pink{
                        background-color:#FF7898;
                    }

                    .card-body{
                        display:flex;
                        flex-direction:column;
                        justify-content:flex-end;

                        position: relative;
                        width: 200px;
                        height: 250px;

                        box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px rgba(255, 255, 255, 0.33);
                        border-radius: 16px;

                        margin: 0 20px 0 0;
                    }
                    .card-body::before{
                        content:'';
                        display:block;
                        width:100%;
                        height:100%;
                        position:absolute;
                        top:0;
                        left:0;
                        opacity:50%;
                        background-image:url('${cardBackground}');
                    }
                    .card-title{
                        font-size:1.5rem;
                        margin:0 0 5px 0;
                        z-index:2;
                        position:relative;
                    }
                    .subtitle{
                        font-size:1rem;
                        z-index:2;
                        
                    }
                    `}
                </style>

            </div>
        )
    }
}

export default Card;