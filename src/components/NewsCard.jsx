import { Card, CardActions, CardContent,  Link,  Typography } from "@mui/material";

export default function NewsCard(props) {
    const {title, description} = props
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" color="initial">{title}</Typography>
                <Typography variant="body2" color="initial">Amet sit do id in laborum pariatur nostrud id anim velit nostrud ullamco aute. Excepteur veniam sit reprehenderit deserunt ullamco elit enim adipisicing ut velit duis. Aute ea consequat Lorem aute ad dolore officia dolore fugiat adipisicing culpa incididunt et mollit. Reprehenderit sit est do Lorem cupidatat sit anim minim laboris commodo reprehenderit nisi. Aute officia proident laboris adipisicing in. Ea sit in qui aute est occaecat exercitation ut cillum amet consequat. Labore consectetur qui consectetur nostrud enim cupidatat sunt dolore anim et elit culpa id.</Typography>
            </CardContent>
            <CardActions>
                <Link>Read More</Link>
            </CardActions>
        </Card>
    )
}