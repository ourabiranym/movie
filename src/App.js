import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Omar we Salma 1",
      posterURL: "",
      description:
        "Story of Omar, son of a wealthy business man, who was in a relationship with a model and decided to forget her after a fight with her manager in a club with whom she cheated on him. His friend introduces him to Salma, a new colleague who recently moved to the university, she had a hard past when her ex boyfriend who cheated on her with her mother and he has to do his best to win her heart . ",
    },

    {
      id: uuidv4(),
      title: "Nour Einy",
      posterURL: "",
      description:
        "The Light of My Eyes is about Ahmad (who goes under the stage name Noor) a young music composer (Tamer Hosny) and a blind girl named Sarah (Menna Shalabi) and the great love story between them. Sarah breaks up with Noor after a misunderstanding, and she decides to go to America for surgery in order to regain her eyesight. While Noor has to deal with the death of his brother, he has to deal with the fact that Sarah has left him. As she moves on with her life, she falls in love with her doctor Tarek (Amr Yousef), who decides to marry her in back Egypt. What she doesn't know is that Tarek and Noor are childhood friends, and when Noor meets Tarek in the airport he finds out that his friend's fiancée is his love, Sarah. While Sarah thinks that she sees Tarek's friend Ahmad, she doesn't know the fact that its Noor. Noor ends up facing the heartbreak silently until the events lead up to the discovery of this strange twist of fate!",
      rating: 5,
    },

    {
      id: uuidv4(),
      title: "I love you",
      posterURL: "",
      description:
        "Ali, a self-made middle-class businessman, finds himself torn between two women: The one he's about to marry and his old flame who barges back into his life. What will his heart dictate?",
      rating: 5,
    },

    {
      id: uuidv4(),
      title: "Ghodwa",
      posterURL: "",
      description:
        "Ahmed joins his father habib, whose state of health is deteriorating. They find themselves in a chaotic situation for which neither is prepared.",
      rating: 6,
    },
  ]);

  return <div className="App"></div>;
}

export default App;
