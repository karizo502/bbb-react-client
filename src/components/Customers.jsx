import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from "Components/NavBar";

const customers = [1, 2, 3, 4, 5]
const CustomerList = () => <div><NavBar />
                { customers.map((c) => {
                    return <Link key={ c }
                        to={ `/customers/${ c }` } >
                        Customer: { c }</Link>
                }) }</div>
const CustomerProfile = ({ match }) => <div><NavBar />
    <p>ID: { match.params.id }</p>
</div>

export { CustomerList, CustomerProfile }