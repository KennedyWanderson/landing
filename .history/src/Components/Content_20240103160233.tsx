import { Box, Container } from "@mui/material";
import Header from "./Header";
import Image from "next/image";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Content(){
    return(
        <React.Fragment>

        <Container maxWidth="sm">
            <Header />
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                    <div className="flex items-center tracking-wider space-x-6 ">
                        <Image className="rounded-full" src="/me.jpeg" alt="" width={300} height={300} />
                        <span className="font-bold text-2xl">Kennedy Wanderson <br></br> Front-end Developer</span>
                    </div>
                </div>
            </Box>
            {/* <div className="flex flex-col items-center">
                <About />
                <Projects />
                <Contact />
            </div> */}

        </Container>
    )
}