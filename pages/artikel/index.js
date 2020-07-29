import Styled from '@emotion/styled'
import LayoutFull from '../../components/layouts/LayoutFull'
import matter from 'gray-matter'

function Artikel({posts}){

    return(
        <LayoutFull>
            <ArtikelStyled>
            <ul className="grid-wrap">
                {
                    posts.map((artikel, index) => {
                        return(
                            <li key={index}>
                                <img src={artikel.frontmatter.image} alt=""/>
                                <div className="post-detail">
                                    <h2>{artikel.frontmatter.title}</h2>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            </ArtikelStyled>
        </LayoutFull>
    )
}

const ArtikelStyled = Styled.div`
    padding:3rem 48px;

    .grid-wrap{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
        grid-gap: 1rem 2.5rem;
        list-style: none;    

        li{
            height:348px;
            margin-bottom:1.5rem;
            border-radius:1rem;
            cursor:pointer;

            &:hover{
                filter:contrast(1.1);

                h2{
                    color:#000;
                }
            }

            h2{
                font-size: 1.4rem;
                font-weight: 800;
                margin-top: .25rem;
                color: #8e8e8e;
                text-align:Center;
            }

            img{
                width:100%;
                height:80%;
                object-fit:cover;
                margin-bottom:.25rem;
                border-radius:1rem;
            }
        }
    }
}
`

Artikel.getInitialProps = async (context)=> {
    const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
        const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
        const value = values[index]
        const document = matter(value.default)

        return {
            frontmatter: document.data,
            markdownBody: document.content,
            slug,
        }
    })
    return data
    })(require.context('../../article', true, /\.md$/))

    return {
        posts: posts
    }
}

export default Artikel;