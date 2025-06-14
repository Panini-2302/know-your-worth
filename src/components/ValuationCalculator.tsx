import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Clock, Palette, TrendingUp } from 'lucide-react';
interface ValuationData {
  hours: number;
  hourlyRate: number;
  materialCost: number;
  skillLevel: number;
  complexity: number;
  marketDemand: number;
  saleIntent: string;
  revisions: number;
}
interface ValuationCalculatorProps {
  onValuationChange: (valuation: any) => void;
}
const ValuationCalculator = ({
  onValuationChange
}: ValuationCalculatorProps) => {
  const [valuation, setValuation] = useState<ValuationData>({
    hours: 10,
    hourlyRate: 25,
    materialCost: 50,
    skillLevel: 5,
    complexity: 5,
    marketDemand: 5,
    saleIntent: 'original',
    revisions: 2
  });
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const calculatePrice = () => {
    const laborCost = valuation.hours * valuation.hourlyRate;
    const skillMultiplier = 1 + (valuation.skillLevel - 5) * 0.2;
    const complexityMultiplier = 1 + (valuation.complexity - 5) * 0.15;
    const marketMultiplier = 1 + (valuation.marketDemand - 5) * 0.1;
    const revisionCost = valuation.revisions * valuation.hourlyRate * 0.5;
    let intentMultiplier = 1;
    switch (valuation.saleIntent) {
      case 'commission':
        intentMultiplier = 1.3;
        break;
      case 'limited':
        intentMultiplier = 1.5;
        break;
      case 'license':
        intentMultiplier = 0.8;
        break;
      default:
        intentMultiplier = 1;
    }
    const basePrice = (laborCost + valuation.materialCost + revisionCost) * skillMultiplier * complexityMultiplier * marketMultiplier * intentMultiplier;
    return Math.round(basePrice);
  };
  useEffect(() => {
    const price = calculatePrice();
    setCalculatedPrice(price);
    const breakdown = {
      laborCost: valuation.hours * valuation.hourlyRate,
      materialCost: valuation.materialCost,
      skillBonus: (valuation.skillLevel - 5) * 20,
      complexityBonus: (valuation.complexity - 5) * 15,
      marketBonus: (valuation.marketDemand - 5) * 10,
      revisionCost: valuation.revisions * valuation.hourlyRate * 0.5,
      totalPrice: price
    };
    onValuationChange({
      ...valuation,
      ...breakdown
    });
  }, [valuation, onValuationChange]);
  const handleInputChange = (field: keyof ValuationData, value: any) => {
    setValuation(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const getSkillLevelText = (level: number) => {
    const levels = ['Beginner', 'Amateur', 'Intermediate', 'Advanced', 'Professional', 'Expert', 'Master', 'Virtuoso', 'Legendary', 'Grandmaster'];
    return levels[level - 1] || 'Beginner';
  };
  return <Card className="overflow-hidden hover-lift">
      <CardHeader className="bg-gradient-to-r from-blush-rose/30 to-blush-rose/20 bg-sky-50">
        <CardTitle className="flex items-center gap-2 font-playfair">
          <DollarSign className="text-blush-rose" size={24} />
          Smart Valuation Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-sky-50">
        <div className="space-y-6">
          {/* Live Price Preview */}
          <div className="text-center bg-gradient-to-br from-blush-rose/10 to-blush-rose/20 rounded-xl p-6">
            <p className="text-sm font-lato text-gray-600 mb-1">Estimated Value</p>
            <div className="text-4xl font-playfair font-bold text-blush-rose price-pulse">
              ${calculatedPrice.toLocaleString()}
            </div>
            <Badge variant="secondary" className="mt-2 bg-blush-rose/20 text-graphite-soft">
              Live Preview
            </Badge>
          </div>

          {/* Time & Labor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-lato font-medium">
                <Clock size={16} className="text-blush-rose" />
                Hours Spent
              </Label>
              <div className="px-3">
                <Slider value={[valuation.hours]} onValueChange={value => handleInputChange('hours', value[0])} max={100} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1hr</span>
                  <span className="font-medium">{valuation.hours}hrs</span>
                  <span>100hrs</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hourlyRate" className="font-lato font-medium">Hourly Rate ($)</Label>
              <Input id="hourlyRate" type="number" value={valuation.hourlyRate} onChange={e => handleInputChange('hourlyRate', Number(e.target.value))} className="border-gray-300 focus:border-blush-rose" />
            </div>
          </div>

          {/* Materials & Complexity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="materialCost" className="flex items-center gap-2 font-lato font-medium">
                <Palette size={16} className="text-blush-rose" />
                Material Cost ($)
              </Label>
              <Input id="materialCost" type="number" value={valuation.materialCost} onChange={e => handleInputChange('materialCost', Number(e.target.value))} className="border-gray-300 focus:border-blush-rose" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="revisions" className="font-lato font-medium">Revisions Made</Label>
              <Input id="revisions" type="number" value={valuation.revisions} onChange={e => handleInputChange('revisions', Number(e.target.value))} className="border-gray-300 focus:border-blush-rose" min="0" />
            </div>
          </div>

          {/* Skill Level */}
          <div className="space-y-2">
            <Label className="font-lato font-medium">
              Skill Level: <span className="text-blush-rose font-semibold">{getSkillLevelText(valuation.skillLevel)}</span>
            </Label>
            <div className="px-3">
              <Slider value={[valuation.skillLevel]} onValueChange={value => handleInputChange('skillLevel', value[0])} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Beginner</span>
                <span>Expert</span>
                <span>Master</span>
              </div>
            </div>
          </div>

          {/* Complexity & Market */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 bg-sky-50">
              <Label className="font-lato font-medium">Complexity Level</Label>
              <div className="px-3">
                <Slider value={[valuation.complexity]} onValueChange={value => handleInputChange('complexity', value[0])} max={10} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Simple</span>
                  <span className="font-medium">{valuation.complexity}/10</span>
                  <span>Very Complex</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-lato font-medium">
                <TrendingUp size={16} className="text-blush-rose" />
                Market Demand
              </Label>
              <div className="px-3">
                <Slider value={[valuation.marketDemand]} onValueChange={value => handleInputChange('marketDemand', value[0])} max={10} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low</span>
                  <span className="font-medium">{valuation.marketDemand}/10</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sale Intent */}
          <div className="space-y-2 bg-sky-50">
            <Label htmlFor="saleIntent" className="font-lato font-medium">Sale Intent</Label>
            <Select onValueChange={value => handleInputChange('saleIntent', value)}>
              <SelectTrigger className="border-gray-300 focus:border-blush-rose">
                <SelectValue placeholder="Select sale intent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Original Sale</SelectItem>
                <SelectItem value="commission">Commission Work (+30%)</SelectItem>
                <SelectItem value="limited">Limited Edition (+50%)</SelectItem>
                <SelectItem value="license">Licensing (-20%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default ValuationCalculator;