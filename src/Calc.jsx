import React from 'react';

let Card = (props) => {
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt='mypic' className='card_img' />
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_tilte'>{props.className}</h3>
            <a href={props.link} target='_blank'>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
