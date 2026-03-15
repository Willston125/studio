export default function ComingSoonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Pas de Navbar, pas de WhatsApp — page isolée */}
            <style>{`
        nav, .whatsapp-button, [class*="StatusBanner"] {
          display: none !important;
        }
      `}</style>
            {children}
        </>
    );
}
