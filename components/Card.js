import React, {useState} from 'react';

const Card = (props) => {
    const [title, setTitle] = useState(props.title);
    const [subtitle, setSubtitle] = useState(props.subtitle);
    const [color, setColor] = useState(props.cardColor);
    const [emojicon, setEmojicon] = useState(props.emojicon);

    return (
        <div>
            <div className={`card-body card-${color}`}>
                <div className="div-emojicon">
                    <p className="emojicon">{emojicon}</p>
                </div>
                <div className="balancer-card"></div>
                <div className="card-item">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
            </div>

            <style jsx>
                {`
                .card-title{
                    overflow:hidden;
                    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
                    max-height:54px;
                    
                    margin:0;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 27px;
                    width: 120px;
                    word-break: break-word;
                    
                    color: #FFFFFF;
                }
                .card-subtitle{
                    overflow:hidden;
                    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
                    max-height: 32px;

                    margin:0;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 16px;
                    width: 120px;
                    
                    color: #FFFFFF;
                }
                .card-blue{
                    background-color:#2F80ED;
                }
                .card-purple{
                    background-color:#9B51E0;
                }
                .card-orange{
                    background-color:#FFCB11;
                }
                .card-body{
                    width: 153px;
                    height: 198px;
                    left: 604px;
                    top: 409px;

                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-direction: column;
                    margin-bottom: 32px;

                    box-shadow: 8px 8px 10px rgba(174, 174, 192, 0.38), -8px -8px 6px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.25);
                    border-radius: 16px;
                }
                .card-item{
                    overflow:hidden;
                    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-start;
                    flex-direction: column;
                    flex-wrap: wrap;
                    margin:16px;
                    width: 120px;
                    z-index:1;
                }
                .div-emojicon{
                    width: 153px;
                    height: 80px;

                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: absolute;
                }
                .emojicon{
                    font-size: 60px;
                    margin:8px;
                    position: relative;
                    z-index:0;
                }
                `}
            </style>

        </div>
    );
}

export default Card