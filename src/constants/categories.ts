export interface ServiceCategory {
  id: string;
  name: string;
  iconName: string;
}

export const CATEGORIES: ServiceCategory[] = [
  { id: 'auto', name: 'Car Service & Repair', iconName: 'car' },
  { id: 'hvac', name: 'AC & Cooling', iconName: 'air-conditioner' },
  { id: 'electrical', name: 'Electrical Works', iconName: 'lightning-bolt' },
  { id: 'plumbing', name: 'Plumbing', iconName: 'water' },
  { id: 'home_improvement', name: 'Home Renovation', iconName: 'home' },
  { id: 'appliances', name: 'Appliance Repair', iconName: 'tools' },
  { id: 'dental', name: 'Dental & Medical', iconName: 'medical' },
];
