const React = require('react');

class ApiFoundGamesList extends React.Component {
    render() {
        const apiCall = this.props.apiCall;
        return (
            <div className="found-games-list">
                {apiCall.error}
                {/*On key up in search box:*/}
                        {/*return names of games in API in ApiFoundGamesList*/}

                {/*On click of returned game:*/}
                    {/*add game's name to gameName field*/}
                    {/*add img src to gameImgSrc field*/}

            </div> 
        )
    }
}


module.exports = ApiFoundGamesList;