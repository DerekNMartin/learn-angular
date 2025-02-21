interface Name {
  language: string;
  text: string;
}

export interface Country {
  isoCode: string;
  name: Name[];
  officialLanguages: string[];
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: Name[];
  regionalScope: string;
  temporalScope: string;
  nationwide: boolean;
}
