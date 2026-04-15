import { useEffect, FormEvent } from 'react';
import { Plus, Check, LogOut, ClipboardList } from 'lucide-react';

interface AccountModalProps {
  isLoggedIn: boolean;
  userId: string;
  onLogin: (e: FormEvent) => void;
  onLogout: () => void;
  onClose: () => void;
}

export default function AccountModal({
  isLoggedIn,
  userId,
  onLogin,
  onLogout,
  onClose,
}: AccountModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={isLoggedIn ? 'Mi cuenta' : 'Iniciar sesión'}
    >
      <div
        className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[2rem] p-8 shadow-2xl relative animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Cerrar"
        >
          <Plus className="w-6 h-6 rotate-45" />
        </button>

        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 relative">
          <ClipboardList className="w-8 h-8 text-white" />
          <div className="absolute -bottom-1 -right-1 bg-emerald-400 rounded-full p-0.5 border-2 border-white dark:border-slate-800">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        </div>

        {isLoggedIn ? (
          <>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Mi Cuenta
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Sesión activa como invitado
            </p>

            <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-4 mb-8">
              <p className="text-xs text-slate-400 mb-1">Tu identificador</p>
              <p className="text-slate-700 dark:text-slate-300 font-mono text-sm break-all">
                {userId}
              </p>
            </div>

            <button
              onClick={onLogout}
              className="w-full py-4 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors duration-300"
            >
              <LogOut className="w-5 h-5" /> Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Guarda tus listas
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
              Inicia sesión o regístrate para sincronizar tus listas y no
              perderlas.
            </p>
            <form onSubmit={onLogin} className="space-y-3 mb-2">
              <div>
                <label htmlFor="login-email" className="sr-only">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="login-password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
              >
                Iniciar Sesión / Registro
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
