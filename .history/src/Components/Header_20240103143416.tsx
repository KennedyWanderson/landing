import { Container } from "@mui/material";

export default function Header(){
    return(

        <Container maxWidth="sm">
            <div className="flex flex-col items-center m-5">
                <ul className="">
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
                        <span>Home</span>
                    </a>
                </ul>
            </div>
        </Container>
    )
}