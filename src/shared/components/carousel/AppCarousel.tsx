import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselProps } from 'react-responsive-carousel';

interface IProps extends CarouselProps {

}

const AppCarousel = (props: IProps) => {
    const {children, ...restProps} = props;
    return (
        <Carousel
         {...restProps}
        >
            {children}
        </Carousel>
    );
}

export default AppCarousel;