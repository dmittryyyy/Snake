import { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [modalContent, setModalContent] = useState({
    title: null,
    text: null,
    prompt: null,
  });

  return (
    <>
      <Modal
        title={modalContent.title}
        text={modalContent.text}
        prompt={modalContent.prompt}
      />
      <Header />
    </>
  );
}

export default App;
