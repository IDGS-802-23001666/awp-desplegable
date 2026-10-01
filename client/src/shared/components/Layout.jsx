import { useOnlineStatus } from '@/shared/hooks/useOnlineStatus';

export function Layout({ children }) {
  const online = useOnlineStatus();

  return (
    <div className="layout">
      <header className="header">
        <h1>Mis Tareas</h1>
        <span className={`badge ${online ? 'badge--online' : 'badge--offline'}`}>
          {online ? 'En línea' : 'Sin conexión'}
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
}
