import { useState, useEffect } from "react";
import {
  DocumentCard,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
} from '@fluentui/react/lib/DocumentCard';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';

const theme = getTheme();
const classNames = mergeStyleSets({
  bigBoxes: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cards: {
    height: '250px',
    width: '300px',
    margin: '5px',
    backgroundColor: '#f2f2f2', // set to desired shade of grey
  },
});

const stackTokens: IStackTokens = { childrenGap: 40 };

const openDocument = (link) => { window.open(link); }

const Publishments=() => {
  const publishmentsAPI = "publishments.json";
  const [publishments, setPublishments] = useState([]);
  const previewProps: IDocumentCardPreviewProps = { previewImages: publishments };
  /*const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];*/
  const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9v7G3n1bvU0qWYvuetfJY1XJM0bbzo7CAn8BignF&s' }];

  useEffect(()=> {
    fetch(publishmentsAPI)
            .then((res) => res.json())
            .then((res) => { setPublishments(res); })
            .catch((err) => console.error(err))
  }, [])

  return(
    <Stack tokens={stackTokens} className={classNames.bigBoxes}>
      {publishments.map((publishment) => (
        <DocumentCard
          aria-label={publishment.title}
          type={DocumentCardType.large}
          className={classNames.cards}
          onClick={() => openDocument(publishment.link)}
        >
          <DocumentCardTitle title={publishment.title} />
            <div>{publishment.summary}</div>
            <img height="100px" src={publishment.image}/>
        </DocumentCard>
      ))}
    </Stack>
  );
}

export default Publishments;
