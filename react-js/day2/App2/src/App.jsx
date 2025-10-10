import './index.css' // external css
import './components/style.scss' // external css


import { Part1 } from './components/Comp1.jsx';
import Part2 from './components/Comp2.jsx';
import { Part3, Part31, Part32 } from './components/Comp3.jsx'
import { Part4 } from './components/Comp4.jsx'
import { Part5 } from './components/Comp5.jsx'

const App = () => {
  let line1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta numquam temporibus!';
  let number1 = 8767960965;
  let number2 = 9146895991;


  function add(num1, num2) {
    return (num1 + num2);
  }

  let newStyle1 = {
    backgroundColor: 'black',
    color: 'white'
  }



  return (
    <>
      {/* Normal method */}
      <Part1 />

      {/* Now with some var and inline styling */}
      <Part2 name='Raju' age='33' city='Bhandara' />
      <Part2 name='Rajesh' age='33' city='Gondia' />
      <Part2 name='Rajendra' age='33' city='Chandrapur' />

      <Part3 />
      <Part31 />
      <Part32 />

      <Part4
        number1={number1}
        number2={number2}
        newStyle1={newStyle1}
        line1={line1}
        add={add}
      />

      <Part5 />




    </>
  )
}

export default App;

