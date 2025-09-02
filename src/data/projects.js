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
    imagem: casaLFimg,
    imagens: [{ src: casaLFimg, alt: "casa L|F - Fachada principal" }],
    descricaoModal: `<p>Este projeto, desenvolvido para uma família em Uberlândia/MG, reflete uma arquitetura contemporânea pensada para destacar a amplitude do lote. O conceito partiu do desafio de criar uma residência horizontal, que aproveitasse toda a largura disponível. Linhas retas e contínuas foram utilizadas para reforçar a sensação de fluidez e integração entre os ambientes.</p><p>A fachada é marcada pela combinação de materiais que equilibram sofisticação e acolhimento. Os painéis de madeira transmitem calor e proximidade, enquanto o porcelanato traz elegância e modernidade. Paredes anguladas criam movimento e volumetria, ganhando ainda mais destaque com a iluminação em LED de tons quentes, que valoriza cada detalhe e transforma a casa à noite.</p><p>O paisagismo, como em todos os nossos projetos, desempenha um papel essencial. O verde não apenas complementa, mas intensifica a beleza da arquitetura, trazendo frescor, equilíbrio e harmonia. Mais do que uma residência, este projeto é uma expressão de estilo e bem-estar, onde texturas, luzes e natureza se encontram em perfeita sintonia.</p>`,
    ano: "2023",
    cidade: "Rio Paranaíba - MG",
  },
  {
    id: 2,
    categoria: "Interiores",
    titulo: "casa P|J",
    descricao:
      "Residência de 180m² em Patos de Minas/MG, distribuída em dois pavimentos, com fachada imponente marcada por volumetria e jogos de formas e sombras. O projeto valoriza elegância e funcionalidade, unindo pergolado, luz natural e paisagismo para criar um espaço moderno, sofisticado e acolhedor.",
    imagem: casaMVimg,
    imagens: [
      { src: casaMVimg, alt: "casa P|J - Vista externa" },
      { src: casaMVimg2, alt: "casa P|J - Vista externa" },
      { src: casaMVimg3, alt: "casa P|J - Vista externa" },
    ],
    descricaoModal: `<p>Este projeto foi criado para um casal em Patos de Minas/MG, com foco em unir sofisticação e praticidade em uma residência de 180m² distribuída em dois pavimentos. A fachada imponente se destaca pela volumetria bem definida, formando um jogo de luz e sombras que reforça a identidade do projeto.</p><p>A garagem, com espaço para dois veículos, traz como diferencial o pergolado. Mais do que um recurso estético, ele permite a entrada de luz natural, delimita os ambientes de forma discreta e acrescenta charme e elegância à composição.</p><p>O paisagismo foi planejado para intensificar a integração entre arquitetura e natureza. Além de complementar a estética, as espécies escolhidas conferem frescor e acolhimento, tornando os espaços externos mais agradáveis e convidativos.</p><p>O resultado é uma residência contemporânea e harmônica, onde design, funcionalidade e natureza se encontram em perfeita sintonia.</p>`,
    ano: "2024",
    cidade: "Patos de Minas - MG",
  },
  {
    id: 3,
    categoria: "Interiores",
    titulo: "casa M|V",
    descricao:
      "Casa de fazenda de 120m² em Rio Paranaíba/MG, com garagem para três carros, área gourmet integrada à piscina e ambientes amplos e acolhedores. O projeto combina rusticidade e modernidade, destacando-se pelo telhado estilo chalé com vigas de aço, uso de madeira e pedra natural, além de um paisagismo que integra a residência à natureza.",
    imagem: casaPJimg,
    imagens: [
      { src: casaPJimg, alt: "casa M|V - Fachada com paisagismo" },
      { src: casaPJimg2, alt: "casa M|V - Fachada com paisagismo" },
      { src: casaPJimg3, alt: "casa M|V - Fachada com paisagismo" },
    ],
    descricaoModal: `<p>Este projeto foi desenvolvido para uma família em Rio Paranaíba/MG, resultando em uma charmosa casa de fazenda com cerca de 120m². A residência foi planejada para oferecer conforto e convivência, com ambientes amplos e acolhedores, garagem para três carros e uma área gourmet integrada à piscina, perfeita para momentos de lazer em família.</p><p>O telhado é o grande destaque do projeto. Inspirado na arquitetura de chalés, ele ganha um toque contemporâneo com o uso de vigas em aço, vãos livres e elementos em balanço, criando uma estrutura imponente e sofisticada.</p><p>Na composição estética, madeira e pedra natural assumem papel central. Esses materiais trazem aconchego, reforçam a conexão com a natureza e conferem personalidade ao design.</p><p>O paisagismo foi cuidadosamente planejado para dialogar com o entorno, valorizando a vegetação já existente e garantindo uma integração suave entre arquitetura e natureza.</p><p>O resultado é uma casa que une rusticidade e modernidade em perfeita harmonia, combinando conforto, elegância e uma forte ligação com a paisagem ao redor.</p>`,
    ano: "2024",
    cidade: "Rio Paranaíba - MG",
  },
];
