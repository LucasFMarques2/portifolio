import styles from "./Presentation.module.css";
import { FullButton } from '../../Elements/FullButton';
import { useEffect, useState } from "react";

export function Presentation() {
  const [text, setText] = useState('');
  const toRotate = ["Lucas Freitas...", "Desenvolvedor Front End...", "Desenvolvedor Web"];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);


  useEffect(()=>{
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return()=> {clearInterval(ticker)}

  }, [text])

  const toType = () =>{
    let i = loop  % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

    setText(updatedText);

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
    
    }
  }

  return (
    <div className={styles.presentation} id="Presentation">
      <p>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </p>
      <h1>Olá, eu sou {text}</h1>
      <p>
        Graduado em Análise e Desenvolvimento de Sistemas, especializado em
        criação de sites. Possuo 3 anos de experiência prática, me destaco em
        linguagens e tecnologias como HTML, CSS, JavaScript, React,
        Styled-components e WordPress. Além disso possuo conhecimentos avançados
        em administração de servidores Ubuntu, versionamento com Git e
        gerenciamento de bancos de dados SQL
      </p>

      <FullButton text='Conecte-se comigo!' link='https://www.linkedin.com/in/lucasfreitasm/'/>
    </div>
  );
}
