import { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import styled, { keyframes } from "styled-components";
import "./stacks.css";

import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";
import {
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiScrumalliance,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 15px var(--glow-color); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  color: white;
  overflow-x: hidden;
`;

const NodeStyled = styled.div<{ $bgColor?: string; $glow?: string }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor || "#0a0a0a"};
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 22px;
  --glow-color: ${(props) => props.$glow || "transparent"};
  animation: ${glowPulse} 4s infinite ease-in-out;

  .react-flow__handle {
    opacity: 0;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkillNode = ({ data }: any) => (
  <NodeStyled $bgColor={data.bgColor} $glow={data.glow}>
    <Handle type="target" position={Position.Top} />
    {data.icon}
    <Handle type="source" position={Position.Bottom} />
  </NodeStyled>
);

const nodeTypes = { skill: SkillNode };

export const SkillsMindMap = () => {
  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = winWidth < 850;

  const nodes = useMemo(() => {
    const centers = {
      fe: isMobile ? { x: winWidth / 2 - 22, y: 150 } : { x: 200, y: 250 },
      be: isMobile ? { x: winWidth / 2 - 22, y: 600 } : { x: 550, y: 250 },
      tl: isMobile ? { x: winWidth / 2 - 22, y: 1050 } : { x: 900, y: 250 },
      db: isMobile ? { x: winWidth / 2 - 22, y: 1500 } : { x: 1250, y: 250 },
    };

    return [
      // CENTROS
      {
        id: "c-fe",
        type: "skill",
        position: centers.fe,
        data: { icon: <FaCode />, bgColor: "#2563eb", glow: "#3b82f6" },
      },
      {
        id: "c-be",
        type: "skill",
        position: centers.be,
        data: { icon: <FaServer />, bgColor: "#9333ea", glow: "#a855f7" },
      },
      {
        id: "c-tl",
        type: "skill",
        position: centers.tl,
        data: { icon: <FaTools />, bgColor: "#16a34a", glow: "#22c55e" },
      },
      {
        id: "c-db",
        type: "skill",
        position: centers.db,
        data: { icon: <FaDatabase />, bgColor: "#db7a0c", glow: "#f59e0b" },
      },

      // FRONT-END (7)
      {
        id: "fe-js",
        type: "skill",
        position: { x: centers.fe.x - 90, y: centers.fe.y - 80 },
        data: { icon: <SiJavascript color="#f7df1e" /> },
      },
      {
        id: "fe-ts",
        type: "skill",
        position: { x: centers.fe.x + 90, y: centers.fe.y - 80 },
        data: { icon: <SiTypescript color="#3178c6" /> },
      },
      {
        id: "fe-react",
        type: "skill",
        position: { x: centers.fe.x, y: centers.fe.y - 140 },
        data: { icon: <SiReact color="#61dafb" /> },
      },
      {
        id: "fe-next",
        type: "skill",
        position: { x: centers.fe.x - 130, y: centers.fe.y + 10 },
        data: { icon: <SiNextdotjs /> },
      },
      {
        id: "fe-tail",
        type: "skill",
        position: { x: centers.fe.x + 130, y: centers.fe.y + 10 },
        data: { icon: <SiTailwindcss color="#06b6d4" /> },
      },
      {
        id: "fe-mui",
        type: "skill",
        position: { x: centers.fe.x - 60, y: centers.fe.y + 110 },
        data: { icon: <SiMui color="#007fff" /> },
      },
      {
        id: "fe-styled",
        type: "skill",
        position: { x: centers.fe.x + 60, y: centers.fe.y + 110 },
        data: { icon: <SiStyledcomponents color="#db7093" /> },
      },

      // BACK-END (5)
      {
        id: "be-node",
        type: "skill",
        position: { x: centers.be.x - 90, y: centers.be.y - 80 },
        data: { icon: <SiNodedotjs color="#339933" /> },
      },
      {
        id: "be-nest",
        type: "skill",
        position: { x: centers.be.x + 90, y: centers.be.y - 80 },
        data: { icon: <SiNestjs color="#e0234e" /> },
      },
      {
        id: "be-api",
        type: "skill",
        position: { x: centers.be.x, y: centers.be.y - 140 },
        data: { icon: <SiExpress color="#fff" /> },
      },
      {
        id: "be-prisma",
        type: "skill",
        position: { x: centers.be.x - 70, y: centers.be.y + 110 },
        data: { icon: <SiPrisma color="#fff" /> },
      },
      {
        id: "be-orm",
        type: "skill",
        position: { x: centers.be.x + 70, y: centers.be.y + 110 },
        data: { icon: <SiTypeorm color="#fb1515" /> },
      },

      // FERRAMENTAS (6)
      {
        id: "tl-git",
        type: "skill",
        position: { x: centers.tl.x - 90, y: centers.tl.y - 80 },
        data: { icon: <SiGit color="#f05032" /> },
      },
      {
        id: "tl-jest",
        type: "skill",
        position: { x: centers.tl.x + 90, y: centers.tl.y - 80 },
        data: { icon: <SiJest color="#c21325" /> },
      },
      {
        id: "tl-figma",
        type: "skill",
        position: { x: centers.tl.x, y: centers.tl.y - 140 },
        data: { icon: <SiFigma color="#f24e1e" /> },
      },
      {
        id: "tl-scrum",
        type: "skill",
        position: { x: centers.tl.x - 130, y: centers.tl.y + 10 },
        data: { icon: <SiScrumalliance color="#51a1d1" /> },
      },
      {
        id: "tl-npm",
        type: "skill",
        position: { x: centers.tl.x + 130, y: centers.tl.y + 10 },
        data: { icon: <SiNpm color="#cb3837" /> },
      },
      {
        id: "tl-expo",
        type: "skill",
        position: { x: centers.tl.x, y: centers.tl.y + 110 },
        data: { icon: <SiExpo color="#fff" /> },
      },

      // BANCO DE DADOS (4)
      {
        id: "db-mysql",
        type: "skill",
        position: { x: centers.db.x - 90, y: centers.db.y - 80 },
        data: { icon: <SiMysql color="#4479a1" /> },
      },
      {
        id: "db-postgre",
        type: "skill",
        position: { x: centers.db.x + 90, y: centers.db.y - 80 },
        data: { icon: <SiPostgresql color="#4169e1" /> },
      },
      {
        id: "db-mongo",
        type: "skill",
        position: { x: centers.db.x, y: centers.db.y - 140 },
        data: { icon: <SiMongodb color="#47a248" /> },
      },
      {
        id: "db-sqlite",
        type: "skill",
        position: { x: centers.db.x, y: centers.db.y + 110 },
        data: { icon: <SiSqlite color="#003b57" /> },
      },
    ];
  }, [isMobile, winWidth]);

  const edges = useMemo(() => {
    const groups = [
      {
        from: "c-fe",
        color: "#3b82f6",
        to: [
          "fe-js",
          "fe-ts",
          "fe-react",
          "fe-next",
          "fe-tail",
          "fe-mui",
          "fe-styled",
        ],
      },
      {
        from: "c-be",
        color: "#a855f7",
        to: ["be-node", "be-nest", "be-api", "be-prisma", "be-orm"],
      },
      {
        from: "c-tl",
        color: "#22c55e",
        to: ["tl-git", "tl-jest", "tl-figma", "tl-scrum", "tl-npm", "tl-expo"],
      },
      {
        from: "c-db",
        color: "#f59e0b",
        to: ["db-mysql", "db-postgre", "db-mongo", "db-sqlite"],
      },
    ];

    return groups.flatMap((g) =>
      g.to.map((target) => ({
        id: `e-${g.from}-${target}`,
        source: g.from,
        target: target,
        className: "base-edge neuron-flow",
        style: { stroke: g.color, strokeWidth: 2, "--edge-color": g.color },
      }))
    );
  }, []);

  const carouselIcons = [
    <SiJavascript />,
    <SiTypescript />,
    <SiReact />,
    <SiNextdotjs />,
    <SiTailwindcss />,
    <SiNodedotjs />,
    <SiNestjs />,
    <SiPrisma />,
    <SiMongodb />,
    <SiPostgresql />,
    <SiMysql />,
    <SiGit />,
  ];

  return (
    <Container>
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h4 className="title">
          <FaCode /> Tecnologias
        </h4>
        <h1 style={{ fontSize: "2.2rem" }}>
          Skills & <span className="txt-gradient">Ferramentas</span>
        </h1>
      </div>

      <div style={{ height: isMobile ? "1800px" : "650px", width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          preventScrolling={false}
          zoomOnScroll={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          panOnDrag={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#111" gap={20} />
        </ReactFlow>
      </div>

      <div className="stacks_container">
        <div className="box_stack">
          <h4 style={{ color: "#2664eb" }}>Front-end</h4>
          <p>React</p>
          <p>Next.js</p>
          <p>Tailwind CSS</p>
          <p>Material UI</p>
        </div>
        <div className="box_stack">
          <h4 style={{ color: "#9234eb" }}>Back-end</h4>
          <p>Nest</p>
          <p>Node</p>
          <p>Express</p>
          <p>Prisma / TypeORM</p>
        </div>
        <div className="box_stack">
          <h4 style={{ color: "#16a34a" }}>Ferramentas</h4>
          <p>Jest</p>
          <p>Git</p>
          <p>Scrum</p>
          <p>Figma</p>
        </div>
        <div className="box_stack">
          <h4 style={{ color: "#db7a0c" }}>Banco de Dados</h4>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>SQLite</p>
        </div>
      </div>

      <div className="carousel_wrapper">
        <div className="carousel_track">
          {[...carouselIcons, ...carouselIcons].map((icon, i) => (
            <div key={i} className="carousel_icon">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
