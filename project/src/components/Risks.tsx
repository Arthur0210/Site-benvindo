import { AlertTriangle, DollarSign, Scale, Sprout } from 'lucide-react';

export default function Risks() {
  const risks = [
    {
      icon: Sprout,
      title: 'Redução da Variabilidade Genética',
      description: 'A uniformidade excessiva entre os animais pode aumentar a vulnerabilidade a doenças e reduzir a capacidade de adaptação a mudanças ambientais.',
      challenges: [
        {
          subtitle: 'Problema do Gargalo Genético',
          text: 'O uso intensivo de poucos reprodutores de elite pode reduzir drasticamente a diversidade genética. Em bovinos leiteiros, por exemplo, estima-se que apenas 10% dos touros sejam responsáveis por cerca de 90% das inseminações realizadas.',
        },
        {
          subtitle: 'Aumento da Consanguinidade',
          text: 'O cruzamento entre animais aparentados eleva os níveis de endogamia, resultando em depressão endogâmica, caracterizada por menor fertilidade, maior mortalidade e menor resistência a doenças.',
        },
        {
          subtitle: 'Perda de Raças Locais',
          text: 'Raças nativas, adaptadas a condições específicas, vêm sendo substituídas por raças comerciais, ocasionando a perda de características valiosas, como rusticidade e resistência ambiental.',
        },
      ],
      mitigation: [
        'Implementação de programas de conservação de raças locais e manutenção de bancos de germoplasma',
        'monitoramento da consanguinidade e planejamento dos acasalamentos',
        'preservação de populações de referência com alta variabilidade',
        'uso estratégico de cruzamentos para restaurar a heterozigosidade',
      ],
      color: 'amber',
    },
    {
      icon: Scale,
      title: 'Problemas Éticos',
      description: 'Envolve questões morais e de bem-estar relacionadas à clonagem e à manipulação genética.',
      challenges: [
        {
          subtitle: 'Clonagem e Bem-estar Animal',
          text: 'A clonagem apresenta baixas taxas de sucesso (5% a 10%) e alta incidência de anomalias fetais, gestações problemáticas e complicações pós-natais, comprometendo o bem-estar dos clones.',
        },
        {
          subtitle: 'Edição Genética (CRISPR)',
          text: 'Apesar do potencial promissor, a edição gênica levanta preocupações quanto aos efeitos de longo prazo, à segurança alimentar e à aceitação social de produtos oriundos de animais geneticamente editados.',
        },
        {
          subtitle: 'Seleção para Características Extremas',
          text: 'A busca por produtividade máxima pode afetar negativamente o bem-estar animal — vacas com úberes excessivamente grandes são mais suscetíveis à mastite, enquanto frangos de crescimento acelerado frequentemente desenvolvem problemas locomotores.',
        },
      ],
      mitigation: [
        'Incorporação de características de bem-estar nos programas de seleção',
        'regulamentação rigorosa do uso de biotecnologias reprodutivas',
        'avaliação ética prévia de novas tecnologias',
        'estabelecimento de critérios de seleção equilibrados, que considerem produção, saúde e longevidade',
      ],
      color: 'purple',
    },
    {
      icon: DollarSign,
      title: 'Custos Elevados',
      description: 'O uso de tecnologias avançadas demanda investimentos significativos, podendo gerar desigualdades de acesso entre produtores.',
      challenges: [
        {
          subtitle: 'Barreiras de Acesso',
          text: 'Métodos como a seleção genômica e a transferência de embriões exigem alto investimento. Um teste genômico, por exemplo, pode custar entre R$ 200 e R$ 500 por animal, limitando o uso entre pequenos produtores.',
        },
        {
          subtitle: 'Infraestrutura e Capacitação',
          text: 'A implantação de programas de melhoramento requer laboratórios, técnicos especializados e sistemas de registro e avaliação genética, frequentemente ausentes em regiões mais remotas.',
        },
        {
          subtitle: 'Dependência Tecnológica',
          text: 'A utilização intensiva de tecnologias pode tornar os produtores dependentes de empresas fornecedoras de genética, sêmen e equipamentos, comprometendo sua autonomia e elevando os custos operacionais.',
        },
      ],
      mitigation: [
        'Incentivos governamentais e programas de apoio a pequenos produtores',
        'formação de cooperativas para acesso coletivo às tecnologias',
        'desenvolvimento de alternativas de baixo custo adaptadas às realidades locais',
        'ampliação da assistência técnica e da capacitação rural',
      ],
      color: 'orange',
    },
    {
      icon: AlertTriangle,
      title: 'Impactos Ambientais',
      description: 'Quando conduzido de forma inadequada, o melhoramento genético pode gerar consequências ecológicas indesejadas.',
      challenges: [
        {
          subtitle: 'Intensificação Produtiva',
          text: 'A busca por maior produtividade pode levar à intensificação excessiva, resultando em maior consumo de grãos, água e energia, além da concentração de dejetos em áreas limitadas.',
        },
        {
          subtitle: 'Escape Genético',
          text: 'Animais geneticamente melhorados que escapam para o ambiente natural podem cruzar com populações selvagens ou ferais, alterando o patrimônio genético de espécies nativas.',
        },
        {
          subtitle: 'Monocultura Genética',
          text: 'O uso massivo de poucas linhagens cria uniformidade genética, o que aumenta o risco de surtos de doenças capazes de afetar populações inteiras.',
        },
      ],
      mitigation: [
        'Realização de avaliações de impacto ambiental em sistemas intensivos',
        'adoção de medidas de biossegurança para evitar o escape genético',
        'desenvolvimento de programas de melhoramento voltados à sustentabilidade',
        'diversificação das bases genéticas utilizadas',
      ],
      color: 'red',
    },
  ];

  const colorClasses = {
    amber: {
      bg: 'from-amber-500 to-amber-600',
      light: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-700',
    },
    red: {
      bg: 'from-red-500 to-red-600',
      light: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Riscos e Desafios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O melhoramento genético deve ser conduzido com responsabilidade para minimizar riscos potenciais
          </p>
        </div>

        <div className="space-y-12">
          {risks.map((risk, index) => {
            const colors = colorClasses[risk.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <risk.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{risk.title}</h3>
                      <p className="text-gray-600">{risk.description}</p>
                    </div>
                  </div>

                  <div className="mb-8 space-y-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">Desafios Identificados:</h4>
                    {risk.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className={`${colors.light} rounded-xl p-5 border ${colors.border}`}
                      >
                        <h5 className={`font-bold mb-2 ${colors.text}`}>{challenge.subtitle}</h5>
                        <p className="text-sm text-gray-700 leading-relaxed">{challenge.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Estratégias de Mitigação:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {risk.mitigation.map((strategy, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                          <span className="text-sm text-gray-700">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Abordagem Equilibrada</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Os riscos associados ao melhoramento genético não devem impedir seu uso, mas sim orientar sua aplicação de forma responsável, ética e sustentável. O equilíbrio entre produtividade, bem-estar animal, preservação genética e sustentabilidade ambiental é essencial.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Os programas de melhoramento modernos tendem a adotar uma abordagem multifatorial, incluindo não apenas metas de produção, mas também aspectos de saúde, longevidade, eficiência reprodutiva e bem-estar animal, promovendo avanços equilibrados e duradouros.
          </p>
        </div>
      </div>
    </div>
  );
}