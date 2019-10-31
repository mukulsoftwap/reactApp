import React from 'react';
import { Link } from 'react-router-dom'

class Notfound extends React.Component {

    render(){
        return(
            <div>
                <h1>Page not found go to home page</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Notfound;