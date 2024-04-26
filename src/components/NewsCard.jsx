import { Card, CardActions, CardContent,  Link,  Typography } from "@mui/material";

export default function NewsCard({data}) {
    console.log(data)
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" color="initial">{data.title}</Typography>
                <Typography className=" px-3" variant="body2" color="initial">{data.description}</Typography>
            </CardContent>
            <CardActions>
                <Link>Read More</Link>
            </CardActions>
        </Card>
    )
}