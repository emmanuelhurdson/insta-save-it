import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Download, Instagram, Video, Image, PlayCircle } from 'lucide-react';

interface DownloadResult {
  url: string;
  type: 'post' | 'story' | 'reel';
  downloadUrl: string;
  thumbnail?: string;
}

export function DownloadForm() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.includes('instagram.com')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Instagram URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);
    setResult(null);

    // Simulate download process
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful download
      setProgress(100);
      setResult({
        url,
        type: 'post',
        downloadUrl: '#',
        thumbnail: '/placeholder.svg'
      });

      toast({
        title: "Download Ready!",
        description: "Your Instagram content is ready to download",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      clearInterval(progressInterval);
    }
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'reel':
        return <PlayCircle className="w-5 h-5" />;
      case 'story':
        return <Video className="w-5 h-5" />;
      default:
        return <Image className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="backdrop-blur-glass bg-gradient-card border-white/10">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-instagram rounded-full flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-instagram bg-clip-text text-transparent">
            Instagram Downloader
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Download posts, stories, and reels from public Instagram accounts
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="url"
                placeholder="Paste Instagram URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-background/50 border-white/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            
            {isLoading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Processing...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
            
            <Button
              type="submit"
              variant="instagram"
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Content
                </>
              )}
            </Button>
          </form>

          {result && (
            <Card className="bg-secondary/50 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getContentIcon(result.type)}
                    <div>
                      <p className="font-medium">Content Ready</p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {result.type} • Instagram
                      </p>
                    </div>
                  </div>
                  <Button variant="glass" size="sm" asChild>
                    <a href={result.downloadUrl} download>
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      <Card className="bg-card/30 border-white/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Instagram className="w-5 h-5 text-primary" />
            Supported Content Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Image className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Posts</p>
                <p className="text-sm text-muted-foreground">Photos & carousels</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <PlayCircle className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Reels</p>
                <p className="text-sm text-muted-foreground">Short videos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Video className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Stories</p>
                <p className="text-sm text-muted-foreground">24h content</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}