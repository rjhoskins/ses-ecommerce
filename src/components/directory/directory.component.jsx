import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Residential Solar Systems',
                    imageUrl: '/img/vivint-solar-HASgVRE48KY-unsplash.jpg',
                    id: 1
                },
                {
                    title:'commercial solar systems',
                    imageUrl: '/img/guillherme-schneider-ecIS-bfYSG8-unsplash.jpg',
                    id: 2
                },
                {
                    title:'Industrial off-grid',
                    imageUrl: '/img/sungrow-emea-VC-m6ULjJ6Y-unsplash.jpg',
                    id: 3
                },
                {
                    title:'batteries & solar storage',
                    imageUrl: '/img/solar-batteries-323.png',
                    size: 'large',
                    id: 4
                },
                {
                    title:'industrial offgrid',
                    imageUrl: '/img/Class-1-Division-2-solar-system.png',
                    size: 'large',
                    id: 5
                }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
            {this.state.sections.map(({title,imageUrl,id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />

            ))}

                
            </div>
        )
    }
}

export default Directory;