import React from 'react';

const Table = (props) => {
    const {applications} = props;
    console.log("applications", applications);
    
    if (applications) {
        return (
            < div className = "table" >
                <table>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) =>
                            <tr key={application._id}>
                                <td>{application.companyName}</td>
                                <td>{application.position}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default Table;