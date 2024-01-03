import { Container } from "@mui/material";

export default function Header(){
    return(

        <Container maxWidth="sm">
            <div className="flex flex-col items-center m-5">
                <ul className="">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                </ul>
            </div>
        </Container>
    )
}