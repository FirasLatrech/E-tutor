import apple from '../assets/icons/apple.svg';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';

export interface SocialMediaAuthType {
  text: string;
  icon: string;
}

export const SocialMediaAuth: SocialMediaAuthType[] = [
  { text: 'google', icon: google },
  { text: 'facebook', icon: facebook },
  { text: 'apple', icon: apple },
];
