import { Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import { getTopNews } from '../apiQuery';
const data = await getTopNews()
const TechData = await getTopNews('us', 'technology')
const Buisnessdata = await getTopNews('us','business')
export default function Home(){

        return(<>

        <section>
            <Typography variant="h4"><span className="logoColor">General</span> <span className="logoColor">News</span></Typography>
            <Carousel data={data}/>
        </section>
        
        <section className="">
            <Typography variant="h4"><span className="logoColor">Tomorrows</span> <span className="logoColor">Tech</span></Typography>
            <Carousel data={TechData}/>
        </section>

        <section>
            <Typography variant="h4"><span className="logoColor">Bustling</span> <span className="logoColor">Buisness</span></Typography>
            <Carousel data={Buisnessdata}/>
        </section>
        </>
        )
}