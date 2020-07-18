import React, {useState} from 'react';


const Card = (props) => {
    const [title, setTitle] = useState(props.title);
    const [subtitle, setSubtitle] = useState(props.subtitle);
    const [emojicon, setEmojicon] = useState(props.emojicon);
    const [color, setColor] = useState(()=>{
        switch (props.cardColor) {
            case "orange": return "#FFCB11";
            case "purple": return "#9B51E0";            
            case "blue": return "#2F80ED";        
            default: return "#FFCB11";
        }

    });
    
    function moveTop() {
        return title.length < 8 ? "movebanyak" : "movedikit";
    }

    return (
        <div>
            <div className={`card-body`}>
                <div className="overflow-hidden">
                    <div className="div-emojicon">
                        <p className="emojicon">{emojicon}</p>
                    </div>
                    <div className="div-emojiback">
                        <p className="emojiback">{emojicon}</p>
                    </div>
                    <div className="div-btnterpilih">
                        <button className="btn btn-terpilih">MULAI</button>
                    </div>

                    <div className="balancer-card"></div>
                    <div className={`card-item ${moveTop()}`}>
                        <h3 className="card-title">{title}</h3>
                        <p className="card-subtitle">{subtitle}</p>
                    </div>
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
            .div-btnterpilih{
                width: 153px;
                height: 68px;

                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                bottom: 0;
                filter: opacity(0);
                transition: 1s;
            }
            .btn-terpilih{
                width: 122px;
                border-radius: 8px;
                color: ${color};
                background-color: #fff;

                font-family: Montserrat;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
            }
            .card-body{
                width: 153px;
                height: 198px;
                background-color: ${color};
                
                margin-bottom: 32px;
                position: relative;
                
                box-shadow: 8px 8px 10px rgba(174, 174, 192, 0.38), -8px -8px 6px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.25);
                border-radius: 16px;
            }
            
            .card-body:hover .div-emojicon{
                filter: opacity(0);
            }
            .card-body:hover .div-btnterpilih{
                filter: opacity(1);
            }
            .card-body:hover .div-emojiback{
                filter: saturate(0.5) opacity(0.7) brightness(0.6);
            }
            .card-body:hover .movedikit{
                transform: translateY(-74px);
            }
            .card-body:hover .movebanyak{
                transform: translateY(-102px);
            }

            .overflow-hidden{
                -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
                overflow: hidden;
                width: 153px;
                height: 198px;
                
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
                
                border-radius: 16px;
                position: absolute;
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
                z-index:2;
                transition:0.5s;
            }
            .div-emojicon{
                width: 153px;
                height: 80px;
                
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: absolute;
                transition: 0.5s;
            }
            .emojicon{
                font-size: 60px;
                margin:8px;
                position: relative;
                z-index:1;
            }
            .div-emojiback{
                width: 153px;
                height: 80px;

                display: flex;
                justif-content: flex-start;
                align-items: center;
                position: absolute;
                bottom: 28px;
                filter: saturate(0) opacity(0.08) brightness(0);
                transition: 1s;
                transition-delay: 0.2s;
            }
            .emojiback{
                font-size: 218px;
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