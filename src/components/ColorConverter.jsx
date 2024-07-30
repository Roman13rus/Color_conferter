import React, { useState } from 'react'



const ColorConverter = () => {
  const [hexValue, setHexValue] = useState('')
  const [rgbValue, setRgbValue] = useState('Your RGB code')

  function toRgb(hexCode) {
    const rgbArr = [];
    if (/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) {
      setHexValue(hexCode)
        hexCode = hexCode.split('#')[1] || hexCode;
          for (let i = 0; i < hexCode.length; i += 2) {
              rgbArr.push(parseInt(hexCode[i] + hexCode[i + 1], 16));
          }
          setRgbValue(`rgb(${rgbArr.join(', ')})`);
          document.body.style.backgroundColor = `rgb(${rgbArr.join(', ')})`;
      } else {
          document.body.style.backgroundColor = 'red';
          setRgbValue('Ошибка')
      }
    }

  return (
    <div className="wrapper">
      <label htmlFor="hex">HEX TO RGB</label>
      <input
        type="text"
        id="hex"
        value={hexValue}
        onChange={(e) => {
          setHexValue(e.target.value);
          if(e.target.value.length === 7) {
            toRgb(e.target.value);
          }
            }}
          placeholder="Enter HEX Value"
      />
        <div className='rgb_value'>
            {rgbValue}
        </div>
    </div>
  )
}

export default ColorConverter