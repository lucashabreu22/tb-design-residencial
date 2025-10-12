import { House, Ruler, Box, Ticket } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Projeto Arquitetônico",
    description: "Desenvolvimento completo de projetos residenciais únicos",
    icon: House,
    subServices: [
      "Anteprojeto",
      "Projeto Legal",
      "Aprovação Prefeitura",
      "Projeto Executivo",
    ],
  },
  {
    id: 2,
    title: "Design de Interiores",
    description: "Ambientes funcionais e esteticamente únicos",
    icon: Ruler,
    subServices: [
      "Layouts Personalizados",
      "Seleção de Materiais",
      "Mobiliário",
      "Iluminação",
    ],
  },
  {
    id: 3,
    title: "Modelagem 3D",
    description: "Visualização realística do seu projeto.",
    icon: Box,
    subServices: [
      "Renders Fotorrealísticos",
      "Tours Virtuais",
      "Plantas 3D",
      "Animações",
    ],
  },
  {
    id: 4,
    title: "Cenografia e Eventos",
    description:
      "Criação e coordenação do projeto de cenografia do seu evento.",
    icon: Ticket,
    subServices: [
      "Projeto Cenpográfico",
      "Perpectivas 3D",
      "Renders",
      "Moodboards",
    ],
  },
];
