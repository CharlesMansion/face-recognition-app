import React from 'react';


const FaceRecognition = ({imageUrl}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt4'>
				<img id='inputImage' alt='sample' src={imageUrl} width='500px' height='auto'/>
			</div>
		</div>
		)
}

export default FaceRecognition;