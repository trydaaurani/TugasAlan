import React from 'react';
import './Navigation.css';
import Cards from './menu/Cards';
import { Button } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
  import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';


function Navigation() {
    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/tambahMenu");
    }
    return (
        <nav className="Navigation">
            <div className="navbar-container" >
                <Link to='/'>Alan Resto</Link>
            </div>
            <div className="tabs">
            <Tabs>
                <TabList>
                    <Tab>Food</Tab>
                    <Tab>Transaksi</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <h2>Tambahkan Menu yang Ada di Resto</h2>
                    <Button colorScheme="blue" className="btn" onClick={handleRoute}>+ Tambah Makanan</Button>
                    <Table variant="simple" className="table">
                    <Thead>
                        <Tr>
                        <Th>#</Th>
                        <Th>Nama</Th>
                        <Th>Foto</Th>
                        <Th>Harga</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>1</Td>
                        <Td>Bakso</Td>
                        <Td>Gambar</Td>
                        <Td>5000</Td>
                        </Tr>
                        <Tr>
                        <Td>2</Td>
                        <Td>Cumi Tepung</Td>
                        <Td>Gorengan</Td>
                        <Td>35000</Td>
                        </Tr>
                        <Tr>
                        <Td>3</Td>
                        <Td>Gorengan</Td>
                        <Td><img src="images/cumiBakar.jpg"/></Td>
                        <Td>10000</Td>
                        </Tr>
                    </Tbody>
                    
                    </Table>
                    </TabPanel>
                    <TabPanel>
                   <Cards/>
                    </TabPanel>
                    
                </TabPanels>
            </Tabs>
            </div>
        </nav>

    )
}

export default Navigation
