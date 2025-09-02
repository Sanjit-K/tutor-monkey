export interface ResourceLink {
  label: string;
  url: string;
  id: string;
  gtmLabel: string;
}

export interface Resource {
  title: string;
  description: string;
  links: ResourceLink[];
}

export interface ResourceFolder {
  title: string;
  defaultOpen?: boolean;
  resources: Resource[];
}
