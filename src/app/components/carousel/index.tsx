import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import imageProuct from '../../../assets/images/product.png'
import api from "../../../service/api";

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

interface InterfaceCarouselProps {
    key: number;
    item: {
        name: string;
        quantity: number;
        price: number;
        image: string;
    }
}

const Item = (props: InterfaceCarouselProps | any) => {
    props.item.image = imageProuct;

    const {box, image, info} = useStyles();

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

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        });
    }, []);

    const {paper, indicators} = useStyles();

    return (
        <Carousel
            className={paper}
            animation={"slide"}
            indicatorContainerProps={{className: indicators, style: {}}}
        >
            {
                products.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    );
}

export default Index;