import React from 'react'
import styles from '@/styles/Freequote.module.css'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Link from 'next/link';


const Freequote = (props) => {


  const [score, setScore] = useState('Submit');

  const handleSubmit = async (e) => {
    // e.preventDefault()

    // const data = {
    //   first: e.target.first.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value,
    // }

    // const JSONdata = JSON.stringify(data)

    // setScore('Wating For Send Data');

    // axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
    //   .then((response) => {
    //     setScore('Thank You');
    //     console.log(response.data);
    //   });

    // const { pathname } = Router
    // if (pathname == pathname) {
    //   Router.push('/thank-you')
    // }

  }

  const [gameshow, gameapp] = useState(true);

  function game6() {
    gameapp(false);
  }

  return (
    <>

      <div className={styles[props.formsaspire]}>
        <form className={styles.formalign} onSubmit={handleSubmit}>


          <div className="mb-3 proisting">

            <h3 className='center mb-4'>What type of project is this?</h3>

                {/* <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='checkbox'
              /> */}

            <Form.Check
              type='radio'
              label='Application - business'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Application - game'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Application - mobile commerce'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Application - social media'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Application - utility'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Application - other'
              name="group1"
            />
            <Form.Check
              type='radio'
              label='Plug-in'
              name="group1"
            />

            <Form.Check
              type='radio'
              label='Other'
              name="group1"
            />

            <div className={styles.raop}>
              <Link href='#'>Continue</Link>
            </div>


          </div>



        </form>
      </div>


    </>
  )
}

export default Freequote