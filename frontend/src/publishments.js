import { useState, useEffect } from "react";
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
    <div style={{ 
      display: 'flex', 
      flexFlow: 'row wrap', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: '3rem'
    }}>
      {publishments.map((publishment, index) => {
        const tooltip = (
          <Tooltip id={`tooltip-${index}`}>
            Click to read
          </Tooltip>
        );

        return (
          <OverlayTrigger key={index} placement="top" overlay={tooltip}>
            <Card
              aria-label={publishment.title}
              style={{ 
                height: '250px',
                width: '300px',
                margin: '5px',
                backgroundColor: '#f2f2f2',
                cursor: 'pointer'
              }}
              className="shadow-sm d-flex flex-column overflow-hidden border"
              onMouseEnter={() => {
                setHoveredCardIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredCardIndex(null);
              }}
              onClick={() => openDocument(publishment.link)}
            >
              <Card.Body
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredCardContentIndex(index)}
                onMouseLeave={() => setHoveredCardContentIndex(null)}
              >
                <h6 className="mb-2">
                  {publishment.title}
                </h6>
                {hoveredCardContentIndex === index && (
                  <p className="text-muted small mb-0">
                    {publishment.summary}
                  </p>
                )}
              </Card.Body>
              <Card.Img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  flex: '1 1 auto',
                  minHeight: 0
                }}
                src={publishment.image}
                alt={publishment.title}
                onMouseEnter={() => setHoveredCardContentIndex(index)}
                onMouseLeave={() => setHoveredCardContentIndex(null)}
              />
            </Card>
          </OverlayTrigger>
        );
      })}
    </div>
  );
}

export default Publishments;
