import React, { useEffect, useState } from "react";
import { BehaviorSubject } from 'rxjs';

const API_SERVER = "http://localhost:8080";

//export const jwt = new BehaviorSubject(null);
export const clientes = new BehaviorSubject(null);

// export const getClientes = async () =>{
//         const response =fetch(`${API_SERVER}/cliente/clientes`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 //Authorization: `Bearer ${jwt.value}`,
//             },
//         });
//             return await response.json()
//         }

export const getClientes = (setData) =>
    fetch(`${API_SERVER}/cliente/clientes`, {
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:8080/cliente/clientes",
            //"Content-Type": "application/json",
            //Authorization: `Bearer ${jwt.value}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        });
        // .then((res) => {
        //     clientes.next(res);
        //     return res;
        // });

export const addToCart = (id) =>
    fetch(`${API_SERVER}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
        body: JSON.stringify({ id }),
    })
        .then((res) => res.json())
        .then(() => {
            getCart();
        });

export const clearCart = () =>
    fetch(`${API_SERVER}/cart`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
    })
        .then((res) => res.json())
        .then(() => {
            getCart();
        });

export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            jwt.next(data.access_token);
            getCart();
            return data.access_token;
        });
export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);
    useEffect(() => {
        setLoggedIn(!!jwt.value);
        return jwt.subscribe((c) => {
            setLoggedIn(!!jwt.value);
        });
    }, []);
    return loggedIn
}