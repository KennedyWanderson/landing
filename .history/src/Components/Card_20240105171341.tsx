import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface AboutProps {
    text: string;
    icone?: any;
    url?: string;
    className?: string;
    onClick?: (evento: any) => void;
}

function CardContentComponent(props: AboutProps) {
    const [htmlContent, setHtmlContent] = useSta<string>('');

    React.useEffect(() => {
        // Função para carregar o conteúdo HTML
        const fetchHtmlContent = async () => {
            try {
                const response = await fetch('./card.html');
                const data = await response.text();
                setHtmlContent(data);
            } catch (error) {
                console.error('Erro ao carregar o arquivo HTML', error);
            }
        };

        fetchHtmlContent(); // Chama a função para carregar o conteúdo HTML
    }, []);

    return (
        <React.Fragment>
            <CardContent>
                {/* Renderiza o conteúdo HTML dentro do componente */}
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                {/* Chama o componente CardContentComponent dentro do Card */}
                <CardContentComponent text=" texto aqui" />
            </Card>
        </Box>
    );
}
