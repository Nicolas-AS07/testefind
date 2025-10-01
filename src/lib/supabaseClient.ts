import { createClient } from '@supabase/supabase-js';

// Leitura das variáveis de ambiente do Vite
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined;

// Sinalizadores de configuração
export const supabaseConfigOk = Boolean(supabaseUrl && supabaseAnonKey);
export const supabaseConfigError = supabaseConfigOk
	? null
	: 'Variáveis VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY ausentes. Crie um arquivo .env baseado em .env.example e reinicie o servidor.';

// Cria o client apenas quando há configuração válida, evitando crash de import
export const supabase = supabaseConfigOk
	? createClient(supabaseUrl as string, supabaseAnonKey as string)
	: (null as unknown as ReturnType<typeof createClient>);
