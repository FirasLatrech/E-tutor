import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import apple from '../assets/icons/apple.svg';

export interface SocialMediaAuthType {
  text: string;
  icon: string;
}

export const SocialMediaAuth: SocialMediaAuthType[] = [
  { text: 'google', icon: google},
  { text: 'facebook', icon: facebook},
  { text: 'apple', icon: apple},
];
