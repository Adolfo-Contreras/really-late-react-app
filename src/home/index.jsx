import { Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import { getTopNews } from "../apiQuery";
const data = await getTopNews();
const TechData = await getTopNews("us", "technology");
const Buisnessdata = await getTopNews("us", "business");
const ligma = {
  articles: [
    { title: "placeholder1" },
    { title: "placeholder2" },
    { title: "placeholder3" },
    { title: "placeholder4" },
    { title: "placeholder5" },
    { title: "placeholder6" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholder" },
    { title: "placeholderlast" },
  ],
};
export default function Home() {
  return (
    <>
      <section>
        <Typography variant="h4">
          <span className="logoColor">General </span>
          <span className="logoColor">News</span>
        </Typography>
        <Carousel data={data ? data : ligma} />
      </section>

      <section className="">
        <Typography variant="h4">
          <span className="logoColor">Tomorrows</span>{" "}
          <span className="logoColor">Tech</span>
        </Typography>
        <Carousel data={TechData ? TechData : ligma} />
      </section>

      <section>
        <Typography variant="h4">
          <span className="logoColor">Bustling</span>{" "}
          <span className="logoColor">Buisness</span>
        </Typography>
        <Carousel data={Buisnessdata ? Buisnessdata : ligma} />
      </section>
    </>
  );
}
