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
            <div className="flex items-center">
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
            </div>
        </Container>

    )
}