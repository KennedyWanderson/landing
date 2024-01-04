import { Container } from "@mui/material"
import OutlinedCard from "./Card"

interface AboutProps {
    texto: string
    icone?: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}


export default function About(props: AboutProps){
    return(

        <Container>
            <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                <div className="">
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                </div>
            </div>
        </Container>

    )
}