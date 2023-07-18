import React from 'react'
import styles from '@/styles/Freequote.module.css'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Link from 'next/link';


const Freequote = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setError('');
  };








  const handleSubmit = (e) => {

    e.preventDefault();
    alert('Thankyou');



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

    if (selectedOption === '') {
      setError('Please select an option.');
    }
    else if (selectedOption === 'Other') {
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
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(true);
    gameapp6(false);
    gameapp7(false);
  }
  function game11() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(true);
    gameapp7(false);
  }
  function game12() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
    gameapp7(true);
  }


  function back() {
    gameapp1(false);
    gameapp(true);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
  }
  function back1() {
    gameapp(false);
    gameapp1(true);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
  }
  function back2() {
    gameapp(false);
    gameapp1(false);
    gameapp2(true);
    gameapp3(false);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);

  }
  function back3() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(true);
    gameapp4(false);
    gameapp5(false);
    gameapp6(false);
  }
  function back4() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(true);
    gameapp5(false);
    gameapp6(false);
  }
  function back5() {
    gameapp(false);
    gameapp1(false);
    gameapp2(false);
    gameapp3(false);
    gameapp4(false);
    gameapp5(true);
    gameapp6(false);
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
                label='Application - business'
                name="group1"
                value='Application - business'
                checked={selectedOption === 'Application - business'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - game'
                name="group1"
                value='Application - game'
                checked={selectedOption === 'Application - game'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - mobile commerce'
                name="group1"
                value='Application - mobile commerce'
                checked={selectedOption === 'Application - mobile commerce'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - social media'
                name="group1"
                value='Application - social media'
                checked={selectedOption === 'Application - social media'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - utility'
                name="group1"
                value='Application - utility'
                checked={selectedOption === 'Application - utility'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                label='Application - other'
                name="group1"
                value='Application - other'
                checked={selectedOption === 'Application - other'}
                onChange={handleOptionChange}
              />
              <Form.Check
                type='radio'
                id='itemid'
                label='Plug-in'
                name="group1"
                value='Plug-in'
                checked={selectedOption === 'Plug-in'}
                onChange={handleOptionChange}
              />

              <Form.Check
                type='radio'
                label=''
                name="group1"
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

             

                <Form.Check
                  type='radio'
                  label='Develop a Plug-in'
                  name="develop"
                  value='Develop a Plug-in'
                  checked={selectedOption === 'Develop a Plug-in'}
                  onChange={handleOptionChange}
                 
                />

                <Form.Check
                  type='radio'
                  label='Develop a new app'
                  name="develop"
                  value='Develop a new app'
                  checked={selectedOption === 'Develop a new app'}
                  onChange={handleOptionChange}
                 
                />


              



             
                <Form.Check
                  type='radio'
                  label='Change a plug-in that already exists'
                  name="develop"
                  value='Change a plug-in that already exists'
                  checked={selectedOption === 'Change a plug-in that already exists'}
                  onChange={handleOptionChange}
                 
                />
                <Form.Check
                  type='radio'
                  label='Changes to an app that already exists'
                  name="develop"
                  value='Changes to an app that already exists'
                  checked={selectedOption === 'Changes to an app that already exists'}
                  onChange={handleOptionChange}
                 
                />


              



              <Form.Check
                type='radio'
                label='I would like to discuss this with the pro'
                name="develop"
                value='I would like to discuss this with the pro'
                checked={selectedOption === 'I would like to discuss this with the pro'}
                onChange={handleOptionChange}
              />


              <Form.Check
                type='radio'
                label=''
                name="develop"
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

              <h3 className='center mb-4'>Which platform(s) is this needed for?</h3>

              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='Android'
                name="needed"
                value='Android'
              />
              <Form.Check // prettier-ignore
                type='checkbox'
                id='iOS'
                label='checkbox'
                name="needed"
                value='iOS'
              />
              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='Windows store'
                name="needed"
                value='Windows store'
              />





              <Form.Check
                type='radio'
                label=''
                name="needed"
              />
              <input type="text" className={styles.name3} name="name3" placeholder='Other' />

              <div className={styles.ther}>
                <Link className={styles.back} onClick={back1} href='#'>Back</Link>
                <Link className={styles.raop} onClick={game8} href='#'>Continue</Link>
              </div>
            </div>
            :
            ''
          }


          {gameshow3 ?
            <div className="mb-3 proisting">

              <h3 className='center mb-4'>Which programming language(s) <br></br> would you consider using?</h3>

              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='.NET'
                name="consider"
                value='.NET'
              />
              <Form.Check // prettier-ignore
                type='checkbox'
                id='iOS'
                label='checkbox'
                name="consider"
                value='Adobe AIR'
              />
              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='C#'
                name="consider"
                value='C#'
              />


              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='Java ME'
                name="consider"
                value='Java ME'
              />

              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='Objective C'
                name="consider"
                value='Objective C'
              />

              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='Swift'
                name="consider"
                value='Swift'
              />


              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='I`m not sure'
                name="consider"
                value='I`m not sure'
              />

              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkbox'
                label='I`m looking for guidance from the pro'
                name="consider"
                value='I`m looking for guidance from the pro'
              />


              <Form.Check
                type='radio'
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
              <Form.Check // prettier-ignore
                type='radio'
                label='Yes'
                name="budget"
                value='Yes'
                checked={selectedOption === 'Yes'}
                onChange={handleOptionChange}
              />
              <Form.Check // prettier-ignore
                type='radio'
                label='No - I need guidance from the pro'
                name="budget"
                value='No - I need guidance from the pro'
                checked={selectedOption === 'No - I need guidance from the pro'}
                onChange={handleOptionChange}
              />
              <Form.Check // prettier-ignore
                type='radio'
                label='I`m not sure'
                name="budget"
                value='I`m not sure'
                checked={selectedOption === 'I`m not sure'}
                onChange={handleOptionChange}
              />

              <Form.Check
                type='radio'
                label=''
                name="budget"
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

              {selectedOption === 'Yes' ?

                <div>
                  <h3 className='center mb-4'>What is your budget for the project?</h3>

                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Less than £1,000'
                    name="project"
                    value='Less than £1,000'
                    checked={selectedOption === 'Less'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='£1,000 - £2,999'
                    name="project"
                    value='£1,000 - £2,999'
                    checked={selectedOption === 'dollor'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='£3,000 - £4,999'
                    name="project"
                    value='£3,000 - £4,999'
                    checked={selectedOption === 'sell'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='£5,000 - £9,999'
                    name="project"
                    value='£5,000 - £9,999'
                    checked={selectedOption === 'plus2'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='£10,000 - £19,999'
                    name='project'
                    value='£10,000 - £19,999'
                    checked={selectedOption === 'divide'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='£20,000 or more'
                    name="project"
                    value='£20,000 or more'
                    checked={selectedOption === 'more'}
                    onChange={handleOptionChange}
                  />
               

                  <Form.Check
                    type='radio'
                    label=''
                    name="project"
                  />
                  <input type="text" className={styles.name3} name="name3" placeholder='Other' />
                </div>


                :

                <div>
                  <h3 className='center mb-4'>How soon would you like the project to begin?</h3>

                  <Form.Check // prettier-ignore
                    type='radio'
                    label='ASAP'
                    name="week"
                    value='ASAP'
                    checked={selectedOption === 'ASAP'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Within a week'
                    name="week"
                    value='Within a week'
                    checked={selectedOption === 'Within a week'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Within 2 weeks'
                    name="week"
                    value='Within 2 weeks'
                    checked={selectedOption === 'Within 2 weeks'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Within a month'
                    name="week"
                    value='Within a month'
                    checked={selectedOption === 'Within a month'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Within 2 months'
                    name="week"
                    value='Within 2 months'
                    checked={selectedOption === 'Within 2 months'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='Within 3 months'
                    name="week"
                    value='Within 3 months'
                    checked={selectedOption === 'Within 3 months'}
                    onChange={handleOptionChange}
                  />
                  <Form.Check // prettier-ignore
                    type='radio'
                    label='I`m not sure'
                    name="week"
                    value='I`m not sure'
                    checked={selectedOption === 'I`m not sure'}
                    onChange={handleOptionChange}
                  />

                  <Form.Check
                    type='radio'
                    label=''
                    name="week"
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

              <Form.Check // prettier-ignore
                type='radio'
                id='checkbox'
                label='I`m ready to hire now'
                name="group1"
                value='I`m ready to hire now'
              />
              <Form.Check // prettier-ignore
                type='radio'
                id='iOS'
                label='I`m definitely going to hire someone'
                name="I`m definitely going to hire someone"
                value='I`m definitely going to hire someone'
              />
              <Form.Check // prettier-ignore
                type='radio'
                id='checkbox'
                label='I`m likely to hire someone'
                name="I`m likely to hire someone"
                value='I`m likely to hire someone'
              />
              <Form.Check // prettier-ignore
                type='radio'
                id='checkbox'
                label='I will possibly hire someone'
                name="I will possibly hire someone"
                value='I will possibly hire someone'
              />
              <Form.Check // prettier-ignore
                type='radio'
                id='checkbox'
                label='I`m planning and researching'
                name="I`m planning and researching"
                value='I`m planning and researching'
              />


              <Form.Check
                type='radio'
                label=''
                name="group1"
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
                <input type='text' className='form-control' placeholder="Enter your Name"></input>
                <input type='email' className='form-control mt-3' placeholder="Enter your Eamil"></input>
                <input type='number' className='form-control mt-3' placeholder="Enter your Phone No"></input>
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