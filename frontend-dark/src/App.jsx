import React, { useState } from "react";
import "./App.css";

import VisaoGeral from "./pages/VisaoGeral";
import Producao from "./pages/Producao";
import Relatorios from "./pages/Relatorios";

import { LayoutDashboard, BarChart3, Factory,  LogOut  } from "lucide-react";
import Login from "./pages/Login";

import Alertas from "./pages/Alertas";
import Manutencao from "./pages/Manutencao";
import Logs from "./pages/Logs";
import Configuracoes from "./pages/Configuracoes";

import { Bell, Wrench, FileText, Settings } from "lucide-react";


export default function App() {

  const [abaAtiva, setAbaAtiva] = useState("visao");
  const [logado, setLogado] = useState(false);

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }

  return (
    <div className="dashboard-layout">

      <aside className="sidebar">

        <h2> Robô Control</h2>

        <div className="btn-sidebar">
        <button 
        className={abaAtiva === "visao" ? "ativo" : ""}
        onClick={() => setAbaAtiva("visao")}
      >
        <LayoutDashboard size={20}/>
        Visão Geral
      </button>
       </div>

      <div className="btn-sidebar">
      <button 
        className={abaAtiva === "producao" ? "ativo" : ""}
        onClick={() => setAbaAtiva("producao")}
      >
        <Factory size={20}/>
        Produção
      </button>
      </div>
      
      <div className="btn-sidebar">
      <button 
        className={abaAtiva === "relatorios" ? "ativo" : ""}
        onClick={() => setAbaAtiva("relatorios")}
      >
        <BarChart3 size={20}/>
        Relatórios
      </button>
      </div>

      <div className="btn-sidebar">
  <button 
    className={abaAtiva === "manutencao" ? "ativo" : ""}
    onClick={() => setAbaAtiva("manutencao")}
  >
    <Wrench size={20}/>
    Manutenção
  </button>
</div>

<div className="btn-sidebar">
  <button 
    className={abaAtiva === "alertas" ? "ativo" : ""}
    onClick={() => setAbaAtiva("alertas")}
  >
    <Bell size={20}/>
    Alertas
  </button>
</div>

  <div className="btn-sidebar">
    <button 
      className={abaAtiva === "logs" ? "ativo" : ""}
      onClick={() => setAbaAtiva("logs")}
    >
      <FileText size={20}/>
      Historico
    </button>
  </div>

  <div className="btn-sidebar">
    <button 
      className={abaAtiva === "config" ? "ativo" : ""}
      onClick={() => setAbaAtiva("config")}
    >
      <Settings size={20}/>
      Configurações
    </button>
  </div>

        {/* LOGOUT */}
        <button 
          className="btn-logout" 
          onClick={() => setLogado(false)}
        >
           <LogOut size={20} />
          Sair
        </button>

      </aside>

      <main className="main-area">

        {abaAtiva === "visao" && <VisaoGeral />}
        {abaAtiva === "producao" && <Producao />}
        {abaAtiva === "relatorios" && <Relatorios />}
        {abaAtiva === "manutencao" && <Manutencao />}
        {abaAtiva === "alertas" && <Alertas />}
        {abaAtiva === "logs" && <Logs />}
        {abaAtiva === "config" && <Configuracoes />}

      </main>

    </div>
  );
}