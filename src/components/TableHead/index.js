import React from "react";

function TableHead(props){
    return (
        <tr>
            <th>
                <button onClick={() => props.handleNameSort("first")}>Sort By First Name</button>
                <br></br>
                <input placeholder="Filter By First Name" onChange={e=> props.handleFirstNameFilter(e.target.value)}></input>
            </th>
            <th>
                <button onClick={() => props.handleNameSort("last")}>Sort By Last Name</button>
                <br></br>
                <input placeholder="Filter By Last Name" onChange={e=> props.handleLastNameFilter(e.target.value)}></input>
            </th>
            <th>
                <button onClick={() => props.handleUsernameSort("username")}>Sort By Username</button>
                <br></br>
                <input placeholder="Filter By Username" onChange={e=> props.handleUsernameFilter(e.target.value)}></input>
            </th>
            <th>
                <button onClick={() => props.handleFieldSort("email")}>Sort By Email</button>
                <br></br>
                <input placeholder="Filter By Email" onChange={e=> props.handleEmailFilter(e.target.value)}></input>
            </th>
            <th>
                <button onClick={() => props.handleFieldSort("phone")}>Sort By Phone</button>
                <br></br>
                <input placeholder="Filter by Last Name" onChange={e=> props.handlePhoneFilter(e.target.value)}></input>
            </th>
        </tr>
    )
}

export default TableHead