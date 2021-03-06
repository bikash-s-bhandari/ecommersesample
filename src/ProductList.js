import React from "react";
import "./ProductList.css";
import Product from "./Product";
import Slider from "react-slick";
import {
  ChevronLeft as PrevArrowIcon,
  ChevronRight as NextArrowIcon,
} from "@material-ui/icons";

function NextArrow(props) {
  const {onClick } = props;
  return (
      <NextArrowIcon  onClick={onClick} className="productList__nextArrow"/>
  );
}

function PrevArrow(props) {
  const {onClick } = props
  return (
    <PrevArrowIcon onClick={onClick} className="productList__prevArrow"/>
  );
}

const HorizontalSeparator = () => (
  <div
    style={{
      height: 240,
      width: 1,
      backgroundColor: "lightgray",
      opacity: 0.85,
    }}
  />
);

// configuration for carousel
let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductList = ({ title, data ,styles}) => {
  return (
      <div className='productList' style={styles}>
        <h2 className="productList__title"> {title}</h2>
        <Slider {...settings} className="productList__row">
          {data?.map((item, index) => (
            <div key={index} className="productList__item">
              <Product
                name={item.name}
                image={item.image}
                price={item.price}
                slug={item.slug}
                rating={item.rating}
              />
              {/* HorizontalSeparator should not follow after last item */}
              {index +1 !== data.length && <HorizontalSeparator />}
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default ProductList;
