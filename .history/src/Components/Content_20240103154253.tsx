import { Container, Grid } from "@mui/material";
import Header from "./Header";
import Image from "next/image";

export default function Content(){
    return(
        <Container>
            <Header />
            
            <Grid container spacing={2}><Grid></Grid>

            <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                <div className="flex items-center tracking-wider space-x-6 ">
                    <Image className="rounded-full" src="/me.jpeg" alt="" width={300} height={300} />
                    <span className="italic font-bold text-2xl">Kennedy Wanderson <br></br> Front-end Developer</span>
                </div>
            </div>

        </Container>
    )
}