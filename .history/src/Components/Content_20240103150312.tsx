import { Container } from "@mui/material";
import Header from "./Header";
import Image from "next/image";

export default function Content(){
    return(
        <Container>
            <Header />
            <div className="flex flex-col items-center">
                <Image class src="/me.jpeg" alt="" width={200} height={200} />
            </div>

        </Container>
    )
}