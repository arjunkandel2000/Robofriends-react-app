import React from 'react';

const Card = ({email,name,id}) =>{
    // const {email,name,id} = props;
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='Robot' src = {`https://robohash.org/${id}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;