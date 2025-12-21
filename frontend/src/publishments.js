import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';

const openDocument = (link) => { window.open(link); }

const Publishments=() => {
  const publishmentsAPI = "publishments.json";
  const [publishments, setPublishments] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredCardContentIndex, setHoveredCardContentIndex] = useState(null);

  useEffect(()=> {
    fetch(publishmentsAPI)
            .then((res) => res.json())
            .then((res) => { setPublishments(res); })
            .catch((err) => console.error(err))
  }, [])

  return(
    <Box sx={{ 
      display: 'flex', 
      flexFlow: 'row wrap', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: 5
    }}>
      {publishments.map((publishment, index) => (
        <Card
          key={index}
          aria-label={publishment.title}
          sx={{ 
            height: '250px',
            width: '300px',
            margin: '5px',
            backgroundColor: '#f2f2f2',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: 4
            }
          }}
          onClick={() => openDocument(publishment.link)}
          onMouseEnter={() => setHoveredCardIndex(index)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        >
          <CardContent
            onMouseEnter={() => setHoveredCardContentIndex(index)}
            onMouseLeave={() => setHoveredCardContentIndex(null)}
          >
            <Typography variant="h6" component="div" gutterBottom>
              {publishment.title}
            </Typography>
            {hoveredCardContentIndex === index && (
              <Typography variant="body2" color="text.secondary">
                {publishment.summary}
              </Typography>
            )}
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              height: hoveredCardContentIndex === index ? '100px' : '100%',
              flex: hoveredCardContentIndex === index ? '0 0 100px' : '1 1 auto',
              objectFit: hoveredCardContentIndex === index ? 'cover' : 'contain'
            }}
            image={publishment.image}
            alt={publishment.title}
          />
        </Card>
      ))}
    </Box>
  );
}

export default Publishments;
