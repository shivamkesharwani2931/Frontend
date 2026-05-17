import { Form } from './Components/Form';

export const App = () => {
  const data = [
    {
      _id:1, //react component
      name:'userName',
      placeholder:'enter you name',
      type:'text,'
    },
      {
      _id:2, //react component
      name:'userEmail',
      placeholder:'enter you email',
      type:'email,'
    },
      {
      _id:3, //react component
      name:'userPhone',
      placeholder:'enter you phone',
      type:'tel,'
    },
      {
      _id:4, //react component
      name:'userPass',
      placeholder:'enter you pass',
      type:'pass,'
    },
  ];

  const showValue= (data)=>{
    console.log('data:from parent compo',data)
  }

  return (
    <>
      <Form props={{data,showValue}} />
    </>
  );
};