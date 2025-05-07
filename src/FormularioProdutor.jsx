import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function FormularioProdutor() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card">
            <div className="card-body p-4">
              <h2>Agende um horário</h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Nome" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Nome da Fazenda" required />
                </div>
                <div className="col-md-6">
                  <input type="number" className="form-control" placeholder="Tamanho da produção (ha)" required />
                </div>
                <div className="col-md-6">
                  <input type="number" className="form-control" placeholder="Quantidade de tratores" required />
                </div>
                <div className="col-md-6">
                  <input type="number" className="form-control" placeholder="Gasto médio com diesel por safra (R$)" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Operações realizadas (ex: plantio, colheita...)" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Região de atuação (UF/Cidade)" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="E-mail de contato" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Telefone / WhatsApp" required />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Observações adicionais (opcional)"></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success w-100">Enviar Informações</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}