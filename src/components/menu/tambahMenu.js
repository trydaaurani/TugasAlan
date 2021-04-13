import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Button,
  } from "@chakra-ui/react"
import {Center, Heading, Input} from '@chakra-ui/react';
import './tambahMenu.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const tambahMenu=({name,harga,handleChange, handleSubmit})=> {
        return (
            <div className="tambahMenu">
                    <Heading marginBottom="10px">Tambah Menu Makanan</Heading>
                    <div className="formMenu">
                    <stack>
                    
                    <FormControl id="nama" onSubmit={handleSubmit} >
                        <FormLabel>Nama Makanan</FormLabel>
                        <Input type="text" value={name} onChange={handleChange}/>
                    </FormControl>

                    <FormControl>   
                        <FormLabel>Foto</FormLabel>
                        <Input type="file"/>
                    </FormControl>

                    <FormControl id="harga">
                        <FormLabel>Harga</FormLabel>
                        <Input type="number" value={harga} onChange={handleChange}/>
                    </FormControl>
                    </stack>
                    <Center>
                    <Button type="submit" colorScheme="blue" className="btn2">Tambah</Button>
                    </Center>
                </div>
            </div>
        )
    }
export default tambahMenu
