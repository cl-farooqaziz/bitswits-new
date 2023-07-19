import React from 'react'
import styles from '@/styles/Freequote.module.css'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import axios from "axios";
// import Router from 'next/router';
const Freequote = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');

  const [error, setError] = useState('');


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setError('');
  };


  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
    setError('');
  };
  const handleOptionChange3 = (e) => {
    setSelectedOption3(e.target.value);
    setError('');
  };
  const handleOptionChange4 = (e) => {
    setSelectedOption4(e.target.value);
    setError('');
  };

  const handleOptionChange5 = (e) => {
    setSelectedOption5(e.target.value);
    setError('');
  };

  const handleOptionChange6 = (e) => {
    setSelectedOption6(e.target.value);
    setError('');
  };












  const handleSubmit = (e) => {

    e.preventDefault();



    const data = {
      Step1: selectedOption,
      Step2: selectedOption1,
      Step3: selectedOption3,
      Step4: selectedOption4,
      Step5: selectedOption5,
      Step6: selectedOption6,
      Name: e.target.first.value,
      Email: e.target.email.value,
      Phone: e.target.phone.value,


    }
    const JSONdata = JSON.stringify(data)



    axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
      .then((response) => {
        console.log(response.data);
        alert('thankyou for Submitting a from');
      });

    // const { pathname } = Router
    //   if (pathname == pathname) {
    //       Router.push('/search-engine-optimization')
    //   }





  }

  const [gameshow, gameapp] = useState(true);
  const [gameshow1, gameapp1] = useState(false);
  const [gameshow2, gameapp2] = useState(false);
  const [gameshow3, gameapp3] = useState(false);
  const [gameshow4, gameapp4] = useState(false);
  const [gameshow5, gameapp5] = useState(false);
  const [gameshow6, gameapp6] = useState(false);
  const [gameshow7, gameapp7] = useState(false);

  function game6(e) {

    e.preventDefault();

    if (selectedOption === '') {
      setError('Please select an option.');
    }
    else if (selectedOption === 'Other') {
      setError('Please enter a value for Other');
    }

    else {
      gameapp(false);
      gameapp1(true);
    }


  }



  function game7() {

    if (selectedOption1 === '') {
      setError('Please select an option.');
    }
    else if (selectedOption1 === 'Other') {
      setError('Please enter a value for Other');
    }

    else {
      gameapp(false);
      gameapp1(false);
      gameapp2(true);
      gameapp3(false);
      gameapp4(false);
      gameapp5(false);
      gameapp6(false);
      gameapp7(false);
    }

  }



  function game8() {


    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(true);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
    gameapp7(false);


  }




  function game9() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(true);
    gameapp5(false);
    gameapp6(false);
    gameapp7(false);
  }

  function game10() {


    if (selectedOption3 === '') {
      setError('Please select an option.');
    }
    else if (selectedOption3 === 'Other') {
      setError('Please enter a value for Other');
    }

    else {

      gameapp(false);
      gameapp1(false);
      gameapp2(false);
      gameapp3(false);
      gameapp4(false);
      gameapp5(true);
      gameapp6(false);
      gameapp7(false);

    }
  }
  function game11() {

    if (selectedOption3 === 'Yes') {

      if (selectedOption4 === '') {
        setError('Please select an option.');
      }
      else if (selectedOption4 === 'Other') {
        setError('Please enter a value for Other');
      }

      else {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);
        gameapp5(false);
        gameapp6(true);
        gameapp7(false);
      }
    }

    else {
      if (selectedOption5 === '') {
        setError('Please select an option.');
      }
      else if (selectedOption5 === 'Other') {
        setError('Please enter a value for Other');
      }

      else {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);
        gameapp5(false);
        gameapp6(true);
        gameapp7(false);
      }

    }



  }




  function game12() {

    if (selectedOption6 === '') {
      setError('Please select an option.');
    }
    else if (selectedOption6 === 'Other') {
      setError('Please enter a value for Other');
    }

    else {


      gameapp(false);
      gameapp1(false);
      gameapp2(false);
      gameapp3(false);
      gameapp4(false);
      gameapp5(false);
      gameapp6(false);
      gameapp7(true);
    }

  }



  function back() {
    gameapp1(false);
    gameapp(true);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    setError('');
  }
  function back1() {
    gameapp(false);
    gameapp1(true);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
    setError('');
  }
  function back2() {
    gameapp(false);
    gameapp1(false);
    gameapp2(true);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
    setError('');

  }
  function back3() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(true);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
    setError('');
  }
  function back4() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(true);
    gameapp5(false);
    gameapp6(false);
    setError('');
  }
  function back5() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(true);
    gameapp6(false);
    setError('');
  }
  function back6() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(true);
    gameapp7(false);
    setError('');
  }




  return (
    <>

      <div className={styles.formsaspire}>
        <form className={styles.formalign} method='post' onSubmit={handleSubmit}>

          {gameshow ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>What type of project is this?</h3>

              {error && <p className={styles.error}>{error}</p>}
           

              <Form.Check
                type='radio'
                id="Application - business"
                label='Application - business'
                name='pro'
                value='Application - business'
                checked={selectedOption === 'Application - business'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - game'
                id="Application - game"
                name='pro'
                value='Application - game'
                checked={selectedOption === 'Application - game'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - mobile commerce'
                id="Application - mobile commerce"
                name='pro'
                value='Application - mobile commerce'
                checked={selectedOption === 'Application - mobile commerce'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - social media'
                id="Application - social media"
                name='pro'
                value='Application - social media'
                checked={selectedOption === 'Application - social media'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - utility'
                id="Application - utility"
                name='pro'
                value='Application - utility'
                checked={selectedOption === 'Application - utility'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - other'
                id="Application - other"
                name='pro'
                value='Application - other'
                checked={selectedOption === 'Application - other'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Plug-in'
                id="Plug-in"
                name='pro'
                value='Plug-in'
                checked={selectedOption === 'Plug-in'}
                onChange={handleOptionChange}
              />

              <Form.Check
                type='radio'
                label=''
                name='pro'
                value='Other'
                checked={selectedOption === 'Other'}
                onChange={handleOptionChange}
              />
              <input type="text" className={styles.name3} name="newtag" placeholder='Other' />

              <div >
                <Link className={styles.raop} onClick={game6} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }
          {gameshow1 ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>What sort of development work do you need?</h3>

              {error && <p className={styles.error}>{error}</p>}


              {selectedOption === 'Plug-in' ?
                <Form.Check
                  type='radio'
                  label='Develop a Plug-in'
                  id="Develop a Plug-in"
                  name="develop"
                  value='Develop a Plug-in'
                  checked={selectedOption1 === 'Develop a Plug-in'}
                  onChange={handleOptionChange1}

                />

                :


                <Form.Check
                  type='radio'
                  label='Develop a new app'
                  id="Develop a new app"
                  name="develop"
                  value='Develop a new app'
                  checked={selectedOption1 === 'Develop a new app'}
                  onChange={handleOptionChange1}

                />
              }



              {selectedOption === 'Plug-in' ?


                <Form.Check
                  type='radio'
                  label='Change a plug-in that already exists'
                  id="Change a plug-in that already exists"
                  name="develop"
                  value='Change a plug-in that already exists'
                  checked={selectedOption1 === 'Change a plug-in that already exists'}
                  onChange={handleOptionChange1}

                />
                :
                <Form.Check
                  type='radio'
                  label='Changes to an app that already exists'
                  id="Changes to an app that already exists"
                  name="develop"
                  value='Changes to an app that already exists'
                  checked={selectedOption1 === 'Changes to an app that already exists'}
                  onChange={handleOptionChange1}

                />
              }





              <Form.Check
                type='radio'
                label='I would like to discuss this with the pro'
                id="I would like to discuss this with the pro"
                name="develop"
                value='I would like to discuss this with the pro'
                checked={selectedOption1 === 'I would like to discuss this with the pro'}
                onChange={handleOptionChange1}
              />


              <Form.Check
                type='radio'
                label=''
                name="develop"
                value='Other'
                checked={selectedOption1 === 'Other'}
                onChange={handleOptionChange1}
              />
              <input type="text" className={styles.name3} name="name3" placeholder='Other' />

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game7} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }

          {gameshow2 ?
            <div className="mb-3 proisting">

              
                <div>
                  <h3 className='center mb-4'>Which platform(s) is this needed for?</h3>

                  <Form.Check
                    type='checkbox'
                    id='Android'
                    label='Android'
                    name="needed"
                    value='Android'
                  />

                  <Form.Check
                    type='checkbox'
                    id='iOS'
                    label='iOS'
                    name="needed"
                    value='iOS'
                  />
                  <Form.Check
                    type='checkbox'
                    id='Windows store'
                    label='Windows store'
                    name="needed"
                    value='Windows store'
                  />
                  <Form.Check
                    type='checkbox'
                    label=''
                    name="needed"
                    value='Other'
                  />

                  <input type="text" className={styles.name3} name="name3" placeholder='Other' />

                  <div className={styles.ther}>
                    <Link className={styles.back} onClick={back1} href='#'>Back</Link>
                    <Link className={styles.raop} onClick={game8} href='#'>Continue</Link>
                  </div>

                </div>

                {/* <div>
                  <h3 className='center mb-4'>How do you plan on monetising <br></br> the app?</h3>

                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='Cost to download'
                    value='Cost to download'
                  />

                  <Form.Check
                    type='checkbox'
                    id='iOS'
                    label='In-app advertising'
                    value='In-app advertising'
                  />
                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='In-app purchases'
                    value='In-app purchases'
                  />
                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='Sponsorships'
                    value='Sponsorships'
                  />
                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='Subscription'
                    value='Subscription'
                  />
                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='I will not be monetising the app'
                    value='I will not be monetising the app'
                  />
                  <Form.Check
                    type='checkbox'
                    id='checkbox'
                    label='I need guidance from the pro'
                    value='I need guidance from the pro'
                  />



                  <Form.Check
                    type='checkbox'
                    label=''
                    value='Other'
                  />

                  <input type="text" className={styles.name3} name="name3" placeholder='Other' />

                  <div className={styles.ther}>
                <Link className={styles.back} onClick={back1} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game13} href='#'>Continue</Link>
              </div>

                </div> */}
            </div>
            :
            ''
          }


          {gameshow3 ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>Which programming language(s) <br></br> would you consider using?</h3>

              <Form.Check
                type='checkbox'
                id='.NET'
                label='.NET'
                name="consider"
                value='.NET'
              />
              <Form.Check
                type='checkbox'
                id='iOS'
                label='Adobe AIR'
                name="consider"
                value='Adobe AIR'
              />
              <Form.Check
                type='checkbox'
                id='C#'
                label='C#'
                name="consider"
                value='C#'
              />


              <Form.Check
                type='checkbox'
                id='Java ME'
                label='Java ME'
                name="consider"
                value='Java ME'
              />

              <Form.Check
                type='checkbox'
                id='Objective C'
                label='Objective C'
                name="consider"
                value='Objective C'
              />

              <Form.Check
                type='checkbox'
                id='Swift'
                label='Swift'
                name="consider"
                value='Swift'
              />


              <Form.Check
                type='checkbox'
                id='I`m not sure'
                label='I`m not sure'
                name="consider"
                value='I`m not sure'
              />

              <Form.Check
                type='checkbox'
                id='I`m looking for guidance from the pro'
                label='I`m looking for guidance from the pro'
                name="consider"
                value='I`m looking for guidance from the pro'
              />


              <Form.Check
                type='checkbox'
                label=''
                name="consider"
              />
              <input type="text" className={styles.name3} name="name3" placeholder='Other' />

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back2} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game9} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }

          {gameshow4 ?
            <div className="mb-3 proisting">
              <h3 className='center mb-4'>Do you have a budget in mind?</h3>

              {error && <p className={styles.error}>{error}</p>}

              <Form.Check
                type='radio'
                label='Yes'
                id='Yes'
                value='Yes'
                name="mind"
                checked={selectedOption3 === 'Yes'}
                onChange={handleOptionChange3}
              />
              <Form.Check
                type='radio'
                label='No - I need guidance from the pro'
                id='No - I need guidance from the pro'
                name="mind"
                value='No - I need guidance from the pro'
                checked={selectedOption3 === 'No - I need guidance from the pro'}
                onChange={handleOptionChange3}
              />
              <Form.Check
                type='radio'
                label='I`m not sure'
                id='I`m not sure'
                name="mind"
                value='I`m not sure'
                checked={selectedOption3 === 'I`m not sure'}
                onChange={handleOptionChange3}
              />

              <Form.Check
                type='radio'
                label=''
                name="mind"
                value='Other'
                checked={selectedOption3 === 'Other'}
                onChange={handleOptionChange3}
              />
              <input type="text" className={styles.name3} name="name3" placeholder='Other' />

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back3} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game10} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }

          {gameshow5 ?
            <div className="mb-3 proisting">

              {selectedOption3 === 'Yes' ?

                <div>
                  <h3 className='center mb-4'>What is your budget for the project?</h3>

                  {error && <p className={styles.error}>{error}</p>}

                  <Form.Check
                    type='radio'
                    label='Less than $1,000'
                    id='Less than $1,000'
                    name="nextpro"
                    value='Less than $1,000'
                    checked={selectedOption4 === 'Less than $1,000'}
                    onChange={handleOptionChange4}
                  />
                  <Form.Check
                    type='radio'
                    label='$1,000 - $2,999'
                    id='$1,000 - $2,999'
                    name="nextpro"
                    value='$1,000 - $2,999'
                    checked={selectedOption4 === '$1,000 - $2,999'}
                    onChange={handleOptionChange4}
                  />
                  <Form.Check
                    type='radio'
                    label='$3,000 - $4,999'
                    id='$3,000 - $4,999'
                    name="nextpro"
                    value='$3,000 - $4,999'
                    checked={selectedOption4 === '$3,000 - $4,999'}
                    onChange={handleOptionChange4}
                  />
                  <Form.Check
                    type='radio'
                    label='$5,000 - $9,999'
                    id='$5,000 - $9,999'
                    name="nextpro"
                    value='$5,000 - $9,999'
                    checked={selectedOption4 === '$5,000 - $9,999'}
                    onChange={handleOptionChange4}
                  />
                  <Form.Check
                    type='radio'
                    label='$10,000 - $19,999'
                    id='$10,000 - $19,999'
                    name="nextpro"
                    value='$10,000 - $19,999'
                    checked={selectedOption4 === '$10,000 - $19,999'}
                    onChange={handleOptionChange4}
                  />
                  <Form.Check
                    type='radio'
                    label='$20,000 or more'
                    id='$20,000 or more'
                    name="nextpro"
                    value='$20,000 or more'
                    checked={selectedOption4 === '$20,000 or more'}
                    onChange={handleOptionChange4}
                  />


                  <Form.Check
                    type='radio'
                    label=''
                    name="nextpro"
                    value='Other'
                    checked={selectedOption4 === 'Other'}
                    onChange={handleOptionChange4}

                  />
                  <input type="text" className={styles.name3} name="name3" placeholder='Other' />
                </div>


                :

                <div>
                  <h3 className='center mb-4'>How soon would you like the project to begin?</h3>

                  {error && <p className={styles.error}>{error}</p>}

                  <Form.Check
                    type='radio'
                    label='ASAP'
                    id='ASAP'
                    name="begin"
                    value='ASAP'
                    checked={selectedOption5 === 'ASAP'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='Within a week'
                    id='Within a week'
                    name="begin"
                    value='Within a week'
                    checked={selectedOption5 === 'Within a week'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='Within 2 weeks'
                    id='Within 2 weeks'
                    name="begin"
                    value='Within 2 weeks'
                    checked={selectedOption5 === 'Within 2 weeks'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='Within a month'
                    id='Within a month'
                    name="begin"
                    value='Within a month'
                    checked={selectedOption5 === 'Within a month'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='Within 2 months'
                    id='Within 2 months'
                    name="begin"
                    value='Within 2 months'
                    checked={selectedOption5 === 'Within 2 months'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='Within 3 months'
                    id='Within 3 months'
                    name="begin"
                    value='Within 3 months'
                    checked={selectedOption5 === 'Within 3 months'}
                    onChange={handleOptionChange5}
                  />
                  <Form.Check
                    type='radio'
                    label='I`m not sure'
                    id='I`m not sure'
                    name="begin"
                    value='I`m not sure'
                    checked={selectedOption5 === 'I`m not sure'}
                    onChange={handleOptionChange5}
                  />

                  <Form.Check
                    type='radio'
                    label=''
                    name="begin"
                    value='Other'
                    checked={selectedOption5 === 'Other'}
                    onChange={handleOptionChange5}


                  />
                  <input type="text" className={styles.name3} name="name3" placeholder='Other' />
                </div>

              }


              <div className={styles.ther}>
                <Link className={styles.back} onClick={back4} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game11} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }

          {gameshow6 ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>How likely are you to make a hiring <br></br> decision?</h3>

              {error && <p className={styles.error}>{error}</p>}

              <Form.Check
                type='radio'
                label='I`m ready to start now'
                id='I`m ready to start now'
                value='I`m ready to start now'
                name="likely"
                checked={selectedOption6 === 'I`m ready to start now'}
                onChange={handleOptionChange6}
              />
          
              <Form.Check
                type='radio'
                label='I`m planning and researching'
                id='I`m planning and researching'
                value='I`m planning and researching'
                name="likely"
                checked={selectedOption6 === 'I`m planning and researching'}
                onChange={handleOptionChange6}
              />


              <Form.Check
                type='radio'
                label=''
                value='Other'
                name="likely"
                checked={selectedOption6 === 'Other'}
                onChange={handleOptionChange6}
              />
              <input type="text" className={styles.name3} name="name3" placeholder='Other' />

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back5} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game12} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }


          {gameshow7 ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>What email address would <br></br> you like quotes sent to?</h3>



              <div className='newposrt'>
                {error && <p className={styles.error}>{error}</p>}
                <input type='text' name='first' required className='form-control' placeholder="Enter your Name"></input>
                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                <input type='number' name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
              </div>

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back6} href='#'>Back</Link>
                <input type='submit' className={styles.raop} value='Submit' />
              </div>
            </div>
            :
            ''
          }

        </form>
      </div>




    </>
  )
}

export default Freequote