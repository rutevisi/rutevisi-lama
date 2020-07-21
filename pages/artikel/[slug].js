import LayoutPlain from '../../components/layouts/LayoutPlain'
import Styled from '@emotion/styled'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

function Article({data, content}){
    const frontmatter = data

    const getType = /\((.*?)\)/.exec(frontmatter.title)
    const getTitle = frontmatter.title.split("(")

    return(
        <LayoutPlain>
            <ArticleStyled>
                <div className="content-header">
                    <h1>{getTitle[0]}<br/><span className="personality-type">{getType[0]}</span></h1>
                </div>
                <div className="content-container">
                    <ReactMarkdown escapeHtml={true} source={content}/>
                    <div className="figure">
                        <h2>Advokat yang Mungkin Anda Kenal</h2>
                        <ul>
                            <li>
                                <img src="https://si.wsj.net/public/resources/images/B3-CX137_EDAY27_360RV_20190115172828.jpg" alt=""/>
                                <span>Martin Luther King</span>
                            </li>
                            <li>
                                <img src="https://africandevelopmentsuccesses.files.wordpress.com/2015/11/nelson-mandela.jpg?w=640" alt=""/>
                                <span>Nelson Mandela</span>
                            </li>
                            <li>
                                <img src="https://www.bread.org/sites/default/files/field/image/mother-teresa-smile.jpg" alt=""/>
                                <span>Mother Teresa</span>
                            </li>
                            <li>
                                <img src="https://media3.s-nbcnews.com/i/newscms/2019_22/1442275/nicole-kidman-kids-today-main-190530_0fb968f0b0102680890c9ebe662c4638.jpg" alt=""/>
                                <span>Nicole Kidman</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ArticleStyled>
        </LayoutPlain>
    )
}

const ArticleStyled = Styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top:65px;

    .content-header{
        width:100%;
        height:400px;
        background-color:#ffcb11;
        display:flex;
        justify-content:center;
        align-items:center;
        clip-path: polygon(0 0, 100% 0, 100% 30%, 100% 70%, 70% 100%, 54% 93%, 0% 70%, 0% 30%);

        h1{
            text-align:center;
            font-size: 3rem;
            color: #fff;
            width: 790px;
            transform: translateY(-14px);

            .personality-type{
                font-size: 2rem;
                color: #fff;
                font-style: italic;
            }
        }
    }

    .content-container{
        margin: 0 auto;
        padding: 65px 20% 3rem 20%;

        h2{
            font-size: 2rem;
            font-weight: 800;
        }

        .figure{
            ul{
                display:flex;
                justify-content: space-between;
                padding-left: 0;

                li{
                    border-radius:50%;
                    height:160px;
                    list-style:none;
                    width:160px;
                    display:flex;
                    flex-direction:column;

                    img{
                        width:100%;
                        border-radius:50%;
                        height:100%;
                        object-fit:cover;
                    }

                    span{
                        text-align:center;
                        margin-top:1rem;
                        font-style:italic;
                    }
                }
            }
        }
    }

    p{
        text-align: justify;
        line-height: 26px;
        margin-bottom: 2rem;
    }
`

Article.getInitialProps = async (context) => {
    const { slug } = context.query
    const content = await import(`../../article/${slug}.md`)
    const data = matter(content.default)

    return {
      ...data
    }
}

export default Article;