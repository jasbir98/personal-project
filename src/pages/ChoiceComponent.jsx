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
                {!showLastMessage ? <Box sx={{ flexGrow: 1, maxHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%', flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        marginBottom: "40px",
        p: 3,
      }}
    >
      {questions[selectedId].questions_and_choices[currentQuestion]['questionText']}
    </Box>          <div style={{display: "flex"}}>
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
                    </div>
                    </div>   
                    {showContent ? <Button onClick={handleButtonClick} variant="contained" style={{marginTop: "40px"}}>Next</Button> : null}
                </Box> : <img src={require("../images/bye.gif")} alt="bye"/>}
            </Container>
    )
}

export default ChoiceComponent;

