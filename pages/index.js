import MyHead from '../Components/Head';
import Footer from '../Components/Footer';
import styles from '../styles/Home.module.css';
import getPassword from '../Functions/getPasswd';
import React, { useState, useEffect } from 'react';
import copyToClipboard from '../Functions/copyToClipboard';
import SelectComponent from '../Components/SelectComponent';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(1);
  const [min, setMin] = useState();
  const [lowercase, setLowercase] = useState();
  const [uppercase, setUppercase] = useState();
  const [numbers, setNumbers] = useState();
  const [special, setSpecial] = useState();

  useEffect(() => {
    setMin([lowercase, uppercase, numbers, special].filter(Boolean).length > 0 ? [lowercase, uppercase, numbers, special].filter(Boolean).length : 1);
  }, [length, lowercase, uppercase, numbers, special]);

  return (
    <div
      className={styles.container}
    >
      <MyHead />

      <main
        className={styles.main}
      >

        <h1
          className={styles.title}
        >
          Welcome to GenPasswd
        </h1>


        <div
          className={styles.containerMenu}
        >

          <h2
            className={styles.textLengtDiv}
          >
            Password Generator
          </h2>

          <div
            className={styles.resultDiv}
          >

            <span
              className={styles.resultDisplay}
            >
              {password}
            </span>

            <button
              className={styles.buttonResult}
              onClick={() => copyToClipboard(password)}
            >
              <FontAwesomeIcon
                icon={faClipboard}
                color="#54637c"
              />
            </button>

          </div>

          <div
            className={styles.lengthDiv}
          >
            <h4
              className={styles.lengtText}
            >
              Password length
            </h4>

            <input
              className={styles.containerInput}
              type="number"
              value={length < min ? min : length}
              min={min}
              max="20"
              onChange={(len) => {
                setLength(len.target.value);
              }}
            />

          </div>

          <SelectComponent
            text="Include uppercase letters"
            onChange={(r) => { setLowercase(r.target.checked) }}
          />

          <SelectComponent
            text="Include lowercase letters"
            onChange={(r) => { setUppercase(r.target.checked) }}
          />
          <SelectComponent
            text="Include numbers"
            onChange={(r) => { setNumbers(r.target.checked) }}
          />

          <SelectComponent
            text="Include symbols"
            onChange={(r) => { setSpecial(r.target.checked) }}
          />

          <button
            className={styles.buttonGen}
            onClick={() => {
              [lowercase, uppercase, numbers, special].filter(Boolean).length > 0 
              ? setPassword(getPassword(length, lowercase, uppercase, numbers, special)) 
              : setPassword(getPassword(length, true, uppercase, numbers, special))
            }}
          >
            Generate password
          </button>

        </div>

      </main>

      <Footer />

    </div>
  )
}