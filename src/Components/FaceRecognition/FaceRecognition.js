import React from 'react';
import './faceRecognition.css';


const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt4'>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}>
				</div>
			</div>
		</div>
		)
}

export default FaceRecognition;

// Test image
//https://img.cinemablend.com/filter:scale/quill/3/e/3/7/9/6/3e3796910418639b61142ecb1229b7f5a97b1e0f.jpg?mw=600