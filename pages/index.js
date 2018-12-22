import 'isomorphic-fetch';
import Layout from '../components/Layout';
import Link from 'next/link'


export default class extends React.Component { 

    static async getInitialProps() {
        
        const req = await fetch(`https://api.hackerwebapp.com/news`)
        const stories = await req.json()
        return { stories }
    }

    render() {
    return <Layout title="Latest News">
        <div className="title">
            <h1>Hacker News</h1>
        </div>

        <h2>Latest News</h2>

        { this.props.stories.map((story) => (
            <div className="stories">
                <h3><a href={ story.url }>{ story.title }</a></h3>
                <p><Link prefetch href={ `/story?id=${story.id}` }><a>{ story.comments_count } comments
                    </a></Link></p>
            </div>
        )) }

        <footer>Copyright 2018</footer>

        <style jsx>{`
        .title {
            background: orange;
        }
        h1 {
            font-family: system-ui;
            font-weight: 500;
            font-size: 4em;
            color: #333;
        }
        h2 {
            font-family: system-ui;
            
        }
        `}</style>
    </Layout>
  }
 }