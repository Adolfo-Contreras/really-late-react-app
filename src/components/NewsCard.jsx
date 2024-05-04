import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

export default function NewsCard({ data }) {
  return (
    <Card
      className="h-full rounded-md flex"
      sx={{ bgcolor: "goodLightGreen.main" }}
    >
      <CardContent className="flex flex-col justify-evenly container">
        <section className="flex flex-col gap-2.5, justify-evenly">
          <Typography variant="h5" className="font-bold" color="initial">
            {data.title ? data.title : "No Title Available!"}
          </Typography>
          <Typography variant="subtitle2" className="italic" color="initial">
            Author(s): {data.author ? data.author : "No Author Listed"}
          </Typography>
        </section>
        <section className="overflow-y-scroll">
          <Typography className="px-1.5" variant="body2" color="initial">
            {data.description
              ? data.description
              : "No description available for this article but feel free check out the link to read more!"}
          </Typography>
        </section>
        <img
          href={data.urlToImage}
          alt="Image Provided by Article"
          role="img"
        />
      </CardContent>
      <CardActions>
        <Link
          href={data.url ? data.url : "#"}
          target={data.url ? "_blank" : "_self"}
        >
          {data.url ? "Read More" : "No Link Available"}
        </Link>
      </CardActions>
    </Card>
  );
}
