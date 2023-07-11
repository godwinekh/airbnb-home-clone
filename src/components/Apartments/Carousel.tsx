import { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { StaticImageData } from "next/image";
import NextImage from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Carousel.module.css";
import { FavoriteTwoTone } from "@mui/icons-material";

interface CarouselProps {
  images: StaticImageData[];
  // images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageData, setImageData] = useState(images);
  const showButtons = isHovered ? styles.flex : styles.hidden;

  const handleClickPreviousEvent = () => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide <= 0) {
      setCurrentSlide(imageData.length - 1);
    }
  };

  const handleClickNextEvent = () => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide >= imageData.length - 1) {
      setCurrentSlide(0);
    }
  };

  const handleHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(event.type === "mouseenter");
  };

  return (
    <Box
      component="div"
      position="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      sx={{
        cursor: "pointer",
        width: {xs: 300, sm: 340},
        height: {xs: 260, sm: 300}
      }}
    >
      <CarouselProvider
        visibleSlides={1}
        totalSlides={images.length}
        currentSlide={currentSlide}
        step={2}
        naturalSlideWidth={200}
        naturalSlideHeight={300}
        hasMasterSpinner={false}
      >
        <Slider className={styles.slider}>
          {images.map((item, index) => (
            <Slide key={index} index={index}>
              <NextImage
                src={item}
                alt="image"
                width={340}
                height={300}
                className={styles.image}
                priority
              />
            </Slide>
          ))}
        </Slider>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 12,
            "&:hover": { backgroundColor: "unset" },
          }}
        >
          <FavoriteTwoTone htmlColor="#fff" />
        </IconButton>
        <ButtonBack
          className={`${showButtons} ${styles.buttonBack}`}
          onClick={handleClickPreviousEvent}
        >
          <ArrowBackIosIcon fontSize="inherit" />
        </ButtonBack>
        <ButtonNext
          className={`${showButtons} ${styles.buttonNext}`}
          onClick={handleClickNextEvent}
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </ButtonNext>
        <DotGroup className={styles.dotGroup} />
      </CarouselProvider>
    </Box>
  );
};

export default Carousel;
