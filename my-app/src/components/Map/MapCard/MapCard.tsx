import styles from '../MapCard/MapCard.module.sass'
import { FC } from 'react';

interface Props{
    picture: string,
    address: string,
    description: string, 
}

const MapCard:FC<Props> = ({picture, address, description}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={picture} />
            </div>
            <div className={styles.text}>
                <h4>{address}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MapCard;