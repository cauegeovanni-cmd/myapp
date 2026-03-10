import { Link } from "react-router"

function Header () {
    return(
        <header className="bg-blue-800 text-blue-200 text-center text-2xl p-4">
            <h1 className="text-gray-900 text-bold">Meu Site</h1>
           <Link to='/app' className="text-white-300 hover:text-gray-100 mx-4">Home</Link>
           <Link to='/sobre' className="text-white-300 hover:text-gray-100 mx-4">Sobre</Link>
           <Link to='/cont' className="text-white-300 hover:text-gray-100 mx-4">Contatos</Link>                       
        </header>

    )
}

export default Header