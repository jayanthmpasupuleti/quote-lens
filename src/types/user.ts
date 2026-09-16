export interface UserPreferences {
  currency: string;
  currencySymbol: string;
  locale: string;
}

export interface UserProfile {
  id?: string;
  isSignedIn: boolean;
  name?: string;
  email?: string;
  preferences: UserPreferences;
}
