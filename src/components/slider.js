import React from 'react';

const SlideItem = (props) => {
    const styles = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
    return <div className="slide-item" style={styles} id={props.id}> 
        <img src={props.image} alt="carousel images" />
    </div>
}

export default SlideItem;