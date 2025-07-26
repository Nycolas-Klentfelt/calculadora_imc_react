import style from './AboutIMC.module.css'

const AboutIMC = () => {
    return(
        <div className='container'>
            <div id='about' className={style.about}>
                <h2 className={style.title}>
                    O que é <b>IMC</b>
                </h2>
                <p className={style.text}>O IMC (Índice de Massa Corporal) é uma medida utilizada para avaliar se o peso de uma pessoa está adequado em relação à sua altura. Embora o IMC seja uma ferramenta útil para avaliar a saúde geral, ele não leva em conta a composição corporal, como a quantidade de massa muscular ou gordura, e pode não ser completamente preciso para todas as pessoas, especialmente atletas ou pessoas com diferentes tipos de corpo.</p>
            </div>
        </div>
    )
}


export default AboutIMC;