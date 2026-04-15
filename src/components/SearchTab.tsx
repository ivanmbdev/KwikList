import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { ShoppingList } from '../types';

interface SearchTabProps {
  lists: ShoppingList[];
  onOpenList: (list: ShoppingList) => void;
}

export default function SearchTab({ lists, onOpenList }: SearchTabProps) {
  const [query, setQuery] = useState('');

  const results =
    query.trim().length >= 2
      ? lists.filter((list) => {
          const q = query.toLowerCase();
          const nameMatch = list.name.toLowerCase().includes(q);
          const itemMatch = list.items?.some((item) =>
            item.name.toLowerCase().includes(q),
          );
          return nameMatch || itemMatch;
        })
      : [];

  const getMatchingItems = (list: ShoppingList) => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return (list.items || []).filter((item) =>
      item.name.toLowerCase().includes(q),
    );
  };

  return (
    <div className="px-6 animate-slide-up">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        Buscador
      </h1>

      {/* Campo de búsqueda */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <label htmlFor="search-input" className="sr-only">
          Buscar lista o producto
        </label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar lista o producto..."
          className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300"
        />
      </div>

      {/* Sin resultados */}
      {query.trim().length >= 2 && results.length === 0 && (
        <div className="text-center py-10">
          <p className="text-slate-400">
            No se encontraron resultados para "{query}"
          </p>
        </div>
      )}

      {/* Resultados */}
      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((list) => {
            const matchingItems = getMatchingItems(list);
            return (
              <button
                key={list.id}
                onClick={() => onOpenList(list)}
                className="group w-full bg-gray-50 dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700/50 hover:border-emerald-400 dark:hover:border-emerald-400 transition-all duration-300 text-left shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">
                    {list.name}
                  </h3>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                {matchingItems.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {matchingItems.slice(0, 5).map((item) => (
                      <span
                        key={item.id}
                        className="text-xs bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-lg"
                      >
                        {item.name}
                      </span>
                    ))}
                    {matchingItems.length > 5 && (
                      <span className="text-xs text-slate-400 px-2 py-1">
                        +{matchingItems.length - 5} más
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Estado vacío */}
      {!query.trim() && (
        <div className="text-center mt-16">
          <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">Escribe para buscar en tus listas</p>
          <p className="text-slate-400 text-sm mt-1">
            Puedes buscar por nombre de lista o producto
          </p>
        </div>
      )}
    </div>
  );
}
