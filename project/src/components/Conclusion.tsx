import { Target, Heart, Leaf, TrendingUp, Shield, Scale } from 'lucide-react';

export default function Conclusion() {

  const keyPoints = [
    {
      icon: Target,
      title: 'Essencial para Agropecuária',
      text: 'Base do avanço da produção animal moderna.',
      color: 'emerald',
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      text: 'Responsável por 60% a 80% dos ganhos produtivos das últimas décadas.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Bem-estar Animal',
      text: 'Promove saúde, longevidade e melhores condições de vida.',
      color: 'rose',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      text: 'Permite produzir mais alimentos utilizando menos recursos naturais.',
      color: 'teal',
    },
    {
      icon: Scale,
      title: 'Ética e Responsabilidade',
      text: 'Deve sempre respeitar princípios éticos e o bem-estar animal.',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Preservação Genética',
      text: 'Manter a diversidade genética é vital para a resiliência futura.',
      color: 'amber',
    },
  ];

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600',
    rose: 'from-rose-500 to-rose-600',
    teal: 'from-teal-500 to-teal-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600',
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Conclusão</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Síntese e perspectivas do melhoramento genético animal
          </p>
        </div>

        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              O melhoramento genético animal é um pilar fundamental para o avanço da agropecuária moderna, promovendo ganhos significativos em produtividade, qualidade e bem-estar animal. Por meio de técnicas que vão desde a seleção tradicional até o uso de biotecnologias avançadas, tem sido possível aumentar de forma expressiva a eficiência da produção de alimentos de origem animal.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Os benefícios são amplos e mensuráveis: maior produção de carne, leite e ovos; animais mais resistentes a doenças; melhor adaptação a diferentes ambientes; e uso mais racional dos recursos naturais. Esses avanços contribuem diretamente para a segurança alimentar global e para a sustentabilidade dos sistemas produtivos.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              No entanto, o melhoramento genético deve ser conduzido com ética e responsabilidade, assegurando a preservação da variabilidade genética e o equilíbrio ambiental. Riscos como a consanguinidade, a perda de raças locais e o comprometimento do bem-estar animal precisam ser cuidadosamente monitorados e mitigados por meio de estratégias de conservação e programas de seleção equilibrados.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              O futuro do melhoramento genético está em alcançar o equilíbrio ideal entre produtividade, sustentabilidade, bem-estar animal e preservação genética. O uso responsável das tecnologias emergentes é essencial para garantir que o progresso científico se traduza em benefícios reais para toda a sociedade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${colorClasses[point.color as keyof typeof colorClasses]}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[point.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perspectivas Futuras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-lg text-blue-800 mb-3">Tecnologias Emergentes</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A incorporação de ferramentas inovadoras promete transformar o setor: edição genética (CRISPR) para resistência a doenças; uso de inteligência artificial na predição genômica; fenômica de precisão baseada em sensores e imagens; e avanços em reprodução in vitro e embriões sintéticos.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-800 mb-3">Desafios e Oportunidades</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  O futuro do melhoramento genético envolve enfrentar questões globais como a adaptação às mudanças climáticas, a redução das emissões de gases de efeito estufa e a democratização do acesso às tecnologias, além de buscar maior aceitação social para os produtos derivados de novas biotecnologias.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mensagem Final</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O melhoramento genético animal é uma ciência em constante evolução, que combina o conhecimento tradicional com a inovação tecnológica. Seu sucesso contínuo depende do compromisso com princípios éticos, sustentabilidade ambiental e bem-estar animal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ao aplicar essas técnicas de forma responsável, é possível garantir a produção de alimentos de qualidade para as gerações futuras, preservando simultaneamente a diversidade genética e respeitando os limites do planeta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}