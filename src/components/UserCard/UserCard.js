import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserCard = ({ user }) => {
    return (
        <Card style={{ width: '20rem',marginTop:"20px" }}>
            <Card.Body>
                <span className="profile">{user.username[0]}</span>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </Card.Text>
                <Link to={`/${user.id}`}><Button variant="primary">See details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default UserCard
