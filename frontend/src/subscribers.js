import { useState, useEffect } from "react";
const Subscribers=()=>{
  const subscribersAPI = "http://localhost:3001/subscribers.json";
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch(subscribersAPI)
      .then((response) => response.json())
      .then(setSubscribers);
  }, []);

  return(
     <section>
      <h3>Subscribers</h3>
      <ul>
        {subscribers.map((subscriber) => (
          <li key={subscriber.id}>{subscriber.first_name}</li>
        ))}
      </ul>
     </section>
  )
}
export default Subscribers;

