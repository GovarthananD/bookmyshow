import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const Slider = () => {
    const slideImages = [
        {
          url: 'https://images.hdqwalls.com/download/aquaman-and-the-last-kingdom-fanart-4k-7f-1366x768.jpg',
          caption: ''
        },
        {
          url: 'https://images.hdqwalls.com/download/avengers-infinity-war-and-endgame-poster-w7-1366x768.jpg',
          caption: ''
        },
        {
          url: 'https://images.hdqwalls.com/download/2023-mission-impossible-dead-reckoning-part-one-poster-8e-1366x768.jpg',
          caption: ''
        },
      ];
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        height:'400px',
        backgroundSize:'cover',
      }
      const spanStyle = {
        fontSize: '20px',
        background:'#efefef',
        color:'#000000',
      }
    return(
        <div className="slider">
            <Slide>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                            <span style={spanStyle}>{image.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slider;