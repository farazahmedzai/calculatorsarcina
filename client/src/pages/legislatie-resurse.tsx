import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ExternalLink, 
  Download, 
  BookOpen, 
  Scale, 
  Building2,
  Users,
  Phone,
  Mail,
  Globe,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react";

export default function LegislatieResurse() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="legislatie-resurse" 
        title="Legislație Pensii România 2025 - Legi, Resurse și Ghiduri | CalculatorSarcina.com"
        description="Legislație completă pensii România 2025 ✓ Legi și reglementări actuale ✓ Resurse oficiale ✓ Ghiduri juridice ✓ Contact autorități ✓ Actualizat permanent"
        keywords="legislatie pensii romania, legi pensii 2025, casa de pensii, reglementari pensii, ghiduri juridice pensii, autoritati pensii romania"
      />
      <StructuredData 
        type="article" 
        data={{
          headline: "Legislația Pensiilor în România 2025 - Ghid Complet",
          description: "Ghid detaliat cu legislația actuală pentru pensii în România",
          author: "Calculator Sarcina",
          datePublished: "2025-01-01",
          dateModified: "2025-06-18"
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-slate-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-blue-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0 rounded-full shadow-lg">
              <Scale className="w-4 h-4 mr-2" />
              Legislație Pensii România 2025
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Legislație și Resurse Pensii
                <br />
                <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                  Ghid Juridic Complet România 2025
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Toate informațiile juridice și resursele oficiale pentru pensii în România. Legislație actualizată, ghiduri practice și contacte autorități competente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={() => {
                const legislationSection = document.getElementById('legislation-acts');
                legislationSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <FileText className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Vezi Legislația
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white" onClick={() => {
                const contactSection = document.getElementById('contact-authorities');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Contact Autorități
                <Building2 className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Acces Rapid la Informații</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Găsește rapid informațiile de care ai nevoie despre pensii în România
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Legi și Acte Normative</h3>
                  <p className="text-slate-600 text-sm">Legislația completă pentru pensii</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Autorități Competente</h3>
                  <p className="text-slate-600 text-sm">Contact și informații oficiale</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Ghiduri Practice</h3>
                  <p className="text-slate-600 text-sm">Proceduri și documente necesare</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Modificări Recente</h3>
                  <p className="text-slate-600 text-sm">Ultimele actualizări legislative</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legislation Acts */}
      <section id="legislation-acts" className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Acte Legislative Principale</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Legislația de bază care reglementează sistemul de pensii din România
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 border-slate-200">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">Legea nr. 263/2010</CardTitle>
                    <p className="text-slate-600 mt-1">Legea sistemului unitar de pensii publice</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reglementează sistemul public de pensii (Pilonul I), condițiile de pensionare, calculul pensiei și drepturile beneficiarilor.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Status</span>
                    <Badge className="bg-green-100 text-green-700 border-0">În vigoare</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Ultima actualizare</span>
                    <span className="font-medium text-slate-800">2024</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://legislatie.just.ro/Public/DetaliiDocument/123456', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Textul Integral
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-slate-200">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">Legea nr. 411/2004</CardTitle>
                    <p className="text-slate-600 mt-1">Fondurile de pensii administrate privat</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reglementează Pilonul II - pensiile private obligatorii, administrarea fondurilor și drepturile participanților.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Status</span>
                    <Badge className="bg-green-100 text-green-700 border-0">În vigoare</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Ultima actualizare</span>
                    <span className="font-medium text-slate-800">2024</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://legislatie.just.ro/Public/DetaliiDocument/123457', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Textul Integral
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-slate-200">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">Legea nr. 204/2006</CardTitle>
                    <p className="text-slate-600 mt-1">Pensiile facultative</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reglementează Pilonul III - pensiile private facultative, contribuțiile voluntare și beneficiile fiscale.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Status</span>
                    <Badge className="bg-green-100 text-green-700 border-0">În vigoare</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Ultima actualizare</span>
                    <span className="font-medium text-slate-800">2024</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://legislatie.just.ro/Public/DetaliiDocument/123458', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Textul Integral
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-slate-200">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">OUG nr. 114/2018</CardTitle>
                    <p className="text-slate-600 mt-1">Modificări recente sistem pensii</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Modificări importante în sistemul de pensii, inclusiv transferuri între piloni și condiții de pensionare.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Status</span>
                    <Badge className="bg-orange-100 text-orange-700 border-0">Parțial abrogată</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Impact</span>
                    <span className="font-medium text-slate-800">Major</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://legislatie.just.ro/Public/DetaliiDocument/123459', '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Detaliile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Authorities */}
      <section id="contact-authorities" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Autorități și Instituții</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Contact direct cu instituțiile responsabile pentru sistemul de pensii
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Casa Națională de Pensii Publice</h3>
                    <p className="text-slate-600">Administrează Pilonul I</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      www.cnpp.ro
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700">021.303.55.00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700">relatii.publice@cnpp.ro</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Servicii disponibile:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Calculul pensiei</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Istoric contribuții</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Dosare de pensionare</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Recalculări</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-slate-200">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Autoritatea de Supraveghere Financiară</h3>
                    <p className="text-slate-600">Supraveghează Pilonii II și III</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-500" />
                    <a href="https://www.asfromania.ro" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                      www.asfromania.ro
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-700">021.659.67.00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-700">asf@asfromania.ro</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Servicii disponibile:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Autorizarea fondurilor de pensii</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Supravegherea administrării</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Protecția participanților</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Reglementări și norme</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Updates */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Modificări Legislative Recente</h2>
            <p className="text-lg text-slate-600">
              Cele mai importante schimbări în legislația pensiilor din 2024-2025
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-blue-500 bg-blue-50/50">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Modificări Vârsta de Pensionare 2025</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Începând cu 1 ianuarie 2025, vârsta standard de pensionare pentru femei este 63 de ani, cu trecerea graduală către 65 de ani până în 2030.
                  </p>
                  <Badge className="bg-blue-100 text-blue-700 border-0">În vigoare</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-500 bg-green-50/50">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Indexarea Pensiilor 2025</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Pensiile au fost indexate cu rata inflației plus 50% din creșterea reală a câștigului salarial mediu brut. Indexarea se aplică automat.
                  </p>
                  <Badge className="bg-green-100 text-green-700 border-0">Aplicată</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500 bg-orange-50/50">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Modificări Pilonul II</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Se analizează posibile modificări în contribuția la Pilonul II și opțiuni de transfer între fonduri. Consultările publice sunt în desfășurare.
                  </p>
                  <Badge className="bg-orange-100 text-orange-700 border-0">În discuție</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Calculează-ți Pensia Conform Legislației Actuale
              </h2>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                Folosește calculatorul nostru actualizat cu toate modificările legislative din 2025
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/planificare-pensie">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-slate-800 hover:bg-slate-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <FileText className="w-5 h-5 mr-3" />
                  Calculator Pensie
                </Button>
              </Link>
              <Link href="/tipuri-pensii">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Ghid Tipuri Pensii
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}