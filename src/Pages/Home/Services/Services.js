import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
// import fluoride from '../../../images/fluoride.png';
// import cavity from '../../../images/cavity.png';
// import whitening from '../../../images/whitening.png';

const services = [
    {
      name: "Fluoride Treatment",
      img: "https://i.ibb.co/PFxC5dJ/fluoride.png",
      description:
        "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.",
    },
    {
      name: "Cavity Filling",
      img: "https://i.ibb.co/BVTJBj3/cavity.png",
      description:
        "Fillings are run-of-the-mill procedures at the dental office. There is barely a patient out there without a cavity. The chances are, you will at some point start to feel pain in your tooth while munching on your favorite sweet or salty snacks too. And there is no going back.",
    },
    {
      name: "Teath Whitening",
      img: "https://i.ibb.co/5M4X00K/whitening.png",
      description:
        "Fillings are run-of-the-mill procedures at the dental office. There is barely a patient out there without a cavity. The chances are, you will at some point start to feel pain in your tooth while munching on your favorite sweet or salty snacks too. And there is no going back.",
    },
  ]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;