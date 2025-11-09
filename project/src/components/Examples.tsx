import { Beef, Milk, Drumstick, Fish } from 'lucide-react';

export default function Examples() {
  const examples = [
    {
      icon: Milk,
      title: 'Bovinos Leiteiros',
      subtitle: 'Vacas Holandesas com alta produção de leite',
      image: '🐄',
      description: 'A raça Holandesa (Holstein-Friesian) é resultado de séculos de seleção voltada à produção leiteira, representando um dos maiores avanços da pecuária moderna.',
      achievements: [
        'Produção média superior a 10.000 litros por lactação, com recordes acima de 30.000 litros',
        'Melhorias significativas nos teores de proteína e gordura do leite',
        'Adaptação a diversos sistemas de produção',
        'Desenvolvimento de linhagens específicas para climas tropicais',
      ],
      challenges: 'Animais de alta produtividade exigem manejo nutricional e sanitário rigoroso. O principal desafio é equilibrar produção, longevidade e fertilidade.',
      case: 'No Brasil, programas como o Geneplus e o PMGRN já avaliaram milhões de animais, resultando em um aumento de mais de 50% na produtividade nacional nas últimas três décadas.',
      color: 'blue',
    },
    {
      icon: Drumstick,
      title: 'Frangos de Corte',
      subtitle: 'Raças híbridas de crescimento rápido e carne macia',
      image: '🐔',
      description: 'O frango moderno é fruto de intenso melhoramento genético, com foco em eficiência alimentar e crescimento acelerado.',
      achievements: [
        'Ganho de peso de 0 a 2,5 kg em apenas 42 dias',
        'Conversão alimentar média de 1,7:1 (1,7 kg de ração para cada 1 kg de carne)',
        'Rendimento de carcaça superior a 75%',
        'Carne macia, com baixo teor de gordura',
      ],
      challenges: 'O crescimento muito rápido pode gerar problemas locomotores. Por isso, os programas atuais incluem critérios de seleção voltados ao bem-estar e à robustez.',
      case: 'Empresas como Cobb e Ross desenvolveram linhagens específicas para diferentes mercados. Enquanto na década de 1950 eram necessários 84 dias para atingir 2 kg, hoje esse peso é alcançado em apenas 35 a 40 dias.',
      color: 'amber',
    },
    {
      icon: Beef,
      title: 'Suínos',
      subtitle: 'Linhagens com menos gordura e maior rendimento',
      image: '🐷',
      description: 'O melhoramento genético dos suínos priorizou a produção de carne magra e de alta qualidade, acompanhando a mudança no padrão de consumo mundial.',
      achievements: [
        'Percentual de carne magra entre 60% e 65% (antes: 40% a 45%)',
        'Conversão alimentar de 2,5:1',
        'Prolificidade média de mais de 14 leitões por parto',
        'Carne com bom marmoreio e textura aprimorada',
      ],
      challenges: 'A seleção intensa para redução de gordura pode comprometer o sabor e a suculência. O equilíbrio entre magreza e qualidade sensorial é essencial.',
      case: 'Programas como Camborough (PIC) e Large White (Agroceres) impulsionaram a eficiência produtiva em 3% a 4% ao ano. Atualmente, o Brasil ocupa a 4ª posição entre os maiores produtores de carne suína do mundo.',
      color: 'pink',
    },
    {
      icon: Fish,
      title: 'Peixes e Ovinos',
      subtitle: 'Espécies adaptadas a diferentes regiões e condições climáticas',
      image: '🐟',
      description: 'O melhoramento genético na aquicultura e na ovinocultura busca adaptar espécies a diferentes ambientes e aumentar a produtividade de forma sustentável.',
      achievements: [
        'Tilápia: crescimento 30% a 40% superior em linhagens melhoradas',
        'Ovinos: raças como Suffolk e Dorper apresentam dupla aptidão (carne e lã)',
        'Maior resistência a parasitas em raças locais',
        'Salmão: avanços em resistência a doenças e melhor conversão alimentar',
      ],
      challenges: 'Na aquicultura, o principal desafio é evitar o escape genético de indivíduos melhorados. Já na ovinocultura, busca-se aprimorar a adaptação a diferentes biomas brasileiros.',
      case: 'O programa de melhoramento genético de tilápias da Embrapa elevou o crescimento em cerca de 10% por geração. Entre os ovinos, a raça Santa Inês destaca-se pela rusticidade e excelente adaptação ao semiárido nordestino.',
      color: 'teal',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    amber: 'from-amber-500 to-amber-600',
    pink: 'from-pink-500 to-pink-600',
    teal: 'from-teal-500 to-teal-600',
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Exemplos Práticos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reais de sucesso do melhoramento genético em diferentes espécies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-3 bg-gradient-to-r ${colorClasses[example.color as keyof typeof colorClasses]}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[example.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-lg`}>
                      <example.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{example.title}</h3>
                      <p className="text-sm text-gray-600">{example.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-5xl">{example.image}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{example.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Conquistas do Melhoramento:</h4>
                  <div className="space-y-2">
                    {example.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <h4 className="font-bold text-amber-800 mb-2 text-sm">Desafios:</h4>
                  <p className="text-sm text-gray-700">{example.challenges}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2 text-sm">Caso de Sucesso:</h4>
                  <p className="text-sm text-gray-700">{example.case}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Global</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O melhoramento genético das principais espécies de produção foi responsável por um aumento anual de 1% a 4% na eficiência produtiva ao longo das últimas décadas. Esse progresso contínuo e cumulativo permitiu que a oferta de alimentos acompanhasse o crescimento populacional sem a necessidade de expandir proporcionalmente as áreas de produção.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estima-se que, sem o melhoramento genético, seria necessário 50% a 100% mais animais para alcançar os níveis de produção atuais — o que resultaria em impactos ambientais significativamente maiores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3–4%</div>
              <p className="text-sm text-gray-600">ganho genético anual médio em programas de melhoramento;</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60–80%</div>
              <p className="text-sm text-gray-600">do aumento de produtividade atribuído diretamente à seleção genética;</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10–15x</div>
              <p className="text-sm text-gray-600">retorno estimado para cada real investido em melhoramento genético.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}