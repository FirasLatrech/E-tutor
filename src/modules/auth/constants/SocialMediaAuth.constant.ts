import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import apple from '../assets/icons/apple.svg';

export interface SocialMediaAuthType {
  text: string;
  icon: string;
  href: string;
}

export const SocialMediaAuth: SocialMediaAuthType[] = [
  { text: 'google', icon: google, href: '' },
  { text: 'facebook', icon: facebook, href: '' },
  { text: 'apple', icon: apple, href: '' },
];
