import { useState, useEffect } from "react";

const Subscribers=()=>{
  const subscribersAPI = "subscribers.json";
  const [subscribers, setSubscribers] = useState([]);


  useEffect(()=> {
  fetch(subscribersAPI)
          .then((res) => res.json())
          .then((res) => {setSubscribers(res)})
          .catch((err) => console.error(err))
  }, [])

  return(
     <section>
      <h3>Subscribers</h3>
      <ul>
        {subscribers.map((subscriber) => (
          <li key={subscriber.id}>{subscriber.first_name} {subscriber.last_name}</li>
        ))}
      </ul>
     </section>
  )
}
export default Subscribers;

