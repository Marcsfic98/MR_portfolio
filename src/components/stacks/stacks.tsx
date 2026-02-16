import { useMemo } from "react";
import ReactFlow, { Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import styled, { keyframes } from "styled-components";
import "./stacks.css";

// Ícones (Certifique-se de instalar: npm install react-icons)
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
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

// --- Animações ---
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 15px var(--glow-color); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
`;

// --- Styled Components ---
const Container = styled.div`
  width: 100%;
  height: 150vh;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
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

const CarouselContainer = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
  gap: 60px;
  padding: 0 30px;
`;

const CarouselIcon = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

// --- Componentes ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkillNode = ({ data }: any) => (
  <NodeStyled $bgColor={data.bgColor} $glow={data.glow}>
    <Handle type="target" position={Position.Top} />
    {data.icon}
    <Handle type="source" position={Position.Bottom} />
  </NodeStyled>
);

const nodeTypes = { skill: SkillNode };

const allIcons = [
  <SiJavascript />,
  <SiTypescript />,
  <SiReact />,
  <SiNextdotjs />,
  <SiHtml5 />,
  <SiCss3 />,
  <SiTailwindcss />,
  <SiMui />,
  <SiStyledcomponents />,
  <SiNodedotjs />,
  <SiNestjs />,
  <SiExpress />,
  <SiPrisma />,
  <SiTypeorm />,
  <SiMongodb />,
  <SiMysql />,
  <SiPostgresql />,
  <SiSqlite />,
  <SiJest />,
  <SiGit />,
  <SiExpo />,
  <SiJsonwebtokens />,
];

export const SkillsMindMap = () => {
  const nodes = useMemo(
    () => [
      // --- CENTROS ---
      {
        id: "c-fe",
        type: "skill",
        position: { x: 250, y: 250 },
        data: { icon: <FaCode />, bgColor: "#2563eb", glow: "#3b82f6" },
      },
      {
        id: "c-be",
        type: "skill",
        position: { x: 650, y: 250 },
        data: { icon: <FaServer />, bgColor: "#9333ea", glow: "#a855f7" },
      },
      {
        id: "c-tl",
        type: "skill",
        position: { x: 1050, y: 250 },
        data: { icon: <FaTools />, bgColor: "#16a34a", glow: "#22c55e" },
      },

      // --- FRONT-END NODES ---
      {
        id: "fe-js",
        type: "skill",
        position: { x: 150, y: 150 },
        data: { icon: <SiJavascript color="#f7df1e" /> },
      },
      {
        id: "fe-ts",
        type: "skill",
        position: { x: 350, y: 150 },
        data: { icon: <SiTypescript color="#3178c6" /> },
      },
      {
        id: "fe-react",
        type: "skill",
        position: { x: 250, y: 80 },
        data: { icon: <SiReact color="#61dafb" /> },
      },
      {
        id: "fe-next",
        type: "skill",
        position: { x: 100, y: 250 },
        data: { icon: <SiNextdotjs /> },
      },
      {
        id: "fe-tail",
        type: "skill",
        position: { x: 400, y: 250 },
        data: { icon: <SiTailwindcss color="#06b6d4" /> },
      },
      {
        id: "fe-mui",
        type: "skill",
        position: { x: 180, y: 380 },
        data: { icon: <SiMui color="#007fff" /> },
      },
      {
        id: "fe-styled",
        type: "skill",
        position: { x: 320, y: 380 },
        data: { icon: <SiStyledcomponents color="#db7093" /> },
      },

      // --- BACK-END NODES ---
      {
        id: "be-node",
        type: "skill",
        position: { x: 550, y: 150 },
        data: { icon: <SiNodedotjs color="#339933" /> },
      },
      {
        id: "be-nest",
        type: "skill",
        position: { x: 750, y: 150 },
        data: { icon: <SiNestjs color="#e0234e" /> },
      },
      {
        id: "be-api",
        type: "skill",
        position: { x: 650, y: 80 },
        data: { icon: <SiMongodb color="#339933" /> },
      },
      {
        id: "be-jwt",
        type: "skill",
        position: { x: 500, y: 250 },
        data: { icon: <SiMysql color="#f3f3f4" /> },
      },
      {
        id: "be-db",
        type: "skill",
        position: { x: 800, y: 250 },
        data: { icon: <SiPostgresql color="#4169e1" /> },
      },
      {
        id: "be-prisma",
        type: "skill",
        position: { x: 580, y: 380 },
        data: { icon: <SiPrisma /> },
      },
      {
        id: "be-orm",
        type: "skill",
        position: { x: 720, y: 380 },
        data: { icon: <SiTypeorm color="#fb1515" /> },
      },

      // --- FERRAMENTAS ---
      {
        id: "tl-git",
        type: "skill",
        position: { x: 950, y: 150 },
        data: { icon: <SiGit color="#f05032" /> },
      },
      {
        id: "tl-jest",
        type: "skill",
        position: { x: 1150, y: 150 },
        data: { icon: <SiJest color="#c21325" /> },
      },
      {
        id: "tl-clean",
        type: "skill",
        position: { x: 1050, y: 80 },
        data: { icon: <SiFigma color="#c21325" /> },
      },
      {
        id: "tl-scrum",
        type: "skill",
        position: { x: 900, y: 250 },
        data: { icon: <SiScrumalliance color="#51a1d1" /> },
      },
      {
        id: "tl-logic",
        type: "skill",
        position: { x: 1200, y: 250 },
        data: { icon: <SiNpm /> },
      },
      {
        id: "tl-error",
        type: "skill",
        position: { x: 1050, y: 380 },
        data: { icon: <SiExpo /> },
      },
    ],
    []
  );

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
        color: "#9333ea",
        to: [
          "be-node",
          "be-nest",
          "be-api",
          "be-jwt",
          "be-db",
          "be-prisma",
          "be-orm",
        ],
      },
      {
        from: "c-tl",
        color: "#16a34a",
        to: [
          "tl-git",
          "tl-jest",
          "tl-clean",
          "tl-scrum",
          "tl-logic",
          "tl-error",
        ],
      },
    ];

    return groups.flatMap((g) =>
      g.to.map((target) => {
        // Gera velocidades e atrasos diferentes para cada linha parecer orgânica
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * -10;

        return {
          id: `e-${g.from}-${target}`,
          source: g.from,
          target: target,
          type: "default",
          className: "base-edge neuron-pulse",
          style: {
            stroke: g.color,
            strokeWidth: 2,
            // Passamos a cor para o filtro de brilho no CSS
            "--edge-color": g.color,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        };
      })
    );
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center", padding: "40px 0 20px 0" }}>
        <h4 className="title">
          <FaCode />
          Tecnologias
        </h4>
        <h1 style={{ margin: 0, fontSize: "2.2rem" }}>
          Skills & <span className="txt-gradient">Ferramentas</span>
        </h1>
        <p style={{ color: "#666" }}>
          Tecnologias que utilizo para criar aplicações web
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          zoomOnScroll={false}
          panOnScroll={false}
          nodesDraggable={false} // Impede de arrastar os ícones
          nodesConnectable={false} // Impede de criar novas conexões
          panOnDrag={false} // Impede de arrastar o fundo (a tela)
          zoomOnPinch={false} // Impede zoom em touchpads/mobile
          zoomOnDoubleClick={false} // Impede zoom de duplo clique
          preventScrolling={false}
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
          <p>Styled Components</p>
          <p>Material UI (MUI)</p>
        </div>
        <div className="box_stack">
          <h4 style={{ color: "#9234eb" }}>Back-end</h4>
          <p>Nest</p>
          <p>Node</p>
          <p>TypeORM</p>
          <p>Prisma</p>
          <p>API Rest</p>
          <p>JWT</p>
        </div>
        <div className="box_stack">
          <h4 style={{ color: "#16a34a" }}>Ferramentas</h4>
          <p>Jest</p>
          <p>Git</p>
          <p>Scrum</p>
          <p>Figma</p>
          <p>API Rest</p>
          <p>JWT</p>
        </div>

        <div className="box_stack">
          <h4 style={{ color: "#db7a0c" }}>Banco de dados</h4>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>Mongodb</p>
          <p>SQLite</p>
        </div>

        <div className="box_stack">
          <h4 style={{ color: "#11b0d0" }}>Mobile</h4>
          <p>React Native</p>
          <p>Expo</p>
        </div>
      </div>

      <CarouselContainer>
        <CarouselTrack>
          {/* Repetimos o array para efeito infinito */}
          {[...allIcons, ...allIcons, ...allIcons].map((icon, i) => (
            <CarouselIcon key={i}>{icon}</CarouselIcon>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </Container>
  );
};
