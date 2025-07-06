export const equipmentData: Record<
  string,
  { icon: string; label: string; type: 'boolean' | 'string' }
> = {
  AC: { icon: 'icon-wind', label: 'AC', type: 'boolean' },
  TV: { icon: 'icon-tv', label: 'TV', type: 'boolean' },
  bathroom: { icon: 'icon-shower', label: 'Bathroom', type: 'boolean' },
  kitchen: { icon: 'icon-cup-hot', label: 'Kitchen', type: 'boolean' },
  microwave: { icon: 'icon-microwave', label: 'Microwave', type: 'boolean' },
  radio: { icon: 'icon-radio', label: 'Radio', type: 'boolean' },
  refrigerator: { icon: 'icon-fridge', label: 'Refrigerator', type: 'boolean' },
  water: { icon: 'icon-water', label: 'Water', type: 'boolean' },
  gas: { icon: 'icon-gas', label: 'Gas', type: 'boolean' },
  engine: { icon: 'icon-fuel-pump', label: 'Engine', type: 'string' },
  transmission: { icon: 'icon-diagram', label: 'Transmission', type: 'string' },
};

export const typeData = [
    { key: "van", label: "Van", icon: 'icon-grid-1x2' },
    { key: "fully-integrated", label: "Fully Integrated", icon: 'icon-grid' },
    { key: "alcove", label: "Alcove", icon: 'icon-grid-3x3' },
  ];
