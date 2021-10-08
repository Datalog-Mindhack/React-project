import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';
function Booklist(){
  return (
  <section className='booklist'>
   <Book />
   <Book />
   <Book />
   <Book />
  </section>
  );
}
//const Greeting = () => {
  //return React.createElement('h1', {}, 'Hello World');
//};

const Book = () => {
    return(
      <article className='book'>
       <Image />
       <Title />
      </article>
    ); 
} 
const Image = () => (
  <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/SE-2-Winds-of-Change-Oct28-6_1.jpeg?grP2P9O5ETJQUYFRCS_hUxcSGrNHzoin&size=450:200" alt="" />
);

const Title = () => <h1 style={{color:'white', fontsize:'4rem bold', }}>Ethical Hacking</h1>;
  
ReactDom.render(<Booklist />, document.getElementById('root')
);