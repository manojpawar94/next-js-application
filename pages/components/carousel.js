import styles from '../../styles/Carousel.module.css'
import sunsetImg from '../../images/sunset.jpg'
import flowersImg from '../../images/flowers.jpg'

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div className={styles.carousel}>
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => {
    if (direction == 'left')
        return (
            <div
                className={styles.slideArrow} style={{left : '8px'}}
                onClick={clickFunction} >
                {glyph}
            </div >
        );
    else
        return (
            <div
                className={styles.slideArrow} style={{right : '8px'}}
                onClick={clickFunction} >
                {glyph}
            </div >
        );
}

const ImageSlide = ({ url }) => {
    const imageStyles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className={`${styles.imageSlide} ${styles.fade}`} style={imageStyles}></div>
    );
}

const imgUrls = [
    sunsetImg,
    flowersImg
];

