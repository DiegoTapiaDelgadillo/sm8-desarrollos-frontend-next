// ─── Navigation ──────────────────────────────────────────────
export interface PageLink {
  text: string;
  route: string;
}

export interface SocialLink {
  route: string;
  name: string;
  icon: string;
}

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  heroImage: string;
  images: string[];
  reduceBrightness: boolean;
  showOnHome: boolean;
}

// ─── Company ─────────────────────────────────────────────────
export interface CompanySection {
  title: string;
  text: string;
}

// ─── Form ────────────────────────────────────────────────────
export interface FormDataState {
  nombre: string;
  correoDestino: string;
  telefono: string;
  asunto: string;
  empresa: string;
  ciudad: string;
  mensaje: string;
  origen: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
  nombre?: string;
  correoDestino?: string;
  telefono?: string;
  asunto?: string;
  empresa?: string;
  ciudad?: string;
  mensaje?: string;
  origen?: string;
}

export type MessageStatus = "neutral" | "loading" | "enviado" | "error";
