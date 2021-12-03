export default function Main({ toggled, children }) {
  return (
    <main className={`main_wrapper ${toggled ? 'toggled' : ''}`}>
      {children}
    </main>
  );
}
