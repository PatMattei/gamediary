const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        const entry = this.props.entry
        return (
            <Layout>
                <ul class="index-list">
                    {entry.map((entry) => {
                        return(
                            <li class="diary-entry">
                                <a href={`/diary-entry/${entry._id}`}>
                                    <img src={entry.img} /> 
                                    <h2>{entry.name}</h2>
                                </a>                                
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;