"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MenuData } from '@/data/commondata';
import Image from 'next/image';
import logo from "../../assets/logo.svg"

const Menubar = () => {
  return (
    <div>
     <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo}></Image>
          </Navbar.Brand>
          <Nav className="ms-auto">
            {
              MenuData.map((item, i) =>(
                <Link href={item.link} key={i}>{item.title}</Link>
                ))
            }
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menubar
