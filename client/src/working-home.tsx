import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Star, 
  Calculator,
  Users,
  BookOpen,
  CheckCircle2,
  Zap,
  Award,
  Baby,
  Sparkles
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function WorkingHome() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 1rem', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Badge className="px-4 py-2 text-sm font-semibold bg-white/90 text-slate-700 border border-slate-200 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
              Calculator Profesional România
            </Badge>
          </div>
          
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            color: '#1e293b',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Calculează-ți <span style={{ 
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Sarcina</span> și <span style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Pensia</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b', 
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}>
            Platformă modernă și precisă pentru planificarea viitorului tău financiar și familial, conform legislației românești
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/calculator-sarcina">
              <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Baby className="w-5 h-5 mr-3" />
                Calculator Sarcină
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl shadow-lg">
              <Calculator className="w-5 h-5 mr-3" />
              Calculator Pensie
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Soluții Complete pentru <span style={{ 
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Viitorul Tău</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
              Tehnologie avansată și calcule precise conform legislației românești actuale
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            {/* Feature 1 - Pregnancy Calculator */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #ec4899, #7c3aed)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}>
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                    Calculator Sarcină
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                    Calculează data nașterii, săptămâna de sarcină și etapele importante ale dezvoltării bebelușului
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700">DPM</Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">Concepție</Badge>
                  <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">Ecografie</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 2 - Pension Calculator */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}>
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                    Calculator Pensie
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                    Calculează pensia viitoare bazată pe contribuții, vârstă și tipul de pensie dorit
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">Toate tipurile</Badge>
                  <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">Legislație 2025</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 3 - Security & Trust */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                    Securitate Maximă
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                    Datele personale sunt protejate și nu sunt stocate pe servere externe
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">GDPR</Badge>
                  <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700">SSL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogPosts && blogPosts.length > 0 && (
        <section style={{ padding: '4rem 1rem', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
                Articole și Ghiduri
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Informații actualizate despre calcularea sarcinii și pensiilor în România
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {latestPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        Citește mai mult
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}