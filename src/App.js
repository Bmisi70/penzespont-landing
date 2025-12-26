import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Shield, Zap, ChevronRight, Play, CheckCircle, Award, Users, DollarSign } from 'lucide-react';

const IntroLandingV2 = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { 
      icon: Users, 
      mainText: "A magyar fiatalok", 
      highlight: "78%-a", 
      description: "nem kapott penzugyi oktatas iskolaban" 
    },
    { 
      icon: TrendingUp, 
      mainText: "A milliomos befektetok", 
      highlight: "80%-a", 
      description: "30 eves kora elott kezdte a megtakaritast" 
    },
    { 
      icon: DollarSign, 
      mainText: "A magyar fiatalok", 
      highlight: "csak 12%-a", 
      description: "takarit meg rendszeresen" 
    }
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <StatIcon className="text-white" size={32} />
              </div>
              <div>
                <div className="text-white text-lg mb-1">
                  {currentStatData.mainText} <span className="text-4xl font-bold text-orange-400">{currentStatData.highlight}</span>
                </div>
                <div className="text-orange-200">{currentStatData.description}</div>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {statistics.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all ${idx === currentStat ? 'w-8 bg-orange-400' : 'w-2 bg-white/30'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className={`inline-block mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Kosarlabda - Uj megkozelites - Interaktiv - Szorakoztato
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Tanulj penzugyeket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              kosarlabda analogiakkal
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Az elso magyar penzugyi kepzes, ami tenyleg ertheto es szorakoztato. 
            Tanulj befektetest, koltsegvetest es vagyonepites olyan peldakkal, amiket mindenki megert.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2">
              <Play size={24} />
              Kezdd el ingyen!
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all border-2 border-white/30">
              Nezd meg hogyan mukodik
            </button>
          </div>
        </div>

        <div className={`relative transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-500/30">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-pattern opacity-30"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play size={40} className="text-white ml-1" />
                </div>
                <div className="text-white text-xl font-bold mb-2">Nezd meg a bemutato videot</div>
                <div className="text-gray-300">2 perc - Lasd hogyan mukodik</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-md py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ismeros ezek kozul valamelyik?</h2>
            <p className="text-xl text-gray-300">Nem vagy egyedul...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Sosem tanitottak penzugyekre az iskolaban",
              "Unalmasak a hagyomanyos penzugyi tanfolyamok",
              "Nem erted a szakzsargont",
              "Nem tudod hol kezdd el"
            ].map((problem, idx) => (
              <div key={idx} className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="text-red-400 text-3xl">X</div>
                  <div className="text-white text-lg">{problem}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500/30 rounded-2xl p-8 text-center backdrop-blur-md">
            <div className="text-5xl mb-4">IDEA</div>
            <h3 className="text-3xl font-bold text-white mb-4">Van jo hirunk!</h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A PenzEsPont egyszeruve es szorakoztatova teszi a penzugyi tanulast. 
              Ha erted a kosarlabdat, erteni fogod a penzugyeket is.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Hogyan mukodik?</h2>
          <p className="text-xl text-gray-300">Harom egyszeru elv</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Kosarlabda analogiak</h3>
            <p className="text-gray-300 text-lg">
              Minden penzugyi fogalmat leforditunk kosarlabda nyelvere. 
              Portfolio = Csapat, Diverzifikacio = Minden posztra jatekos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Interaktiv jatekok</h3>
            <p className="text-gray-300 text-lg">
              Ne csak olvasd - csinald! Szimulatok, kalkulatorok, dontesi jatekok. 
              Tanulj jatek kozben.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Gyakorlati keszsgek</h3>
            <p className="text-gray-300 text-lg">
              Nem elmelet - valos eszkozok. Koltsegvetes, befektetes, adossagkezeles. 
              Hasznalhato tudas.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-transform">
          <div className="text-6xl mb-6">TROPHY</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keszen allsz, hogy penzugyi MVP legyel?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kezdd el INGYEN az elso 2 leckevel. Nem kell bankartya. Nincs kotelezettseg.
          </p>
          <button className="bg-white text-orange-600 px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-3">
            <Play size={28} />
            Kezdes most - INGYEN
            <ChevronRight size={28} />
          </button>
          <div className="mt-6 text-white/80">
            Elso 2 lecke teljesen ingyenes - Csak emailcim kell az indulashoz
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">PenzEsPont - Kosarlabda Penzugyi Akademia</p>
          <p className="text-sm">Tanulj penzugyeket, ahogy a profik jatszanak - okosan, strategiaval, csapatban.</p>
        </div>
      </div>
    </div>
  );
};

export default IntroLandingV2;
