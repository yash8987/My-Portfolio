import React from "react";
import ChatBot from "react-simple-chatbot";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import SocialLinksSmall from "./Components/SocialLinksSmall";

function App() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Thanks! Your data is submitted successfully!',
            trigger: '8',
          },
          {
            id: '8',
            message: 'Want to Connect with me?',
            trigger: '9',
          },
          {
            id: '9',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '10' },
              { value: 'No', label: 'No', trigger: '11' },
            ],
          },
          {
            id: '10',
            message: 'Great!, Connect with me on yash8987rs@gmail.com',
            end: true,
          },
          {
            id: '11',
            message: 'Thanks for your response',
            end: true,
          },
        ]}
        floating={true}
      />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinksSmall />
      <SocialLinks/>
    </div>
  );
}

export default App;
