import { useState, useEffect } from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { getTheme } from '@fluentui/react/lib/Styling';

const stackTokens: IStackTokens = { childrenGap: 20 };
const theme = getTheme();
const { palette, fonts } = theme;

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
            .then((res) => {setPublishments(res)})
            .catch((err) => console.error(err))
  }, [])

  return(
    <Stack tokens={stackTokens}>
      {publishments.map((publishment) => (
        <DocumentCard
          aria-label={publishment.title}
          type={DocumentCardType.large}
          onClick={() => openDocument(publishment.link)}
        >
          <DocumentCardTitle
            title={publishment.title}
            shouldTruncate
          />
            {publishment.summary}
        </DocumentCard>
      ))}
    </Stack>
  );
}

export default Publishments;
