import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const Home = () => {
    return (
        <div className='text-center Homewrapper'>
            <TypeAnimation
                sequence={[
                    'A simple Shoe Store created using',
                    500,
                    'React Router',
                    500,
                    'and Redux',
                    500,
                    'Hop on to Products',
                    500,
                ]}
                speed={70}
                style={{ fontSize: '2em' }}
                wrapper="span"
            />
        </div>
    )
}
