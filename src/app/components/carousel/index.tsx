import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Background_1 from '../../../assets/images/1.png';
import Background_2 from '../../../assets/images/2.png';
import Background_3 from '../../../assets/images/3.png';

const useStyles = makeStyles(theme => ({
    divCarouselRoot: {
        height: 400,
        color: '#ffffff',
        borderRadius: 0,
        backgroundColor: '#1c277a'
    },
    divImageCarousel: {
        width: '50%',
        height: '100%',
        float: 'left',
        display: 'flex'
    },
    divInfoCarousel: {
        width: '50%',
        height: '100%',
        float: 'right'
    },
    imageCarousel: {
        width: '50%',
        height: '50%',
        objectFit: 'contain',
        display: 'block',
        margin: 'auto'
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

const Index = () => {
    let items = [
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

    return (
        <Carousel animation={"slide"}>
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    )
}

const Item = (props: InterfaceCarouselProps) => {
    const classes = useStyles();

    return (
        <div className={classes.divCarouselRoot}>
            <div className={classes.divImageCarousel}>
                <img src={props.item.image} alt="Product" className={classes.imageCarousel} />
            </div>
            <Typography className={classes.divInfoCarousel} component={"div"}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button variant="contained" color="primary">
                    Request order!
                </Button>
            </Typography>
        </div>
    )
}

export default Index;