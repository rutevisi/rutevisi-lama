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
    }

    blockquote{
        font-style: italic;
        background: #f1f1f1;
        padding: 1rem;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 2rem;
        color:#666;

        p{
            text-align:center;
            margin: .5rem 0;
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