import { Card, CardActions, CardContent,  Link,  Typography } from "@mui/material";

export default function NewsCard({data}) {
    return (
        <Card className='h-full rounded-md' sx={{backgroundColor: '#9CC5A1'}}>
            <CardContent className='flex flex-col justify-evenly container'>
            <section className="flex flex-col gap-2.5, justify-evenly">
                <Typography variant="h5" className="font-bold" color="initial">{data.title}</Typography>
                <Typography variant="subtitle2" className="italic" color="initial">Author(s): {data.author ? data.author : 'No Author Listed'}</Typography>
            </section>
                <Typography className="px-1.5 overflow-y-scroll" variant="body2" color="initial">{data.description ? data.description : 'No description available for this article but feel free to read more!'}</Typography>
            </CardContent>
            <CardActions>
                <Link href={data.url} target="_blank">Read More</Link>
            </CardActions>
        </Card>
    )
}