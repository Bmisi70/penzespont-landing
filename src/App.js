import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Target,
  Shield,
  Zap,
  ChevronRight,
  Play,
  CheckCircle,
  Award,
  Users,
  DollarSign,
} from "lucide-react";

const IntroLandingV2 = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    {
      icon: Users,
      mainText: "A magyar fiatalok",
      highlight: "78%-a",
      description: "nem kapott pénzügyi oktatást iskolában",
    },
    {
      icon: TrendingUp,
      mainText: "A milliomos befektetők",
      highlight: "80%-a",
      description: "30 éves kora előtt kezdte a megtakarítást",
    },
    {
      icon: DollarSign,
      mainText: "A magyar fiatalok",
      highlight: "csak 12%-a",
      description: "takarít meg rendszeresen",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % statistics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentStatData = statistics[currentStat];
  const StatIcon = currentStatData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Stats Bar - Rotating */}
        <div
          className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <StatIcon className="text-white" size={32} />
              </div>
              <div>
                <div className="text-white text-lg mb-1">
                  {currentStatData.mainText}{" "}
                  <span className="text-4xl font-bold text-orange-400">
                    {currentStatData.highlight}
                  </span>
                </div>
                <div className="text-orange-200">
                  {currentStatData.description}
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {statistics.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentStat
                      ? "w-8 bg-orange-400"
                      : "w-2 bg-white/30"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero */}
        <div className="text-center mb-12">
          <div
            className={`inline-block mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
               Új megközelítés • Interaktív • Szórakoztató
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Tanulj pénzügyeket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              kosárlabda analógiákkal
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Az első magyar pénzügyi képzés, ami{" "}
            <strong className="text-orange-400">tényleg érthető</strong> és{" "}
            <strong className="text-orange-400">szórakoztató</strong>. Tanulj
            befektetést, költségvetést és vagyonépítést olyan példákkal, amiket{" "}
            <strong className="text-white">mindenki megért</strong>.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2">
              <Play size={24} />
              Kezdd el ingyen!
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={24}
              />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all border-2 border-white/30">
              Nézd meg hogyan működik
            </button>
          </div>
        </div>

        {/* Video/Demo Placeholder */}
        <div
          className={`relative transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-500/30">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play size={40} className="text-white ml-1" />
                </div>
                <div className="text-white text-xl font-bold mb-2">
                  Nézd meg a bemutató videót
                </div>
                <div className="text-gray-300">
                  2 perc • Lásd hogyan működik
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-slate-900/50 backdrop-blur-md py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ismerős ezek közül valamelyik?
            </h2>
            <p className="text-xl text-gray-300">Nem vagy egyedül...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Sosem tanítottak pénzügyekre az iskolában",
              "Unalmasak a hagyományos pénzügyi tanfolyamok",
              "Nem érted a szakzsargont (P/E ráta, diverzifikáció...)",
              "Nem tudod hol kezdd el",
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6 backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-400 text-3xl">❌</div>
                  <div className="text-white text-lg">{problem}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500/30 rounded-2xl p-8 text-center backdrop-blur-md">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Van jó hírünk!
            </h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A Kosárlabda Pénzügyi Akadémia{" "}
              <strong className="text-green-400">
                egyszerűvé és szórakoztatóvá
              </strong>{" "}
              teszi a pénzügyi tanulást. Ha érted a kosárlabdát,{" "}
              <strong className="text-green-400">
                érteni fogod a pénzügyeket is
              </strong>
              .
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hogyan működik?
          </h2>
          <p className="text-xl text-gray-300">Három egyszerű elv</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              🏀 Kosárlabda analógiák
            </h3>
            <p className="text-gray-300 text-lg">
              Minden pénzügyi fogalmat lefordítunk kosárlabda nyelvére.
              <strong className="text-orange-400"> Portfólió = Csapat</strong>,
              <strong className="text-orange-400">
                {" "}
                Diverzifikáció = Minden posztra játékos
              </strong>
              .
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              🎮 Interaktív játékok
            </h3>
            <p className="text-gray-300 text-lg">
              Ne csak olvasd -{" "}
              <strong className="text-blue-400">csináld</strong>! Szimulációk,
              kalkulátorok, döntési játékok. Tanulj játék közben.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              💪 Gyakorlati készségek
            </h3>
            <p className="text-gray-300 text-lg">
              Nem elmélet -{" "}
              <strong className="text-green-400">valódi eszközök</strong>.
              Költségvetés, befektetés, adósságkezelés. Használható tudás.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Miért ez a legjobb választás?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Érthető analógiák",
                desc: "Kosárlabda példákkal, amit mindenki megért",
              },
              {
                icon: Zap,
                title: "Interaktív tanulás",
                desc: "Szimulációk és gyakorlati feladatok minden leckében",
              },
              {
                icon: Shield,
                title: "Strukturált felépítés",
                desc: "Logikus haladás a kezdőtől a szakértői szintig",
              },
              {
                icon: Award,
                title: "Lépésről lépésre",
                desc: "Rookie-tól MVP szintig",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                    {React.createElement(benefit.icon, {
                      className: "text-white",
                      size: 28,
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-gradient-to-br from-orange-900/30 to-blue-900/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Mit fogsz megtanulni?
            </h2>
            <p className="text-xl text-gray-300">Rookie szinttől MVP-ig</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border-2 border-white/10">
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ROOKIE Modul
              </h3>
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                ✨ 2 LECKE TELJESEN INGYENES
              </div>
              <ul className="space-y-3">
                {[
                  "Portfólió diverzifikáció (csapatépítés)",
                  "Költségvetés készítés (fizetésplafon)",
                  "Vészhelyzeti alap (mélységi keret)",
                  "Hitel és adósság kezelés",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-xl p-8 border-2 border-orange-500/30">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Következő szintek (Hamarosan)
              </h3>
              <ul className="space-y-3">
                {[
                  "Befektetési alapok és stratégiák",
                  "Részvények, kötvények, ETF-ek",
                  "Kockázatkezelés és optimalizálás",
                  "Hosszú távú vagyonépítés",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <div className="text-orange-400 flex-shrink-0 mt-1">🔒</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-transform">
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Készen állsz, hogy pénzügyi MVP legyél?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kezdd el INGYEN az első 2 leckével. Nem kell bankkártya. Nincs
            kötelezettség.
          </p>
          <button className="bg-white text-orange-600 px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-3">
            <Play size={28} />
            Kezdés most - INGYEN
            <ChevronRight size={28} />
          </button>
          <div className="mt-6 text-white/80">
            ✓ Első 2 lecke teljesen ingyenes • ✓ Csak emailcím kell az
            induláshoz
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">🏀 Kosárlabda Pénzügyi Akadémia</p>
          <p className="text-sm">
            Tanulj pénzügyeket, ahogy a profik játszanak - okosan, stratégiával,
            csapatban.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroLandingV2;
