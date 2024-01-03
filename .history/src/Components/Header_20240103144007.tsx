import { Container } from "@mui/material";

export default function Header(){
    return(

        <Container maxWidth="sm">
            <div className="flex flex-col items-center m-5 justify-between">
                <ul className="tracking-wider">
                    <a href="#">
                        <span>Home</span>
                    </a>
                    <a href="#">
                        <span>Sobre</span>
                    </a>
                    <a href="#">
                        <span>Projetos</span>
                    </a>
                    <a href="#">
                        <span>Contato</span>
                    </a>
                </ul>
            </div>
        </Container>
    )
}