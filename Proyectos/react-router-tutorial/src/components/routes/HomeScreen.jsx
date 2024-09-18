import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

    const { usuario } = useContext( UserContext );

  return (
    <>
        <div className="container mt-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Email</th>
                    <th scope="col">Social Media</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{ usuario.nombre }</td>
                    <td>{ usuario.technology }</td>
                    <td>{ usuario.email }</td>
                    <td>{ usuario.social }</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </>
  )
}
