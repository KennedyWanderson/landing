import { Container } from "@mui/material";
import Header from "./Header";
import Image from "next/image";

export default function Content(){
    return(
        <Container>
            <Header />
            <div className="h-screen flex flex-col items-center">
                <div className="flex-1">
                    <Image className="rounded-full" src="/me.jpeg" alt="" width={200} height={200} />
                </div>
            </div>

        </Container>
    )
}