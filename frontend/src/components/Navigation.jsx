import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <div>
                        <Link to='/home'>
                            Efelipa
                        </Link>
                    </div>
                    <div>
                        <a href="">Proyectos</a>
                        <a href="">Conóceme</a>
                        <a href="">Contácteme</a>
                    </div>
                </nav>
            </header>
        </>
    )
}