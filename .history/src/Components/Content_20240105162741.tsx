import { Container } from "@mui/material";
import Header from "./Header";
import Image from "next/image";
import About from "./About";
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Projects from "./Projects";
import Contact from "./Contact";

export default function Content(){
    return(
        <Container>
            <Header />
            <Grid>
                <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                    <div className="flex items-center justify-center tracking-wider space-x-6 ">
                        <Image className="rounded-full" src="/me.jpeg" alt="" width={300} height={300} />
                        <span className="font-bold font-mono no-italic text-2xl">Kennedy Wanderson <br></br> Front-end Developer</span>
                    </div>
                </div>
            </Grid>
            <Divider>Projetos</Divider>

            <Divider>Projetos</Divider>
            <div className="flex flex-col items-center">
                <About />
                {/* <Projects />
                <Contact /> */}
            </div>

        </Container>
    )
}