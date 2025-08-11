import { DownloadForm } from '@/components/DownloadForm';
import { Features } from '@/components/Features';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        <div className="relative container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-instagram bg-clip-text text-transparent">
              InstaSave It
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Download Instagram posts, stories, and reels from public accounts instantly. 
              Fast, secure, and completely free.
            </p>
          </div>
          
          <DownloadForm />
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ for Instagram content creators
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
