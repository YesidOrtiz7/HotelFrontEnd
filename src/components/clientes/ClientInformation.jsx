import DeleteClient from "./eliminarCliente/DeleteClient";

export default function ClientInformation(props) {
    const cliente=props.cliente;
    return (
        <tr key={cliente.idCliente}>
            <td>{cliente.documentoCliente}</td>
            <td>{cliente.primerNombreCliente}</td>
            <td>{cliente.segundoNombreCliente}</td>
            <td>{cliente.primerApellidoCliente}</td>
            <td>{cliente.segundoApellidoCliente}</td>
            <td>{cliente.celularCliente}</td>
            <td><DeleteClient idClient={cliente.idCliente} /></td>
            <td>
                <form action={`/cliente/${cliente.idCliente}`} method="get">
                    <input type="submit" value="Actualizar" />
                </form>
            </td>
        </tr>
    );
}