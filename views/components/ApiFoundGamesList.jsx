const React = require('react');


class ApiFoundGamesList extends React.Component {
    render() {
        const apiCall = this.props.apiCall.results;
        console.log(apiCall);
        return (
            <div className="found-games-list">
                {apiCall.map((game) => {
                    return (
                        <div>
                            <p>{game.name}</p>
                            <img src={game.image.original_url} style={{ width: 200 }} />
                        </div>
                    )
                })}
            </div> 
        )
    }
}


module.exports = ApiFoundGamesList;