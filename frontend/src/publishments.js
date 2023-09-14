import { useState, useEffect } from "react";

const Publishments=()=>{
  const publishmentsAPI = "publishments.json";
  const [publishments, setPublishments] = useState([]);

  useEffect(()=> {
    fetch(publishmentsAPI)
            .then((res) => res.json())
            .then((res) => {setPublishments(res)})
            .catch((err) => console.error(err))
  }, [])

  return(
     <section className="Publishments">
       <h3>Publishments</h3>
         <ul>
            {publishments.map((publishment) => (
              <li key={publishment.id}>{publishment.title} {publishment.summary}</li>
            ))}
         </ul>
     </section>
  )
}
export default Publishments;

