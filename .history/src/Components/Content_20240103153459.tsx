import { Container } from "@mui/material";
import Header from "./Header";
import Image from "next/image";

export default function Content(){
    return(
        <Container>
            <Header />
            <div className="flex flex-col items-center">
                <div className="flex items-center tracking-wider space-x-6 rounded-xl bg-gray-200">
                    <Image className="rounded-full" src="/me.jpeg" alt="" width={300} height={300} />
                    <span className="italic font-bold text-2xl">Kennedy Wanderson <br></br> Front-end Developer</span>
                </div>
            </div>

        </Container>
    )
}