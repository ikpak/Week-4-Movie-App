import React from 'react'
import {Nav, Navbar, Form, FormControl} from 'react-bootstrap'

export default function Navigation(props) {
    let keyword = ''

    const searchByKeyword = (e) => {
        e.preventDefault()

        props.searchTheKeyword(keyword)
    }

    const onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault()
            searchByKeyword(e)
        }
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <i class="fas fa-film fa-2x"></i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav>
                <Form inline onKeyDown={(e) => onEnterPress(e)}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => keyword = e.target.value} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
