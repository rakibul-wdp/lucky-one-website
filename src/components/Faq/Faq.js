import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className='question'>
      <h2 className='faq-header'>React Related FAQ...???</h2>
      <div>
        <h4 className='faq'>How React Works...???</h4>
        <p className='ans'>
          React puts all of them in a root div. And create component base single page web application. React have JSX.It
          look like html but not that. JSX is simply syntactic sugar for creating very specific JavaScript objects. In
          react developer create multiple component and put them in app.js file like html tag. React mainly popular for
          single page application. It's means it loaded one time hole website but not every time. If need any user
          interacts declare state. One component to another component we will pass data by props.
        </p>
      </div>
      <div>
        <h4 className='faq'>Difference Between Props and State...!!!</h4>
        <table className='table'>
          <tr>
            <th>Props</th>
            <th>State</th>
          </tr>
          <tr>
            <td>By props we pass data one component to another component</td>
            <td>
              When use interacts with website then state work. If user doesn't interacts with website state doesn't work
            </td>
          </tr>
          <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <td>props need when pass data one component to other component</td>
            <td>state need to functional activity</td>
          </tr>
          <tr>
            <td>Props can be used with state and functional components.</td>
            <td>components. State can be used only with the state components/class component</td>
          </tr>
          <tr>
            <td>are used to pass data down from your view-controller</td>
            <td>should not be accessed from child components</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Faq;