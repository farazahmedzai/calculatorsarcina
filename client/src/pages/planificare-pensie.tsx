import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PensionCalculator } from "@/components/pension-calculator";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { FAQSection, pensionFAQs } from "@/components/faq-section";
import { ComparisonTable, pensionTypesComparison } from "@/components/comparison-table";
import { TimelineComponent, pensionTimelineItems } from "@/components/timeline-component";
import { EducationalContentSection, pensionEducationalContent } from "@/components/educational-content-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Users, 
  CheckCircle2,
  PiggyBank,
  FileText,
  BarChart3,
  Clock,
  Award,
  Zap
} from "lucide-react";

export default function PlanificareePensie() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="planificare-pensie" 
        title="Calculator Pensie România 2025 - Planificare Pensie Online Gratuit | CalculatorSarcina.com"
        description="Calculator pensie România 2025 ✓ Calculează pensia viitoare ✓ Planificare financiară pensionare ✓ Toate tipurile de pensii ✓ Legislație actualizată ✓ Gratuit"
        keywords="calculator pensie, pensie romania 2025, planificare pensie, calculator pensie online, pensie de stat, pilonul 2, pilonul 3, contributii pensie"
      />
      <StructuredData 
        type="calculator" 
        data={{
          name: "Calculator Pensie România 2025",
          description: "Calculator profesional pentru estimarea pensiei viitoare conform legislației românești",
          url: "https://calculatorsarcina.com/planificare-pensie",
          features: [
            "Calculul pensiei pentru toate tipurile",
            "Legislație 2025 actualizată",
            "Planificare financiară completă",
            "Ghiduri și recomandări personalizate"
          ]
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-green-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-blue-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 rounded-full shadow-lg">
              <PiggyBank className="w-4 h-4 mr-2" />
              Calculator Pensie România 2025
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Planificare Pensie România
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Calculator Pensie Online Gratuit 2025
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Calculează-ți pensia viitoare cu cel mai avansat calculator online. Planificare financiară completă pentru pensionarea ta, conform legislației românești 2025.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={() => {
                const calculatorSection = document.getElementById('pension-calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Calculator className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Calculează Pensia
                <TrendingUp className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/tipuri-pensii">
                <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <BookOpen className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Tipuri Pensii
                  <Shield className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Calcul Precis</h3>
              <p className="text-slate-600">
                Estimează pensia bazată pe contribuții și legislația actuală
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Planificare Completă</h3>
              <p className="text-slate-600">
                Strategii pentru maximizarea veniturilor la pensie
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Legislație 2025</h3>
              <p className="text-slate-600">
                Conform ultimelor modificări legislative
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Ghiduri Complete</h3>
              <p className="text-slate-600">
                Informații detaliate pentru fiecare tip de pensie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="pension-calculator" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <PensionCalculator />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ComparisonTable
            title="Comparație Tipuri de Pensii România 2025"
            subtitle="Alege tipul de pensie potrivit pentru situația ta"
            columns={["Caracteristică", "Pensie de Stat", "Pilonul II", "Pilonul III"]}
            items={pensionTypesComparison}
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <TimelineComponent
            title="Cronologia Planificării Pensiei"
            items={pensionTimelineItems}
          />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <EducationalContentSection
            title="Ghiduri Complete pentru Planificarea Pensiei"
            subtitle="Informează-te despre toate aspectele importante ale pensionării în România"
            articles={pensionEducationalContent}
            showFeatured={true}
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">De Ce Să Alegi Calculatorul Nostru?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Instrumentul de încredere pentru planificarea pensiei în România
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Calcule Rapide</h4>
                <p className="text-sm text-slate-600 mt-1">Rezultate în secunde</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">100,000+ Utilizatori</h4>
                <p className="text-sm text-slate-600 mt-1">Încredere demonstrată</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Legislație 2025</h4>
                <p className="text-sm text-slate-600 mt-1">Mereu actualizat</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">100% Gratuit</h4>
                <p className="text-sm text-slate-600 mt-1">Fără costuri ascunse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <FAQSection faqs={pensionFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Începe Planificarea Pensiei Tale Astăzi
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Nu lăsa viitorul la întâmplare. Calculează-ți pensia și planifică-ți viitorul financiar cu încredere.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-green-600 hover:bg-green-50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={() => {
                const calculatorSection = document.getElementById('pension-calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Calculator className="w-5 h-5 mr-3" />
                Calculează Acum
              </Button>
              <Link href="/tipuri-pensii">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Învață Mai Mult
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}