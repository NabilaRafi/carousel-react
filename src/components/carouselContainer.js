import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadImage } from '../action';
import SlideItem from './slider';
import Next from './next';
import Previous from './previous';

class CarouselContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeIndex: 0,
            translateValue: 0,
            direction: '',
        };
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
    }

    componentDidMount() {
        this.props.loadImage();
    }

    onClickNext() {
        const { imageArray } = this.props;
        if(this.state.activeIndex === imageArray.length - 1) {
            return this.setState({
                activeIndex: 0,
                translateValue: 0
            })
          }
        this.setState(prevState => ({
            activeIndex: prevState.activeIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth()),
        }));

    }

    slideWidth = () => {
        return document.querySelector('.slide-item').clientWidth
     }

    onClickPrev() {
        if(this.state.activeIndex === 0)
      return;
    
    this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
    }))
    }

    render() {
        const { imageArray } = this.props;
        return (
            <div className="carousel-container">
                <div className="carousel-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                    }}
                >
                    { imageArray && imageArray.map((image, i ) => (
                        <SlideItem key={i} image={image} id='active'/>
                    ))
                    }
                </div>
                <Previous clickPrev={this.onClickPrev}/>
                <Next  clickNext={this.onClickNext}/>
                <button type="button" className="btn btn-primary desktop" onClick={this.onClickPrev}>Prev</button>
                <button type="button" className="btn btn-primary desktop" onClick={this.onClickNext}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data.hits,
    imageArray: state.imageArray,
})


CarouselContainer.propTypes = {
    loadImage: PropTypes.func,
    data: PropTypes.array,
}

const CarouselComponent = connect(
    mapStateToProps, 
    {loadImage}
)(CarouselContainer);

export default CarouselComponent;