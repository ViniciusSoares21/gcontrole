import React from 'react'
import styles from './Content.module.css'
import formImg from '../images/form.jpg'
import flistImg from '../images/list.jpg'

function Content() {
  return (
    <section className={styles.container}>
      <h1>
        Experimente GRATUITAMENTE o GCONTROLE e descubra como gerenciar suas Finanças Pessoais de forma prática,
        para alcançar seus objetivos. Descubra o que nossa ferramenta pode oferecer para você agora!
      </h1>
      <p>
        Gerenciar as finanças pessoais pode parecer desafiador, mas é uma habilidade essencial para
        alcançar seus objetivos financeiros, e viver de maneira mais tranquila e realizada.
      </p>
      <p>
        Com o nosso site, poderá visualizar seus gastos, e ajudara a manter suas contas mais
        organizada, e ter acesso ao controle sobre suas financias, de forma simples e rápida para
        ajudar no dia a dia.
      </p>
      <p>
      Além disso, é importante monitorar suas despesas, buscar formas de economizar dinheiro 
      em diferentes áreas e investir em sua educação financeira.
      </p>
      <p>
      Aqui podemos visualizar uma forma mais prática e simples para monitorar suas despesas.
      Primeiramente adicione sua renda mensal, e a forma que foi recebida, na descrição informe
      a categoria salário.
      </p>
      <img className={styles.imgForm} src={formImg} alt="formulario" />
      <p>
        Em seguida adicione seus gastos diários, da mesma forma: <strong>valor | forma de pagamento |
        Descrição | categoria da despesa.</strong>
      </p>
      <p>
        Assim que adicionar todos os gastos, mostrara uma lista com todas as despesas, e você
        poderá filtrar por categoria ou pagamento que desejar.
      </p>
      <img className={styles.imgForm} src={flistImg} alt="lista com despesas" />
      <p>
        Para ter mais acesso ao controle de despesa mostrara gráficos representativos para visualizar
        de forma mais visível as porcentagens mais gastas.
      </p>
      <p>
        Com essas práticas em mente, você poderá transformar sua vida financeira e alcançar seus
        objetivos com mais facilidade.
      </p>
    </section>
  )
}

export default Content