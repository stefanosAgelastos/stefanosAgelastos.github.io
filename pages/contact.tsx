import React from "react";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/styles";
import {
    Theme,
    createStyles,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        "@global": {
            body: {
                backgroundImage: "url('https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%"
            },
        },
        mainGrid: {
            marginTop: theme.spacing(4)
        },
        card: {
            display: "flex"
        },
        cardDetails: {
            flex: 1
        },
        cardGrid: {
            marginTop: theme.spacing(2)
        },
        cardMedia: {
            width: 160
        },
    })
);

const featuredPosts = [
    {
        title: "Personal life",
        image:
            "https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        description: "Get to know what I like to post about.",
        linkText: "My Instagram",
        link: "https://www.instagram.com/volatilemercury/",
        email: null,
        tel: null,
        headers: null,

    },
    {
        title: "Professional info",
        image:
            "https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        description: "Currently I am searching for an inspiring job opportunity.",
        linkText: "My LinkedIn",
        link: "https://www.linkedin.com/in/stefanosagelastos/",
        email: null,
        tel: null,
        headers: null,
    },
    {
        title: "Get in touch",
        image:
            "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        description: "Click to send me an email",
        linkText:"sagelastos@gmail.com",
        link: "mailto:sagelastos@gmail.com",
        email: null,
        tel: null,
        headers: null,
    },
    {
        title: "or Just ring",
        image:
            "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        description: "Click to call",
        linkText: "+45 7158 7288",
        link: "tel:71-58-72-88",
        email: null,
        tel: null,
        headers: null,
    }
];



const ContactPage: NextPage = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid className={classes.cardGrid} container spacing={4}>
                {featuredPosts.map(post => (
                    <Grid item key={post.title} xs={12} md={6}>
                        <CardActionArea component="a" href={post.link}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {post.title}
                                        </Typography>
                                        {/*<Typography variant="subtitle1" color="textSecondary"> </Typography> */}
                                        <Typography variant="subtitle1" paragraph>
                                            {post.description}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            {post.linkText}
                                        </Typography>
                                    </CardContent>
                                </div>
                                
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={post.image}
                                        title="Image title"
                                    />
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
};

export default ContactPage;
