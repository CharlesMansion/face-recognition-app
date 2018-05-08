import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3 pa3'>
			{'This Magic Brain will detect faces in your pictures. Give it a try...'}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input type='text' className='f4 pa2 w-70 center' />
					<button className='w-30 grow link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
		)
}

export default ImageLinkForm;