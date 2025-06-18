import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { ComparisonTable, pensionTypesComparison, pensionPillarsComparison } from "@/components/comparison-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  PiggyBank, 
  TrendingUp, 
  FileText, 
  Calculator,
  Users,
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Banknote,
  Building2,
  CreditCard
} from "lucide-react";

export default function TipuriPensii() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="tipuri-pensii" 
        title="Tipuri de Pensii România 2025 - Pilonul I, II, III | Ghid Complet | CalculatorSarcina.com"
        description="Ghid complet tipuri pensii România 2025 ✓ Pilonul I - pensie de stat ✓ Pilonul II - pensie obligatorie ✓ Pilonul III - pensie facultativă ✓ Comparații și alegerea optimă"
        keywords="tipuri pensii romania, pilonul 1, pilonul 2, pilonul 3, pensie de stat, pensie obligatorie, pensie facultativa, sistem pensii romania 2025"
      />
      <StructuredData 
        type="article" 
        data={{
          headline: "Tipuri de Pensii în România 2025 - Ghid Complet",
          description: "Ghid detaliat despre sistemul de pensii din România: Pilonul I, II și III",
          author: "Calculator Sarcina",
          datePublished: "2025-01-01",
          dateModified: "2025-06-18"
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-emerald-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-teal-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 rounded-full shadow-lg">
              <Shield className="w-4 h-4 mr-2" />
              Sistemul de Pensii România 2025
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Tipuri de Pensii în România
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Ghid Complet Pilonii I, II, III
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Înțelege sistemul de pensii din România și alege strategia optimă pentru viitorul tău financiar. Ghid complet cu comparații detaliate și recomandări personalizate.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/planificare-pensie">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Calculator className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Calculează Pensia
                  <TrendingUp className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/legislatie-resurse">
                <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <FileText className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Legislație
                  <Shield className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sistemul de Pensii din România</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              România are un sistem de pensii pe trei piloni, fiecare cu caracteristici și beneficii distincte
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pilonul I */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-emerald-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-800">Pilonul I</h3>
                    <Badge className="text-xs bg-emerald-100 text-emerald-700 border-0">Obligatoriu</Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Sistemul public de pensii, administrat de statul român. Toate persoanele angajate contribuie obligatoriu.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Contribuție</span>
                    <span className="font-semibold text-emerald-700">25% din salariu</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Administrare</span>
                    <span className="font-semibold text-emerald-700">Casa de Pensii</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Vârsta de pensionare</span>
                    <span className="font-semibold text-emerald-700">65 ani (bărbați)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Pilonul II */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-800">Pilonul II</h3>
                    <Badge className="text-xs bg-blue-100 text-blue-700 border-0">Obligatoriu</Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Pensii private obligatorii, administrate de fonduri de pensii private. Contribuție automată din salariu.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Contribuție</span>
                    <span className="font-semibold text-blue-700">3.75% din salariu</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Administrare</span>
                    <span className="font-semibold text-blue-700">Fonduri private</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Randament</span>
                    <span className="font-semibold text-blue-700">Variabil</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Pilonul III */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Banknote className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-800">Pilonul III</h3>
                    <Badge className="text-xs bg-purple-100 text-purple-700 border-0">Facultativ</Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Pensii private facultative. Poți contribui voluntar pentru a-ți suplimenta pensia viitoare.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Contribuție</span>
                    <span className="font-semibold text-purple-700">La alegere</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Beneficii fiscale</span>
                    <span className="font-semibold text-purple-700">Da</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Flexibilitate</span>
                    <span className="font-semibold text-purple-700">Maximă</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ComparisonTable
            title="Comparație Detaliată Pilonii de Pensii"
            subtitle="Analiză completă pentru a înțelege diferențele dintre cele trei piloni"
            columns={["Caracteristică", "Pilonul I", "Pilonul II", "Pilonul III"]}
            items={pensionPillarsComparison}
          />
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {/* Pilonul I Details */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Pilonul I - Sistemul Public</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Pilonul I reprezintă fundamentul sistemului de pensii din România. Este administrat de Casa Națională de Pensii Publice și funcționează pe principiul solidarității între generații.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Contribuție obligatorie</h4>
                      <p className="text-slate-600 text-sm">25% din salariul brut, plătit de angajator</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Calculul pensiei</h4>
                      <p className="text-slate-600 text-sm">Bazat pe puncte de pensie și perioada de contribuție</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Condițiile de pensionare</h4>
                      <p className="text-slate-600 text-sm">65 ani bărbați, 63 ani femei (2025), minim 15 ani contribuție</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Avantaje și Dezavantaje</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2">Avantaje</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Sigurança garantată de stat</li>
                        <li>• Pensie pe viață</li>
                        <li>• Indexarea anuală</li>
                        <li>• Protecție contra inflației</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Dezavantaje</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Pensii relativ mici</li>
                        <li>• Dependența de bugetul de stat</li>
                        <li>• Presiunea demografică</li>
                        <li>• Randament scăzut</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pilonul II Details */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 order-2 lg:order-1">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Fonduri de Pensii Disponibile</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700">Fond Conservator</h4>
                      <p className="text-sm text-slate-600">Risc scăzut, randament stabil</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700">Fond Echilibrat</h4>
                      <p className="text-sm text-slate-600">Risc mediu, randament moderat</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700">Fond Dinamic</h4>
                      <p className="text-sm text-slate-600">Risc ridicat, randament potențial mare</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-yellow-800">
                        Poți schimba fondul de pensii o dată pe an, gratuit
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Pilonul II - Pensii Private Obligatorii</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Pilonul II a fost introdus pentru a diversifica sursele de venit la pensie și a reduce presiunea asupra sistemului public. Contribuția se face automat din salariu.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Contribuție automată</h4>
                      <p className="text-slate-600 text-sm">3.75% din salariul brut, redirectat din Pilonul I</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Cont individual</h4>
                      <p className="text-slate-600 text-sm">Fiecare participant are cont propriu cu investiții</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Randament variabil</h4>
                      <p className="text-slate-600 text-sm">Depinde de performanța investițiilor fondului ales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilonul III Details */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <Banknote className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Pilonul III - Pensii Private Facultative</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Pilonul III îți oferă flexibilitatea maximă pentru a-ți suplimenta pensia. Contribuția este voluntară și beneficiezi de deduceri fiscale.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Contribuție voluntară</h4>
                      <p className="text-slate-600 text-sm">Alegi suma și frecvența contribuțiilor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Beneficii fiscale</h4>
                      <p className="text-slate-600 text-sm">Deducere de până la 400 EUR/an din impozitul pe venit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Flexibilitate totală</h4>
                      <p className="text-slate-600 text-sm">Poți opri, repriza sau modifica contribuțiile oricând</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Strategii de Contribuție</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Contribuție regulată</h4>
                      <p className="text-sm text-slate-600">Contribuție lunară fixă pentru disciplină financiară</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Contribuții periodice</h4>
                      <p className="text-sm text-slate-600">Contribuții mari la bonusuri sau venituri extra</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Contribuție maximă fiscală</h4>
                      <p className="text-sm text-slate-600">400 EUR/an pentru beneficiul fiscal maxim</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="px-4 py-2 text-sm font-medium bg-white/10 text-white border border-white/20 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Recomandări Expert
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Strategia Optimă pentru Pensia Ta
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Combină toate cele trei piloni pentru o pensie confortabilă și sigură
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pilonul I</h3>
                <p className="text-slate-300 text-sm">Fundația sigură - contribuția obligatorie îți garantează o pensie de bază</p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pilonul II</h3>
                <p className="text-slate-300 text-sm">Diversificare automată - alege fondul potrivit pentru profilul tău de risc</p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pilonul III</h3>
                <p className="text-slate-300 text-sm">Suplimentarea inteligentă - contribuie voluntar pentru o pensie confortabilă</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/planificare-pensie">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-slate-800 hover:bg-slate-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Calculator className="w-5 h-5 mr-3" />
                  Calculează Pensia
                </Button>
              </Link>
              <Link href="/legislatie-resurse">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <FileText className="w-5 h-5 mr-3" />
                  Ghiduri Detaliate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}