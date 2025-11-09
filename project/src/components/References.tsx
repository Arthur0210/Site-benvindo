import { ExternalLink } from 'lucide-react';

export default function References() {
  const allReferences = [
    {
      title: 'Embrapa Gado de Leite',
      description: 'Pesquisas em melhoramento genético de bovinos leiteiros',
      url: 'https://www.embrapa.br/gado-de-leite',
    },
    {
      title: 'Embrapa Gado de Corte',
      description: 'Programa de melhoramento de bovinos de corte',
      url: 'https://www.embrapa.br/gado-de-corte',
    },
    {
      title: 'Embrapa Suínos e Aves',
      description: 'Pesquisas em genética e melhoramento de suínos e aves',
      url: 'https://www.embrapa.br/suinos-e-aves',
    },
    {
      title: 'MAPA - Ministério da Agricultura',
      description: 'Políticas e programas de melhoramento genético animal',
      url: 'https://www.gov.br/agricultura/pt-br',
    },
    {
      title: 'FAO - Food and Agriculture Organization',
      description: 'Recursos genéticos animais e conservação da biodiversidade',
      url: 'https://www.fao.org/animal-genetics/en/',
    },
    {
      title: 'ICAR - International Committee for Animal Recording',
      description: 'Padrões internacionais para avaliação genética animal',
      url: 'https://www.icar.org/',
    },
    {
      title: 'Interbull',
      description: 'Centro internacional de avaliação genética de bovinos',
      url: 'https://interbull.org/',
    },
    {
      title: 'Melhoramento Genético Animal',
      description: 'Cardellino, R. & Rovira, J. - Fundamentos teóricos e práticos',
      url: null,
    },
    {
      title: 'Principles of Animal Breeding',
      description: 'Nicholas, F. W. - Texto clássico sobre princípios de melhoramento',
      url: null,
    },
    {
      title: 'Introduction to Quantitative Genetics',
      description: 'Falconer, D. S. & Mackay, T. F. C. - Genética quantitativa aplicada',
      url: null,
    },
    {
      title: 'Genetics and Analysis of Quantitative Traits',
      description: 'Lynch, M. & Walsh, B. - Análise estatística em melhoramento',
      url: null,
    },
    {
      title: 'Programa Geneplus-IATF',
      description: 'Melhoramento genético de bovinos de leite no Brasil',
      url: null,
    },
    {
      title: 'PMGRN - Programa de Melhoramento Genético de Raças Naturalizadas',
      description: 'Conservação e melhoramento de raças localmente adaptadas',
      url: null,
    },
    {
      title: 'Conexão Delta G',
      description: 'Programa de avaliação genética de bovinos de corte',
      url: null,
    },
    {
      title: 'PROMEBO - Programa de Melhoramento de Bovinos',
      description: 'Avaliação genética de raças zebuínas e taurinas',
      url: null,
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Referências</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fontes bibliográficas e recursos para aprofundamento no tema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allReferences.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}