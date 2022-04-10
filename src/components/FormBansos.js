import { Link } from "react-router-dom";
import Form2 from "./Form2";
import Navbar from "./Navbar";
import bgAutumn from "../img/joshua-fuller-SFRVfLZ7ORo-unsplash.jpg";
import bgMountain from "../img/norris-niman-ePB2oGU8mb4-unsplash.jpg";
import '../LandingPage.css';

const FormBansos = props => {
      return (
        // <div className="min-h-full min-w-full" style={{backgroundImage: `url(${bgMountain})`}}>
        <div id="bg-autumn" className="min-h-full min-w-full pb-20">
          <div className="py-4 px-8 ">
        <Navbar />
          </div>
        <div className="my-20">
          <Form2 /> 
        </div>
        </div>
      );
    };

export default FormBansos;