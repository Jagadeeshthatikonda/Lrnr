export interface EachProfileSectionType {
  id: string;
  value: string;
}

export interface ProfileSectionDetails {
  id: string;
  section: EachProfileSectionType[];
}

export interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}
