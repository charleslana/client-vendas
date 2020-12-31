import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Background_1 from '../../../assets/images/1.png';
import Background_2 from '../../../assets/images/2.png';
import Background_3 from '../../../assets/images/3.png';

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
    description: {
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
        description: string;
        image: string;
    }
}

const Item = (props: InterfaceCarouselProps) => {
    const {box, image, description} = useStyles();

    return (
        <>
            <Typography className={box} component={"div"}>
                <img src={props.item.image} alt="Product" className={image} />
            </Typography>
            <Typography className={description} component={"div"}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button variant="contained" color="primary">
                    Request order!
                </Button>
            </Typography>
        </>
    );
}

const Index = () => {
    const items = [
        {
            name: "Node #1",
            description: "The whole structure of my server created by him",
            image: Background_1
        },
        {
            name: "TypeScript #2",
            description: "The code that was used on my back end server",
            image: Background_2
        },
        {
            name: "React #3",
            description: "Sales application front end",
            image: Background_3
        }
    ];

    const {paper, indicators} = useStyles();

    return (
        <Carousel
            className={paper}
            animation={"slide"}
            indicatorContainerProps={{className: indicators, style: {}}}
        >
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    );
}

export default Index;