import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Calculator,
  Baby,
  PiggyBank,
  FileText,
  AlertTriangle
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* 404 Illustration */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-bold text-slate-200 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <Badge className="px-4 py-2 text-sm font-medium bg-red-50 text-red-700 border border-red-200 rounded-full">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Pagină Negăsită
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Oops! Pagina nu a fost găsită
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
              Pagina pe care o cauți nu există sau a fost mutată. Te îndreaptă către calculatoarele noastre sau acasă.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/">
              <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Înapoi Acasă
              </Button>
            </Link>
            <Link href="/calculator-sarcina">
              <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <Baby className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Calculator Sarcină
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 text-left">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Poate te interesează:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculator-sarcina" className="block">
                  <div className="group p-4 rounded-xl bg-white hover:bg-pink-50 border border-slate-200 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Baby className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Calculator Sarcină</h3>
                        <p className="text-sm text-slate-600">Calculează data nașterii</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/planificare-pensie" className="block">
                  <div className="group p-4 rounded-xl bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PiggyBank className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Calculator Pensie</h3>
                        <p className="text-sm text-slate-600">Planifică-ți pensia</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/tipuri-pensii" className="block">
                  <div className="group p-4 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Calculator className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Tipuri Pensii</h3>
                        <p className="text-sm text-slate-600">Ghid complet</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/legislatie-resurse" className="block">
                  <div className="group p-4 rounded-xl bg-white hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Legislație</h3>
                        <p className="text-sm text-slate-600">Legi și resurse</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Dacă problema persistă, îți recomandăm să revii la{" "}
              <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
                pagina principală
              </Link>{" "}
              și să navighezi din nou.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}