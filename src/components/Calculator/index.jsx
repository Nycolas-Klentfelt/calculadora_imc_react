import React, { useState } from 'react';
import style from './Calculator.module.css'

const Calculator = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erroPeso, setErroPeso] = useState(false);
    const [erroAltura, setErroAltura] = useState(false);

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        const pesoInvalido = !pesoNum;
        const alturaInvalida = !alturaNum || alturaNum === 0;
        
        setErroPeso(pesoInvalido);
        setErroAltura(alturaInvalida);

        if (pesoInvalido || alturaInvalida) {
            setResultado(
                <p className={style.resultado}>
                    Preencha os campos corretamente.
                </p>
            );
            return
        }
    
        const imc = pesoNum / (alturaNum * alturaNum);
        let classificacao = '';
    
        if(imc > 40.0) {
            classificacao = 'com obesidade grau 3';
        } else if(imc > 35.0 && imc < 39.99){
            classificacao = 'com obesidade grau 2';
        }else if(imc > 30.0 && imc < 34.99){
            classificacao = 'com obesidade grau 1';
        }else if(imc > 25.0 && imc < 29.99){
            classificacao = 'com Sobrepeso';
        }else if(imc > 18.6 && imc < 24.99){
            classificacao = 'Normal';
        }else if(imc > 0 && imc < 18.5){
            classificacao = 'Abaixo do normal';
        }
    
        setResultado(
            <p className={style.resultado}>
                Seu IMC é {imc.toFixed(2)} e você está {classificacao}!
            </p>
        );
    }

    return (
        <main className='container'>
            <div id='calculator' className={style.calculator}>
                
                <ul className={style.list}>
                    <li className={style.item}>
                        <h2>Calcule seu IMC</h2>
                    </li>
                    <li className={style.item}>
                        <label htmlFor="altura">Altura</label>
                        <input id='altura' className={erroAltura ? style.inputErro : style.input} type="number" placeholder='ex: 1.70m' value={altura} onChange={(e) => setAltura(e.target.value)}/>
                    </li>
                    <li className={style.item}>
                        <label htmlFor="peso">Peso</label>
                        <input id='peso' className={erroPeso ? style.inputErro : style.input} type="number" placeholder='ex: 70Kg' value={peso} onChange={(e) => setPeso(e.target.value)}/>
                    </li>
                    <li className={style.item}>
                        <button className={style.button} onClick={calcularIMC}  type='submit'>
                            <b>CALCULAR</b>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                { resultado }
            </div>
        </main>
    )
}


export default Calculator