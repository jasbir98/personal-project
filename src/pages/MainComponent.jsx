// style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}

import { Fragment, useState } from "react";
import {Container, Divider, Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Box} from "../components";
import {page_level_data} from "../data/questions";
import backgroundImage from '../images/background.png';
import ChoiceComponent from "./ChoiceComponent";
import jasbirImage from '../images/jasbir.png';
import dinkyImage from '../images/dinky.png';
import "./index.css";

function MainComponent() {
    const header = page_level_data["top_level_heading"]
    const [selectedId, setSelectedId] = useState(-1);
    function onChoiceSelected(e, id) {
        e.preventDefault();
        setSelectedId(id);
    }
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{fontFamily: "fantasy"}}>{header}</h1>
                {/* {selectedId === -1 ? <img src={require("../images/welcome.gif")} alt="photo" style={{maxHeight: "170px", position: "absolute", top: "25%"}}/> : null} */}
                <h1 style={{fontFamily: "fantasy"}}>Let's get Started...</h1>
                <Box sx={{ flexGrow: 1, height: "100vh", display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%'}}>
                    {selectedId === -1 ?
                    <Fragment>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <Card sx={{ maxHeight: 345 }} onClick={(e) => onChoiceSelected(e, 0)}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={dinkyImage}
                                        alt="green iguana" />
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Dinky
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={8}>
                            <Card sx={{ maxHeight: 345 }} onClick={(e) => onChoiceSelected(e, 1)} disabled>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={jasbirImage}
                                        alt="green iguana" />
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Jasbir
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Fragment> : <ChoiceComponent selectedId={selectedId}/> }
                </Box>
            </Container>
        </div>
    )
}

export default MainComponent;

