import { Container } from "@mui/material";
import Header from "./Header";

export default function Content(){
    return(
        <Container>
            <Header />
            <div className="flex flex-col items-center">
                <Ima src="../../public/me.jpeg" alt="" />
            </div>

        </Container>
    )
}