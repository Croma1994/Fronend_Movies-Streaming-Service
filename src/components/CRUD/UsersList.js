import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersList extends Component {
    
    render(){
        const users = [{userId: 1, username: "Yasser", enabled: false, email: "Yasser@gmail.com"}]

        return (
            <React.Fragment>
                <Link to={'/profile'} className="btn btn-dark mb-3">
                    Go Back <i className="fas fa-chevron-right"></i> 
                </Link>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Enabled</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => 
                            <tr>
                                <th scope="row">{user.userId}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.enabled ? "Yes" : "No"}</td>
                                <td>
                                    <button className="btn btn-danger mr-1"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    <button className="btn btn-info mr-1"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <button className="btn btn-warning mr-1"><i className="fa fa-ban" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default UsersList;