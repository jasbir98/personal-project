import { Fragment, useEffect, useState } from "react";
import {questions} from '../data/questions';
import { imageMapper } from "../data/imageMapper";

// imageMapper[eachQuestion['choiceType']]
import {Container, Divider, Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Box, Button} from "../components";
function ChoiceComponent({selectedId}) {
    const [showLastMessage, setShowLastMessage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    function handleButtonClick(){    
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions[selectedId].questions_and_choices.length) {
            setCurrentQuestion(nextQuestion);
            setShowContent(false);
        } else {
            setShowLastMessage(true);
            setShowContent(false);
        }
    };

    function onCardImageClick() {
        setShowContent(true);
        // const imageSrc = 
    }

    useEffect(() => {
        
    },[]);



    function onChoiceSelected(e, id) {
        e.preventDefault();
        // setSelectedId(id);
    }
    // showContent ? eachQuestion['choiceImage'] : '../images/unknown.avif'
    return (
            <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                {!showLastMessage ? <Box sx={{ flexGrow: 1, maxHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%'}}>
                <Box
      sx={{
        display: 'flex',
        position: "absolute",
        top: "40%",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {questions[selectedId].questions_and_choices[currentQuestion]['questionText']}
    </Box>    
                    {questions[selectedId].questions_and_choices[currentQuestion].options.map((eachQuestion, index) => (
                     <Fragment key={index}>
                        <Grid container spacing={2} columns={8}>
                            <Grid item xs={7}>
                                <Card sx={{ maxHeight: 400 }} onClick={() => onCardImageClick()}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={showContent ? eachQuestion['choiceImage'] : require('../images/unknown.avif')}
                                            alt="Unknown Image" />
                                        {showContent ? <CardContent>
                                            <Typography gutterBottom variant="h5" component="div"
                                            style={{fontSize: '1rem', marginBottom: '0px'}}>
                                                {eachQuestion['choiceText']}
                                            </Typography>
                                            </CardContent> : <Fragment/>}
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                     </Fragment>
                     
                    ))}   
                    {showContent ? <Button onClick={handleButtonClick} style={{position: "absolute", top: "90%"}} variant="contained">Next</Button> : null}
                </Box> : <img src={require("../images/bye.gif")} alt="bye"/>}
            </Container>
    )
}

export default ChoiceComponent;

