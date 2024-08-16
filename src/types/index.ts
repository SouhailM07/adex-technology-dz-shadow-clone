export interface navLinks {
  label: string;
  link: string;
}

export interface asideLinks {
  img: string;
  link: string;
}

export interface aboutCards {
  direction?: "ltr" | "rtl";
  img: string;
  headLine: string;
  title: string;
  txt: string;
}

export interface activitiesCards {
  cardImg: string;
  cardLogo: string;
  title: string;
  lists: string[];
  link: string;
}

export interface inputs_t {
  form?: any;
  name: string;
  formType?: "input" | "textarea";
  placeholder: string;
}
