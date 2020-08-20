const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Page</h1>
            </Layout>
        )
    }
}

module.exports = Index;