import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 
const style = {
  img: {
    height:'150px',
    width:'150px',
    borderRadius:'20px'
  }
}
export default class Gallery extends React.Component {  
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  
  // onSlideChange(e) {
  //   console.log('Item`s position during a change: ', e.item);
  //   console.log('Slide`s position during a change: ', e.slide);
  // };
 
  // onSlideChanged(e) {
  //   console.log('Item`s position after changes: ', e.item);
  //   console.log('Slide`s position after changes: ', e.slide);
  // };
  
  galleryItems() {
    return (
      this.props.images.map((item, i) => (
        <div key={`key-${i}`} className="text-center">
          <img style={style.img} src={item[0]} alt={item[1]}/>
          <p>{item[1]}</p>
        </div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();
 
    return (
      <AliceCarousel
        items={items}
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}