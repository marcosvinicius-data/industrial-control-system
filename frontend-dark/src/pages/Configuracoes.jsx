import { useState, useEffect } from "react";
import "./Configuracoes.css";

export default function Configuracoes() {

  const [config, setConfig] = useState({
    nome: "",
    perfil: "Usuário",
    setor: "",
    organizacao: "",
    projeto: "",
    notificacoes: true
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("configSistema");

    if (dadosSalvos) {
      setConfig(JSON.parse(dadosSalvos));
    }
  }, []);

  const salvarConfig = () => {
    localStorage.setItem("configSistema", JSON.stringify(config));
    alert("Configurações salvas com sucesso!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setConfig((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="config-container">
      <h1>⚙️ Configurações</h1>

      {/* USUÁRIO */}
      <div className="config-card">
        <h2>👤 Usuário</h2>

        <label>Nome</label>
        <input
          name="nome"
          placeholder="Digite seu nome"
          value={config.nome}
          onChange={handleChange}
        />

        <label>Perfil</label>
        <select
          name="perfil"
          value={config.perfil}
          onChange={handleChange}
        >
          <option>Usuário</option>
          <option>Administrador</option>
        </select>

        <label>Setor</label>
        <input
          name="setor"
          placeholder="Ex: Produção"
          value={config.setor}
          onChange={handleChange}
        />
      </div>

      {/* SISTEMA */}
      <div className="config-card">
        <h2>🏢 Aplicação</h2>

        <label>Organização</label>
        <input
          name="organizacao"
          placeholder="Nome da empresa"
          value={config.organizacao}
          onChange={handleChange}
        />

        <label>Projeto</label>
        <input
          name="projeto"
          placeholder="Nome do sistema"
          value={config.projeto}
          onChange={handleChange}
        />
      </div>

      {/* PREFERÊNCIAS */}
      <div className="config-card">
        <h2>🔔 Preferências</h2>

        <div className="linha">
          <span>Receber notificações</span>
          <input
            type="checkbox"
            name="notificacoes"
            checked={config.notificacoes}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn-salvar" onClick={salvarConfig}>
        💾 Salvar Configurações
      </button>
    </div>
  );
}