// useEffect(()=>{getClientes(setData)},[]);
/*cuando se pasa un array vacio como segundo argumento se
ejecutara una sola vez cuando se monte el componente*/

import { useState, useEffect } from "react";
export function getClients(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(
        () => {
            const abortController = new AbortController();
            setController(abortController);

            setLoading(true);
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
                .catch((error) => {
                    if (error.name === "AbortError") {
                        console.log("Consulta cancelada");
                    } else {
                        setError(error);
                    }
                })
                .finally(() => setLoading(false));
            return () => abortController.abort();
        }
        , []);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Consulta cancelada");
        }
    }


    return { data, loading, error, handleCancelRequest };
}

export function setClients(url,client) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(
        () => {
            const abortController = new AbortController();
            setController(abortController);

            setLoading(true);
            fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        //Authorization: `Bearer ${jwt.value}`,
                    },
                    body: JSON.stringify(client),
                }

            )
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
                .catch((error) => {
                    if (error.name === "AbortError") {
                        console.log("Consulta cancelada");
                    } else {
                        setError(error);
                    }
                })
                .finally(() => setLoading(false));
            return () => abortController.abort();
        }
        , []);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Consulta cancelada");
        }
    }


    return { data, loading, error, handleCancelRequest };
}
