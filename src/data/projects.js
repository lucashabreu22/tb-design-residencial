import casaLFimg from "../assets/img/projetosImg/casaLFimg.jpg";
import casaMVimg from "../assets/img/projetosImg/casaMVimg.avif";
import casaMVimg2 from "../assets/img/projetosImg/casaMVimg2.avif";
import casaMVimg3 from "../assets/img/projetosImg/casaMVimg3.avif";
import casaPJimg from "../assets/img/projetosImg/casaPJimg.avif";
import casaPJimg2 from "../assets/img/projetosImg/casaPJimg2.avif";
import casaPJimg3 from "../assets/img/projetosImg/casaPJimg3.avif";

export const projectsData = [
  {
    id: 1,
    categoria: "Residencial",
    titulo: "casa L|F",
    descricao:
      "Projeto de residência contemporânea em Uberlândia/MG, com linhas retas e horizontais que conectam os espaços e reforçam amplitude e fluidez. A fachada combina madeira, porcelanato e iluminação em LED quente, destacada pelo paisagismo que integra natureza e arquitetura.",
    imagem: casaLFimg, // Mantém compatibilidade com código existente
    imagens: [
      { src: casaLFimg, alt: "casa L|F - Fachada principal" },
      // Adicione mais imagens aqui quando disponíveis
    ],
  },
  {
    id: 2,
    categoria: "Interiores",
    titulo: "casa P|J",
    descricao:
      "Residência de 180m² em Patos de Minas/MG, distribuída em dois pavimentos, com fachada imponente marcada por volumetria e jogos de formas e sombras. O projeto valoriza elegância e funcionalidade, unindo pergolado, luz natural e paisagismo para criar um espaço moderno, sofisticado e acolhedor.",
    imagem: casaMVimg, // Mantém compatibilidade com código existente
    imagens: [
      { src: casaMVimg, alt: "casa P|J - Vista externa" },
      { src: casaMVimg2, alt: "casa P|J - Vista externa" },
      { src: casaMVimg3, alt: "casa P|J - Vista externa" },
      // Adicione mais imagens aqui quando disponíveis
    ],
  },
  {
    id: 3,
    categoria: "Interiores",
    titulo: "casa M|V",
    descricao:
      "Casa de fazenda de 120m² em Rio Paranaíba/MG, com garagem para três carros, área gourmet integrada à piscina e ambientes amplos e acolhedores. O projeto combina rusticidade e modernidade, destacando-se pelo telhado estilo chalé com vigas de aço, uso de madeira e pedra natural, além de um paisagismo que integra a residência à natureza.",
    imagem: casaPJimg, // Mantém compatibilidade com código existente
    imagens: [
      { src: casaPJimg, alt: "casa M|V - Fachada com paisagismo" },
      { src: casaPJimg2, alt: "casa M|V - Fachada com paisagismo" },
      { src: casaPJimg3, alt: "casa M|V - Fachada com paisagismo" },
      // Adicione mais imagens aqui quando disponíveis
    ],
  },
];
