import { useRef } from "react";
import "./index.css";
import Card from "../Card";

const moveRef = (element, dir) => {
    if (dir === "left") element.current.scroll += 300;
    if (dir === "right") element.current.scroll -= 300;

    if (element.current.scroll >= 300) element.current.scroll = 0;
    if (element.current.scroll === 0) element.current.scroll = 314;
};

function Carousel() {
    const carouselref = useRef();
    return (
        <div className="body">
            <div className="carousel" ref={carouselref}>
                <div className="wrapper">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="carousel__buttons">
                <button className="btn" onClick={() => moveRef(carouselref, "right")}>
                    {"<"}
                </button>
                <button className="btn" onClick={() => moveRef(carouselref, "left")}>
                    {">"}
                </button>
            </div>
        </div>
    );
    }

export default Carousel;