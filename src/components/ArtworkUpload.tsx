
import { useState, useCallback } from 'react';
import { Upload, Image, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ArtworkUploadProps {
  onArtworkChange: (artwork: any) => void;
}

const ArtworkUpload = ({ onArtworkChange }: ArtworkUploadProps) => {
  const [artwork, setArtwork] = useState({
    title: '',
    description: '',
    style: '',
    image: null as File | null,
    imagePreview: ''
  });

  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      handleImageUpload(imageFile);
    }
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newArtwork = {
        ...artwork,
        image: file,
        imagePreview: e.target?.result as string
      };
      setArtwork(newArtwork);
      setIsUploaded(true);
      onArtworkChange(newArtwork);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (field: string, value: string) => {
    const newArtwork = { ...artwork, [field]: value };
    setArtwork(newArtwork);
    onArtworkChange(newArtwork);
  };

  return (
    <Card className="overflow-hidden hover-lift">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold text-charcoal-black mb-2">
              Upload Your Artwork
            </h3>
            <p className="text-gray-600 font-lato">
              Share your creation and get instant valuation
            </p>
          </div>

          {/* Image Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 cursor-pointer
              ${isDragOver ? 'border-sky-coral bg-sky-coral/5' : 'border-gray-300 hover:border-sky-coral hover:bg-gray-50'}
              ${isUploaded ? 'border-green-500 bg-green-50' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            {artwork.imagePreview ? (
              <div className="relative">
                <img
                  src={artwork.imagePreview}
                  alt="Artwork preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                  <CheckCircle size={16} />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-sky-coral to-lemon-cream rounded-full flex items-center justify-center mb-4">
                  {isUploaded ? <CheckCircle className="text-white" size={24} /> : <Upload className="text-white" size={24} />}
                </div>
                <p className="text-lg font-lato font-medium text-gray-700 mb-2">
                  {isDragOver ? 'Drop your artwork here' : 'Drag & drop your artwork'}
                </p>
                <p className="text-sm text-gray-500">or click to browse files</p>
                <p className="text-xs text-gray-400 mt-2">PNG, JPG, JPEG up to 10MB</p>
              </div>
            )}
            
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
            />
          </div>

          {/* Artwork Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="font-lato font-medium">Artwork Title</Label>
              <Input
                id="title"
                placeholder="Enter artwork title"
                value={artwork.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="border-gray-300 focus:border-sky-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style" className="font-lato font-medium">Art Style</Label>
              <Select onValueChange={(value) => handleInputChange('style', value)}>
                <SelectTrigger className="border-gray-300 focus:border-sky-coral">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="impressionist">Impressionist</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                  <SelectItem value="traditional">Traditional</SelectItem>
                  <SelectItem value="mixed-media">Mixed Media</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-lato font-medium">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your artwork, inspiration, or technique..."
              value={artwork.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="border-gray-300 focus:border-sky-coral min-h-[100px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtworkUpload;
