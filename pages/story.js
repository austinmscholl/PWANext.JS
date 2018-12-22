import 'isomorphic-fetch'
import Layout from '../components/Layout'

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const req = await fetch(`https://api.hackerwebapp.com/item/${query.id}`)
        const story = await req.json()
        return { story }
    }
    render() {
        return <Layout title={ this.props.story.title }>
        <h1>{ this.props.story.title }</h1>

        { this.props.story.comments.map((comment) => (
            <div className="comment">
                <div dangerouslySetInnerHTML={ { __html: comment.content } }></div>
                <div>By { comment.user }</div>
            </div>
        )) }

        <style jsx>{`
            div {
                border: 1px solid black
            }
        `}
        </style>
        </Layout>
    }
}