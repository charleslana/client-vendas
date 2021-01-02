import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import imageProduct from '../../../assets/images/product.png'
import api from "../../../service/api";
import Skeleton from "react-loading-skeleton";
import Notification from "../Notification";

const useStyles = makeStyles(theme => ({
    paper: {
        height: 400,
        color: '#ffffff',
        borderRadius: 0,
        backgroundColor: '#1c277a'
    },
    box: {
        width: '50%',
        height: 350,
        float: 'left',
        display: 'flex'
    },
    image: {
        width: '50%',
        height: '50%',
        objectFit: 'contain',
        display: 'block',
        margin: 'auto'
    },
    info: {
        width: '50%',
        height: '100%',
        float: 'right'
    },
    indicators: {
        float: 'left'
    }

}));

const LoadingSkeleton = () => {
    const {paper, box, image, info} = useStyles();

    return(
        <div className={paper} style={{backgroundColor: '#ffffff'}}>
            <Typography className={box} component={"div"}>
                <div className={image}>
                    <Skeleton width={'100%'} height={'50%'}/>
                </div>
            </Typography>
            <Typography className={info} component={"div"}>
                <h2><Skeleton width={'50%'}/></h2>
                <h3><Skeleton width={'50%'}/></h3>
                <p><Skeleton width={'50%'}/></p>
                <Skeleton width={100} height={50}/>
            </Typography>
        </div>
    );
}

interface InterfaceCarouselProps {
    key: number;
    item: {
        name: string;
        quantity: number;
        price: number;
        image: string;
    }
}

interface InterfaceNotification {
    open: boolean;
    type: string;
    message: string;
}

const Item = (props: InterfaceCarouselProps | any) => {
    const {box, image, info} = useStyles();

    props.item.image = imageProduct;

    return (
        <>
            <Typography className={box} component={"div"}>
                <img src={props.item.image} alt="Product" className={image} />
            </Typography>
            <Typography className={info} component={"div"}>
                <h2>{props.item.name}</h2>
                <h3>Price: {props.item.price}</h3>
                <p>Quantity: {props.item.quantity}</p>
                <Button variant="contained" color="primary">
                    Request order!
                </Button>
            </Typography>
        </>
    );
}

const Index = () => {
    const [products, setProducts] = useState<InterfaceCarouselProps[]>([]);

    const [loading, setLoading] = useState(true);

    const [notification, setNotification] = useState<InterfaceNotification>();

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);

            setLoading(false);

        }).catch((error) => {
            setNotification({open: true, type: 'error', message: 'An error has occurred.'});
        });
    }, []);

    const {paper, indicators} = useStyles();

    return (
        <>
            {loading && <LoadingSkeleton/>}
            {!loading &&
            <Carousel
                className={paper}
                animation={"slide"}
                indicatorContainerProps={{className: indicators, style: {}}}
            >
                {
                    products.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
            }
            {notification?.open &&
            <Notification message={notification?.message} type={notification?.type} open={true}/>
            }
        </>
    );
}

export default Index;