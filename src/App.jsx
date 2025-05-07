import React from 'react';
import './style.css';
import FormularioProdutor from './FormularioProdutor';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1><strong>D</strong>YNA STARTUP</h1>
      </div>

      <div className="main-container">

        <div className="banner-section">
        <div className='aux'>
          <h3>REDUZA ATÉ <strong>30%</strong> O CONSUMO DE <strong>DIESEL</strong> POR SAFRA</h3>
          </div>
          <div className='aux-text'>
          <p className="highlight">Não é Magica. É Técnica! Entre em contato e saiba como agendar uma visita</p>
          <p className="description">
          Com a dyna, nossos clientes alcançam, por safra, uma redução em até 30% por máquina. Nossa metodologia incorpora conhecimentos em Engenharia Agrícola aplicada a motores de tratores.
          </p>
          </div>
          
        </div>

        <div className="content-section">
          <div className='aux-2'>
            <h2>Otimização Energética de Motores Agrícolas</h2>
            <p>Nossa solução é baseada em curvas de iso-potência de tratores agrícolas.</p> 
            <p>Quando capturamos, em campo, os dados do motor, podemos realizar um cálculo que encontra a maneira mais otimizada para operação dos tratores. Através dessa solução, é possível obter até 30% de redução no consumo de diesel por trator!</p>
          </div>
          <div className='aux-2'>
            <FormularioProdutor />
          </div>
        </div>

        <section className="py">
        <div className="containere">
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Agende um horário</h2>
                  <p className="card-text">Entramos em contato com o produtor, fazemos uma reunião e entendemos quais são as operações e equipamentos utilizados.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Análise de campo</h2>
                  <p className="card-text">Vamos a campo e extraímos os dados do motor.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Redução na prática</h2>
                  <p className="card-text">Geramos um relatório de operação, com um sistema mobile que indica os momentos de troca de marcha, integrando dados de telemetria.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
          <div className="card-body">
              <h3 className="card-title">Entenda nosso modelo de contrato</h3>
              <p className="card-text">Adotamos um sistema <strong>15-10-5</strong> com base nos <strong>30% de redução de custos</strong> que o produtor alcança através de nossa parceria. Veja como distribuímos os resultados:</p>
              <ul>
                  <li><strong>10%</strong> são destinados à nossa startup para manutenção e aprimoramento contínuo dos serviços</li>
                  <li><strong>5%</strong> são bonificação direta ao tratorista por seguir rigorosamente as práticas recomendadas</li>
              </ul>
              <p className="card-text"><em>Dessa forma, todos ganham quando os resultados são alcançados!</em></p>
          </div>
        </div>

        </div>
      </section>

        <div className="footer">
          <h3 className="footer-logo">@dyna.agritech</h3>
          <p className="footer-text"> <strong>DYNA</strong> STARTUP | OTIMIZAÇÃO ENERGÉTICA VIA MODELAGEM DE MOTORES AGRÍCOLAS | FEAGRI UNICAMP</p>
        </div>
      </div>
    </div>
  );
}

export default App;